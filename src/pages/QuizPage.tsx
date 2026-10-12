import { useState, useMemo } from 'react';
import { qcmData, QcmItem } from '../data';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw, 
  BrainCircuit, 
  Code, 
  Coffee, 
  GraduationCap, 
  Terminal,
  Trophy,
  Sparkles,
  Globe
} from 'lucide-react';

type SubjectFilter = 'Tous' | 'Architecture' | 'Python' | 'Java' | 'Langage C' | 'Développement Web';
type DifficultyFilter = 'tous' | 'debutant' | 'intermediaire' | 'expert';

interface SubjectConfig {
  id: SubjectFilter;
  label: string;
  icon: typeof BrainCircuit;
  iconColor: string;
}

const SUBJECT_ITEMS: SubjectConfig[] = [
  { id: 'Tous', label: 'Tous', icon: BrainCircuit, iconColor: 'text-blue-600' },
  { id: 'Architecture', label: 'Architecture', icon: GraduationCap, iconColor: 'text-purple-600' },
  { id: 'Python', label: 'Python', icon: Code, iconColor: 'text-emerald-600' },
  { id: 'Java', label: 'Java', icon: Coffee, iconColor: 'text-amber-600' },
  { id: 'Langage C', label: 'Langage C', icon: Terminal, iconColor: 'text-cyan-600' },
  { id: 'Développement Web', label: 'Développement Web', icon: Globe, iconColor: 'text-orange-600' },
];

export function QuizPage() {
  const [selectedSubject, setSelectedSubject] = useState<SubjectFilter>('Tous');
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyFilter>('tous');

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState<{ question: QcmItem; userAnswer: string }[]>([]);

  // Count questions per subject
  const subjectCounts = useMemo(() => {
    const counts: Record<SubjectFilter, number> = {
      'Tous': qcmData.length,
      'Architecture': 0,
      'Python': 0,
      'Java': 0,
      'Langage C': 0,
      'Développement Web': 0
    };
    qcmData.forEach((q) => {
      const s = q.subject;
      if (s === 'Architecture') counts['Architecture']++;
      else if (s === 'Python') counts['Python']++;
      else if (s === 'Java') counts['Java']++;
      else if (s === 'Langage C' || s.toLowerCase() === 'c') counts['Langage C']++;
      else if (s === 'Développement Web' || s.toLowerCase().includes('web')) counts['Développement Web']++;
    });
    return counts;
  }, []);

  // Filter questions based on selected subject and difficulty
  const activeQuestions = useMemo(() => {
    return qcmData.filter((q) => {
      const matchSubject =
        selectedSubject === 'Tous' ||
        q.subject.toLowerCase() === selectedSubject.toLowerCase();

      const matchDifficulty =
        selectedDifficulty === 'tous' ||
        !q.difficulty ||
        q.difficulty === selectedDifficulty;

      return matchSubject && matchDifficulty;
    });
  }, [selectedSubject, selectedDifficulty]);

  const question = activeQuestions[currentQuestionIndex];

  const handleSubjectChange = (subject: SubjectFilter) => {
    setSelectedSubject(subject);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setQuizFinished(false);
    setWrongAnswers([]);
  };

  const handleDifficultyChange = (diff: DifficultyFilter) => {
    setSelectedDifficulty(diff);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setQuizFinished(false);
    setWrongAnswers([]);
  };

  const handleOptionClick = (option: string) => {
    if (showResult || !question) return;
    setSelectedOption(option);
    setShowResult(true);

    if (option === question.answer) {
      setScore((s) => s + 1);
    } else {
      setWrongAnswers((prev) => [...prev, { question, userAnswer: option }]);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex((i) => i + 1);
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

  return (
    <div className="py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header section */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Entraînement & Auto-évaluation
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
          QCM Interactif
        </h1>
        <p className="text-base text-gray-600 max-w-2xl mx-auto">
          Sélectionnez une matière pour réviser et tester vos connaissances en temps réel.
        </p>
      </div>

      {/* 1. Subject filter pills */}
      <div className="mb-6">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {SUBJECT_ITEMS.map((item) => {
            const isSelected = selectedSubject === item.id;
            const Icon = item.icon;
            const count = subjectCounts[item.id];
            return (
              <button
                key={item.id}
                onClick={() => handleSubjectChange(item.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-bold transition-all shadow-xs border ${
                  isSelected
                    ? 'bg-gray-900 text-white border-gray-900 ring-2 ring-gray-900/10 shadow-md'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : item.iconColor}`} />
                <span>{item.label}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                    isSelected ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Difficulty Filter */}
      {selectedSubject !== 'Développement Web' ? (
        <div className="flex items-center justify-center gap-1 bg-white p-1 rounded-xl border border-gray-200 max-w-md mx-auto mb-8 shadow-xs">
          {(['tous', 'debutant', 'intermediaire', 'expert'] as DifficultyFilter[]).map((diff) => (
            <button
              key={diff}
              onClick={() => handleDifficultyChange(diff)}
              className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all capitalize ${
                selectedDifficulty === diff
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {diff === 'tous' ? 'Tous niveaux' : diff.replace('e', 'é')}
            </button>
          ))}
        </div>
      ) : (
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-semibold border border-orange-200">
            5 questions clés de révision Web (HTML, CSS, JS, PHP)
          </span>
        </div>
      )}

      {/* Quiz Finished View */}
      {quizFinished ? (
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8 sm:p-12 animate-in fade-in duration-300">
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Trophy className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Quiz terminé !</h2>
            <div className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold mb-4">
              Matière : {selectedSubject}
            </div>
            <p className="text-2xl text-gray-700 mb-2 font-medium">
              Score : <strong className="text-gray-900 font-extrabold text-3xl">{score} / {activeQuestions.length}</strong>
              <span className="text-lg text-gray-500 ml-2">
                ({Math.round((score / (activeQuestions.length || 1)) * 100)}%)
              </span>
            </p>
            <p className="text-base font-semibold text-blue-600">
              {score === activeQuestions.length
                ? "Félicitations ! Un score parfait !"
                : score >= activeQuestions.length * 0.75
                ? "Excellent travail ! Notions très bien assimilées."
                : score >= activeQuestions.length * 0.5
                ? "Bonne base ! Quelques concepts à consolider."
                : "Entraînez-vous encore, la pratique fait la maîtrise !"}
            </p>
          </div>

          {/* Review of wrong answers */}
          {wrongAnswers.length > 0 && (
            <div className="mb-10 text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-500" />
                Bilan de vos erreurs ({wrongAnswers.length})
              </h3>
              <div className="space-y-5">
                {wrongAnswers.map((err, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-200/80">
                    <h4 className="text-base font-bold text-gray-900 mb-4">
                      {idx + 1}. {err.question.question}
                    </h4>

                    <div className="flex flex-col sm:flex-row gap-3 mb-4 text-sm">
                      <div className="flex-1 flex items-start gap-2.5 text-red-700 bg-red-50/80 p-3.5 rounded-xl border border-red-100">
                        <XCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold block text-xs uppercase tracking-wider text-red-800 mb-0.5">Votre réponse</span>
                          <span>{err.userAnswer}</span>
                        </div>
                      </div>

                      <div className="flex-1 flex items-start gap-2.5 text-green-800 bg-green-50/80 p-3.5 rounded-xl border border-green-100">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold block text-xs uppercase tracking-wider text-green-800 mb-0.5">Bonne réponse</span>
                          <span>{err.question.answer}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-100/60 text-sm">
                      <span className="font-bold text-blue-900 flex items-center gap-1.5 mb-1 text-xs uppercase tracking-wider">
                        <BrainCircuit className="w-4 h-4 text-blue-600" /> Explication
                      </span>
                      <p className="text-blue-950 leading-relaxed">{err.question.explanation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {wrongAnswers.length === 0 && activeQuestions.length > 0 && (
            <div className="mb-10 text-center p-8 bg-green-50 rounded-2xl border border-green-100">
              <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-green-900 mb-1">Aucune erreur !</h3>
              <p className="text-green-800 text-sm">Vous maîtrisez parfaitement l'ensemble des questions de cette série.</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4 border-t border-gray-100">
            <button
              onClick={resetQuiz}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gray-100 text-gray-800 font-bold hover:bg-gray-200 transition-colors text-sm"
            >
              <RotateCcw className="w-4 h-4" /> Rejouer cette matière
            </button>
            <button
              onClick={() => handleSubjectChange('Tous')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors shadow-sm text-sm"
            >
              Passer à toutes les matières
            </button>
          </div>
        </div>
      ) : activeQuestions.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-gray-200 border-dashed p-8">
          <BrainCircuit className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-gray-900 mb-1">Aucune question trouvée</h3>
          <p className="text-sm text-gray-500 mb-6">Aucune question ne correspond à cette combinaison de filtres.</p>
          <button
            onClick={() => {
              setSelectedSubject('Tous');
              setSelectedDifficulty('tous');
            }}
            className="px-5 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            Réinitialiser les filtres
          </button>
        </div>
      ) : (
        /* Active Question Card */
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Progress bar */}
          <div className="w-full bg-gray-100 h-1.5">
            <div
              className="bg-blue-600 h-1.5 transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / activeQuestions.length) * 100}%` }}
            />
          </div>

          <div className="p-6 sm:p-10">
            {/* Question meta header */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 font-bold text-xs rounded-lg uppercase tracking-wider">
                  {question.subject}
                </span>
                {question.difficulty && (
                  <span className="px-2.5 py-1 bg-gray-100 text-gray-600 font-medium text-xs rounded-lg capitalize">
                    {question.difficulty}
                  </span>
                )}
                <span className="text-xs sm:text-sm font-semibold text-gray-500 tracking-wider">
                  Question {currentQuestionIndex + 1} / {activeQuestions.length}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs sm:text-sm font-bold text-gray-700 bg-gray-50 px-3 py-1 rounded-lg border border-gray-200">
                  Score : <span className="text-blue-600">{score}</span> / {activeQuestions.length}
                </span>
                <button
                  onClick={resetQuiz}
                  className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                  title="Réinitialiser ce quiz"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Question title */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8 leading-snug">
              {question.question}
            </h3>

            {/* Answer Options */}
            <div className="space-y-3">
              {question.options.map((option, idx) => {
                const isSelected = selectedOption === option;
                const isCorrect = option === question.answer;

                let btnStyle = "border-gray-200 hover:border-blue-400 hover:bg-blue-50/50 text-gray-800 bg-white";

                if (showResult) {
                  if (isCorrect) {
                    btnStyle = "border-green-500 bg-green-50 text-green-900 shadow-xs font-semibold";
                  } else if (isSelected) {
                    btnStyle = "border-red-500 bg-red-50 text-red-900 font-semibold";
                  } else {
                    btnStyle = "border-gray-200 text-gray-400 opacity-60 bg-gray-50";
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(option)}
                    disabled={showResult}
                    className={`w-full text-left px-5 py-4 rounded-2xl border-2 transition-all font-medium ${btnStyle} flex items-center justify-between gap-4`}
                  >
                    <span className="text-base sm:text-lg leading-relaxed">{option}</span>
                    {showResult && isCorrect && <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />}
                    {showResult && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-600 shrink-0" />}
                  </button>
                );
              })}
            </div>

            {/* Explanation box */}
            {showResult && (
              <div className="mt-8 p-5 rounded-2xl bg-blue-50/80 border border-blue-200 animate-in fade-in duration-200">
                <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <BrainCircuit className="w-4 h-4 text-blue-600" /> Explication détaillée
                </h4>
                <p className="text-sm sm:text-base text-blue-950 leading-relaxed">{question.explanation}</p>
              </div>
            )}

            {/* Action button */}
            {showResult && (
              <div className="mt-8 flex justify-end">
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors shadow-sm text-base"
                >
                  {currentQuestionIndex < activeQuestions.length - 1 ? 'Question suivante' : 'Terminer le quiz'}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
