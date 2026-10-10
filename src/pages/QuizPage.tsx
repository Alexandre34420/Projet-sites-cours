import { useState } from 'react';
import { qcmData } from '../data';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';

export function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const question = qcmData[currentQuestionIndex];

  const handleOptionClick = (option: string) => {
    if (showResult) return;
    setSelectedOption(option);
    setShowResult(true);
    
    if (option === question.answer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < qcmData.length - 1) {
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
  };

  return (
    <div className="py-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          QCM interactif
        </h1>
        <p className="mt-2 text-lg text-gray-600">Testez vos connaissances en architecture et programmation.</p>
      </div>

      {!quizFinished ? (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase">
                Question {currentQuestionIndex + 1} sur {qcmData.length}
              </span>
              <span className="text-sm font-medium text-gray-500">
                Score: {score}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-6 leading-relaxed">
              {question.question}
            </h3>

            <div className="space-y-3">
              {question.options.map((option, idx) => {
                const isSelected = selectedOption === option;
                const isCorrect = option === question.answer;
                
                let btnStyle = "border-gray-200 hover:border-blue-500 hover:bg-blue-50 text-gray-700";
                
                if (showResult) {
                  if (isCorrect) {
                    btnStyle = "border-green-500 bg-green-50 text-green-900";
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
                    <span>{option}</span>
                    {showResult && isCorrect && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                    {showResult && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-500" />}
                  </button>
                );
              })}
            </div>

            {showResult && (
              <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-100">
                <h4 className="text-sm font-bold text-blue-900 mb-1">Explication :</h4>
                <p className="text-sm text-blue-800">{question.explanation}</p>
              </div>
            )}

            {showResult && (
              <div className="mt-8 flex justify-end">
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-sm"
                >
                  {currentQuestionIndex < qcmData.length - 1 ? 'Question suivante' : 'Terminer le quiz'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Quiz terminé !</h2>
          <p className="text-lg text-gray-600 mb-8">
            Vous avez obtenu un score de <strong className="text-gray-900">{score}</strong> sur {qcmData.length}.
          </p>
          <button
            onClick={resetQuiz}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-sm mx-auto"
          >
            <RotateCcw className="w-4 h-4" />
            Recommencer
          </button>
        </div>
      )}
    </div>
  );
}
