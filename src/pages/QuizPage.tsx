import { useState, useMemo } from 'react';
import { qcmData } from '../data';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, BrainCircuit, Code, Coffee, GraduationCap } from 'lucide-react';

type Subject = 'python' | 'architecture' | 'java';
type Difficulty = 'debutant' | 'intermediaire' | 'expert';

export function QuizPage() {
  const [hasStarted, setHasStarted] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<Subject>('python');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('debutant');

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState<{question: typeof qcmData[0], userAnswer: string}[]>([]);

  // Filter questions based on selection
  const activeQuestions = useMemo(() => {
    return qcmData.filter(q => q.subject === selectedSubject && q.difficulty === selectedDifficulty);
  }, [selectedSubject, selectedDifficulty]);

  const question = activeQuestions[currentQuestionIndex];

  const handleOptionClick = (option: string) => {
    if (showResult) return;
    setSelectedOption(option);
    setShowResult(true);
    
    if (option === question.answer) {
      setScore(s => s + 1);
    } else {
      setWrongAnswers(prev => [...prev, { question, userAnswer: option }]);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex(i => i + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setQuizFinished(false);
    setWrongAnswers([]);
  };

  const backToMenu = () => {
    resetQuiz();
    setHasStarted(false);
  };

  const startQuiz = () => {
    if (activeQuestions.length === 0) {
      alert("Désolé, aucune question n'est disponible pour cette combinaison !");
      return;
    }
    setHasStarted(true);
  };

  // Setup Menu View
  if (!hasStarted) {
    return (
      <div className="py-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <BrainCircuit className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-4">
            Configuration du Quiz
          </h1>
          <p className="text-lg text-gray-600">Choisissez une matière et un niveau de difficulté pour commencer l'entraînement.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6 sm:p-10">
          <div className="mb-8">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">1. Choisissez la Matière</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button onClick={() => setSelectedSubject('python')} className={`flex flex-col items-center p-4 rounded-2xl border-2 transition-all ${selectedSubject === 'python' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-100 hover:border-gray-300 text-gray-600'}`}>
                <Code className="w-6 h-6 mb-2" />
                <span className="font-semibold">Python</span>
              </button>
              <button onClick={() => setSelectedSubject('architecture')} className={`flex flex-col items-center p-4 rounded-2xl border-2 transition-all ${selectedSubject === 'architecture' ? 'border-purple-500 bg-purple-50 text-purple-700' : 'border-gray-100 hover:border-gray-300 text-gray-600'}`}>
                <GraduationCap className="w-6 h-6 mb-2" />
                <span className="font-semibold">Architecture</span>
              </button>
              <button onClick={() => setSelectedSubject('java')} className={`flex flex-col items-center p-4 rounded-2xl border-2 transition-all ${selectedSubject === 'java' ? 'border-amber-500 bg-amber-50 text-amber-900' : 'border-gray-100 hover:border-gray-300 text-gray-600'}`}>
                <Coffee className="w-6 h-6 mb-2" />
                <span className="font-semibold">Java</span>
              </button>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">2. Choisissez le Niveau</h3>
            <div className="flex bg-gray-100 p-1 rounded-xl">
              {(['debutant', 'intermediaire', 'expert'] as Difficulty[]).map(diff => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all capitalize ${selectedDifficulty === diff ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  {diff.replace('e', 'é')}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={startQuiz}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gray-900 text-white font-bold text-lg hover:bg-gray-800 transition-colors shadow-md"
          >
            Lancer le Quiz
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  // Quiz Finished View
  if (quizFinished) {
    const percentage = Math.round((score / activeQuestions.length) * 100);
    let feedback = "";
    if (percentage === 100) feedback = "C'est un sans-faute, bravo !";
    else if (percentage >= 75) feedback = "Très bon travail ! Encore quelques petits détails à revoir.";
    else if (percentage >= 50) feedback = "Pas mal, mais il y a encore de la marge de progression.";
    else feedback = "Aïe... Une petite révision s'impose !";

    return (
      <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8 sm:p-12">
          <div className="text-center mb-10">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Quiz terminé !</h2>
            <p className="text-xl text-gray-600 mb-2">
              Score : <strong className="text-gray-900 font-bold">{score} / {activeQuestions.length}</strong> ({percentage}%)
            </p>
            <p className="text-lg font-medium text-blue-600">{feedback}</p>
          </div>

          {wrongAnswers.length > 0 && (
            <div className="mb-10 text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Bilan de vos erreurs</h3>
              <div className="space-y-6">
                {wrongAnswers.map((err, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Question : {err.question.question}</h4>
                    
                    <div className="flex flex-col sm:flex-row gap-4 mb-4">
                      <div className="flex-1 flex items-start gap-3 text-red-700 bg-red-50 p-4 rounded-xl border border-red-100">
                        <XCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-sm block mb-1">Votre réponse :</span>
                          <span className="font-medium">{err.userAnswer}</span>
                        </div>
                      </div>

                      <div className="flex-1 flex items-start gap-3 text-green-700 bg-green-50 p-4 rounded-xl border border-green-100">
                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-sm block mb-1">Bonne réponse :</span>
                          <span className="font-medium">{err.question.answer}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100/50">
                      <span className="font-bold text-blue-800 text-sm flex items-center gap-2 mb-2">
                        <BrainCircuit className="w-5 h-5" /> Conseil d'amélioration
                      </span>
                      <p className="text-blue-900 text-sm leading-relaxed">{err.question.explanation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {wrongAnswers.length === 0 && (
            <div className="mb-10 text-center p-8 bg-green-50 rounded-2xl border border-green-100">
              <h3 className="text-2xl font-bold text-green-800 mb-2">Félicitations !</h3>
              <p className="text-green-700">Vous avez maîtrisé ce sujet à la perfection. Passez au niveau supérieur !</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button
              onClick={resetQuiz}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gray-100 text-gray-800 font-bold hover:bg-gray-200 transition-colors"
            >
              <RotateCcw className="w-5 h-5" /> Rejouer ce quiz
            </button>
            <button
              onClick={backToMenu}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors shadow-md"
            >
              Choisir un autre quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Active Quiz View
  return (
    <div className="py-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <button onClick={backToMenu} className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
          ← Retour au menu
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 sm:p-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 font-bold text-xs rounded-lg uppercase tracking-wider">
                {selectedSubject}
              </span>
              <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase">
                Question {currentQuestionIndex + 1} / {activeQuestions.length}
              </span>
            </div>
            <span className="text-sm font-medium text-gray-500 bg-gray-50 px-3 py-1 rounded-lg border border-gray-100">
              Score: {score}
            </span>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-8 leading-snug">
            {question.question}
          </h3>

          <div className="space-y-3">
            {question.options.map((option, idx) => {
              const isSelected = selectedOption === option;
              const isCorrect = option === question.answer;
              
              let btnStyle = "border-gray-200 hover:border-blue-500 hover:bg-blue-50 text-gray-700";
              
              if (showResult) {
                if (isCorrect) {
                  btnStyle = "border-green-500 bg-green-50 text-green-900 shadow-sm";
                } else if (isSelected) {
                  btnStyle = "border-red-500 bg-red-50 text-red-900";
                } else {
                  btnStyle = "border-gray-200 text-gray-400 opacity-50";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(option)}
                  disabled={showResult}
                  className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all font-medium ${btnStyle} flex items-center justify-between`}
                >
                  <span className="text-lg">{option}</span>
                  {showResult && isCorrect && <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />}
                  {showResult && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-red-500 shrink-0" />}
                </button>
              );
            })}
          </div>

          {showResult && (
            <div className="mt-8 p-5 rounded-2xl bg-blue-50 border border-blue-100">
              <h4 className="text-sm font-bold text-blue-900 mb-2 flex items-center gap-2">
                <BrainCircuit className="w-4 h-4" /> Explication
              </h4>
              <p className="text-base text-blue-900 leading-relaxed">{question.explanation}</p>
            </div>
          )}

          {showResult && (
            <div className="mt-8 flex justify-end">
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors shadow-md"
              >
                {currentQuestionIndex < activeQuestions.length - 1 ? 'Question suivante' : 'Terminer le quiz'}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
