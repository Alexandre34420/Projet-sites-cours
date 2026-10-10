import React, { useState, useMemo } from 'react';
import { 
  QUIZ_QUESTIONS, 
  QuizQuestion, 
  QuizLevel, 
  LEVEL_METADATA 
} from '../quizData';
import { CheatSheetItem } from '../data';
import { CodeBlock } from './CodeBlock';
import { 
  Trophy, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  BookOpen, 
  Sparkles, 
  Award, 
  ChevronRight, 
  Flame,
  Check
} from 'lucide-react';

interface QuizSectionProps {
  onOpenCardModal: (cardId: number) => void;
  theme: 'vscDarkPlus' | 'dracula';
  allCards: CheatSheetItem[];
}

export const QuizSection: React.FC<QuizSectionProps> = ({
  onOpenCardModal,
  theme,
  allCards,
}) => {
  const [selectedLevel, setSelectedLevel] = useState<QuizLevel | null>(null);
  const [questionCountLimit, setQuestionCountLimit] = useState<number>(20);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  // Best scores from localStorage
  const [savedScores, setSavedScores] = useState<Record<string, { score: number; total: number }>>(() => {
    try {
      const data = localStorage.getItem('python_cheatsheet_quiz_scores_v2');
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  });

  // Filter questions for the selected level
  const activeQuestions = useMemo(() => {
    if (!selectedLevel) return [];
    let pool: QuizQuestion[] = [];
    if (selectedLevel === 'tous') {
      pool = [...QUIZ_QUESTIONS];
    } else {
      pool = QUIZ_QUESTIONS.filter((q) => q.level === selectedLevel);
    }

    if (questionCountLimit && questionCountLimit < pool.length) {
      return pool.slice(0, questionCountLimit);
    }
    return pool;
  }, [selectedLevel, questionCountLimit]);

  const currentQuestion: QuizQuestion | undefined = activeQuestions[currentQuestionIndex];

  // Start a quiz session
  const handleStartQuiz = (level: QuizLevel, limit: number = 20) => {
    setSelectedLevel(level);
    setQuestionCountLimit(limit);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setIsAnswerSubmitted(false);
    setIsQuizCompleted(false);
  };

  // Select an option
  const handleSelectOption = (optionIndex: number) => {
    if (isAnswerSubmitted || !currentQuestion) return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionIndex,
    }));
    setIsAnswerSubmitted(true);
  };

  // Next question or finish
  const handleNextQuestion = () => {
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setIsAnswerSubmitted(false);
    } else {
      // Calculate score and complete
      const finalScore = calculateScore();
      if (selectedLevel) {
        const key = `${selectedLevel}_${activeQuestions.length}`;
        const currentBest = savedScores[key]?.score || 0;
        if (finalScore >= currentBest) {
          const updated = {
            ...savedScores,
            [key]: { score: finalScore, total: activeQuestions.length },
          };
          setSavedScores(updated);
          try {
            localStorage.setItem('python_cheatsheet_quiz_scores_v2', JSON.stringify(updated));
          } catch {
            // ignore
          }
        }
      }
      setIsQuizCompleted(true);
    }
  };

  // Calculate total score
  const calculateScore = () => {
    let score = 0;
    activeQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  // Reset to level selector
  const handleReset = () => {
    setSelectedLevel(null);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setIsAnswerSubmitted(false);
    setIsQuizCompleted(false);
  };

  // Find related cheat sheet card for quick study
  const getRelatedCard = (cardId: number) => {
    return allCards.find((c) => c.id === cardId);
  };

  // 1. SCREEN: Level Selector
  if (!selectedLevel) {
    return (
      <div className="max-w-4xl mx-auto py-4 sm:py-8">
        {/* Banner */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200 mb-3">
            <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>60 Questions Interactives Disponibles</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Entraînez-vous par niveau de difficulté
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto mt-2">
            Chaque niveau propose désormais <strong>20 questions ciblées</strong> avec des extraits de code réels, corrections immédiates et liens directs vers les fiches mémos.
          </p>
        </div>

        {/* Level Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {(Object.keys(LEVEL_METADATA) as QuizLevel[]).map((lvlKey) => {
            const meta = LEVEL_METADATA[lvlKey];
            const qCount =
              lvlKey === 'tous'
                ? QUIZ_QUESTIONS.length
                : QUIZ_QUESTIONS.filter((q) => q.level === lvlKey).length;
            const key = `${lvlKey}_${lvlKey === 'tous' ? 60 : 20}`;
            const best = savedScores[key];

            return (
              <div
                key={lvlKey}
                onClick={() => handleStartQuiz(lvlKey, lvlKey === 'tous' ? 60 : 20)}
                className="group relative bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-gray-300 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${meta.badgeClass}`}
                    >
                      <span className={`w-2 h-2 rounded-full ${meta.dotColor}`} />
                      {meta.name}
                    </span>
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                      {qCount} questions
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {meta.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                    {meta.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    {best ? (
                      <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                        <Trophy className="w-3.5 h-3.5 text-amber-500" />
                        <span>Record : {best.score} / {best.total}</span>
                      </span>
                    ) : (
                      <span className="text-gray-400">Non commencé</span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-gray-900 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all">
                    <span>Lancer le QCM</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info card */}
        <div className="mt-8 p-4 rounded-xl bg-gray-100/70 border border-gray-200/80 flex items-start gap-3 text-xs text-gray-600">
          <HelpCircle className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Astuce de révision : Si vous hésitez sur une réponse, terminez la question pour lire l&apos;<strong>explication complète</strong> puis cliquez sur le lien <strong>« Revoir la fiche »</strong> pour visualiser la fiche de cours sans perdre votre progression.
          </p>
        </div>
      </div>
    );
  }

  // 2. SCREEN: Results & Summary
  if (isQuizCompleted) {
    const finalScore = calculateScore();
    const total = activeQuestions.length;
    const percentage = Math.round((finalScore / total) * 100);

    let appreciation = 'Excellent travail !';
    let appreciationDesc = 'Vous maîtrisez parfaitement ces notions de Python.';
    if (percentage < 50) {
      appreciation = 'Courage, l’entraînement paie !';
      appreciationDesc = 'Prenez le temps de revoir les fiches associées ci-dessous pour combler vos lacunes.';
    } else if (percentage < 80) {
      appreciation = 'Très bon résultat !';
      appreciationDesc = 'Vous avez une solide compréhension, quelques révisions sur les détails feront la différence.';
    }

    return (
      <div className="max-w-3xl mx-auto py-6 sm:py-10">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 sm:p-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-200 flex items-center justify-center mx-auto mb-4 shadow-sm">
            <Trophy className="w-8 h-8 text-amber-900" />
          </div>

          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 mb-2">
            Niveau {LEVEL_METADATA[selectedLevel].name} ({total} questions)
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            {appreciation}
          </h2>
          <p className="text-sm text-gray-500 mt-1 max-w-md mx-auto">
            {appreciationDesc}
          </p>

          {/* Score display */}
          <div className="my-6 inline-flex items-center gap-6 px-6 py-4 rounded-xl bg-gray-50 border border-gray-200">
            <div>
              <div className="text-3xl font-black text-gray-900">{finalScore} / {total}</div>
              <div className="text-xs text-gray-500 font-medium">Bonnes réponses</div>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div>
              <div className={`text-3xl font-black ${percentage >= 70 ? 'text-emerald-600' : percentage >= 50 ? 'text-amber-600' : 'text-rose-600'}`}>
                {percentage}%
              </div>
              <div className="text-xs text-gray-500 font-medium">Taux de réussite</div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => handleStartQuiz(selectedLevel, questionCountLimit)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-900 text-white text-xs font-semibold hover:bg-gray-800 transition cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Recommencer ce quiz (20 questions)</span>
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs font-semibold transition cursor-pointer"
            >
              <span>Changer de niveau</span>
            </button>
          </div>
        </div>

        {/* Detailed Correction Review */}
        <div className="mt-8 space-y-4">
          <h3 className="text-base font-bold text-gray-900 flex items-center justify-between px-1">
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-600" />
              <span>Détail et correction des {total} questions</span>
            </span>
            <span className="text-xs font-normal text-gray-500">
              {finalScore} réussie(s), {total - finalScore} erreur(s)
            </span>
          </h3>

          {activeQuestions.map((q, idx) => {
            const chosen = userAnswers[q.id];
            const isCorrect = chosen === q.correctIndex;
            const relatedCard = getRelatedCard(q.relatedCardId);

            return (
              <div
                key={q.id}
                className={`bg-white rounded-xl border p-4 sm:p-5 transition-all ${
                  isCorrect ? 'border-gray-200' : 'border-rose-200 bg-rose-50/10'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-gray-400">
                      Q{idx + 1}.
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-gray-100 text-gray-600">
                      {q.category}
                    </span>
                  </div>
                  <div>
                    {isCorrect ? (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Correct</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600">
                        <XCircle className="w-4 h-4" />
                        <span>Erreur</span>
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-sm font-semibold text-gray-900 mb-2">
                  {q.question}
                </p>

                {q.code && (
                  <div className="my-2.5">
                    <CodeBlock code={q.code} language="python" theme={theme} />
                  </div>
                )}

                {/* Options recap */}
                <div className="space-y-1.5 my-3 text-xs">
                  {q.options.map((opt, oIdx) => {
                    const isRightAnswer = oIdx === q.correctIndex;
                    const isChosenWrong = oIdx === chosen && !isCorrect;

                    let optStyle = 'border-gray-200 bg-gray-50 text-gray-700';
                    if (isRightAnswer) {
                      optStyle = 'border-emerald-300 bg-emerald-50 text-emerald-900 font-semibold';
                    } else if (isChosenWrong) {
                      optStyle = 'border-rose-300 bg-rose-50 text-rose-900 line-through';
                    }

                    return (
                      <div
                        key={oIdx}
                        className={`p-2.5 rounded-lg border flex items-center justify-between ${optStyle}`}
                      >
                        <span>{opt}</span>
                        {isRightAnswer && (
                          <span className="text-[11px] font-bold text-emerald-700">Bonne réponse</span>
                        )}
                        {isChosenWrong && (
                          <span className="text-[11px] font-bold text-rose-700">Votre choix</span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Explanation */}
                <div className="mt-3 p-3 rounded-lg bg-gray-50 border border-gray-200/80 text-xs text-gray-600 space-y-2">
                  <p className="leading-relaxed">
                    <strong>Explication :</strong> {q.explanation}
                  </p>
                  {relatedCard && (
                    <button
                      type="button"
                      onClick={() => onOpenCardModal(relatedCard.id)}
                      className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-semibold transition cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Revoir la fiche #{relatedCard.id} : {relatedCard.title}</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // 3. SCREEN: Active Question
  if (!currentQuestion) return null;

  const currentSelectedOption = userAnswers[currentQuestion.id];
  const isCorrect = currentSelectedOption === currentQuestion.correctIndex;
  const progressPercent = Math.round(((currentQuestionIndex + 1) / activeQuestions.length) * 100);
  const relatedCard = getRelatedCard(currentQuestion.relatedCardId);

  return (
    <div className="max-w-3xl mx-auto py-4 sm:py-8">
      {/* Quiz Header Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-800">
              Niveau {LEVEL_METADATA[selectedLevel].name}
            </span>
            <span>•</span>
            <span className="font-mono font-medium">
              Question {currentQuestionIndex + 1} sur {activeQuestions.length}
            </span>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="text-gray-400 hover:text-gray-700 transition cursor-pointer text-xs"
          >
            Quitter le quiz
          </button>
        </div>

        {/* Animated Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden mb-3">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Question Mini Jump Navigation Dots */}
        <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {activeQuestions.map((q, idx) => {
            const ans = userAnswers[q.id];
            const isCurrent = idx === currentQuestionIndex;
            let dotClass = 'bg-gray-200 text-gray-500 border-transparent';

            if (ans !== undefined) {
              if (ans === q.correctIndex) {
                dotClass = 'bg-emerald-500 text-white border-emerald-600';
              } else {
                dotClass = 'bg-rose-500 text-white border-rose-600';
              }
            } else if (isCurrent) {
              dotClass = 'bg-blue-600 text-white ring-2 ring-blue-300';
            }

            return (
              <button
                key={q.id}
                type="button"
                onClick={() => {
                  setCurrentQuestionIndex(idx);
                  setIsAnswerSubmitted(userAnswers[q.id] !== undefined);
                }}
                className={`w-6 h-6 rounded-md text-[10px] font-mono font-semibold flex items-center justify-center shrink-0 border transition-all cursor-pointer ${dotClass}`}
                title={`Question ${idx + 1}`}
              >
                {ans !== undefined && ans === q.correctIndex ? (
                  <Check className="w-3 h-3 stroke-[3]" />
                ) : (
                  idx + 1
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 sm:p-7">
        {/* Category tag */}
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 border border-gray-200">
            <Sparkles className="w-3 h-3 text-amber-500" />
            {currentQuestion.category}
          </span>
          <span className="text-xs font-mono text-gray-400">
            Q#{currentQuestionIndex + 1}
          </span>
        </div>

        {/* Question text */}
        <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
          {currentQuestion.question}
        </h3>

        {/* Code snippet if applicable */}
        {currentQuestion.code && (
          <div className="my-4">
            <CodeBlock
              code={currentQuestion.code}
              language="python"
              theme={theme}
            />
          </div>
        )}

        {/* Options List */}
        <div className="space-y-2.5 my-5">
          {currentQuestion.options.map((opt, idx) => {
            const isSelected = currentSelectedOption === idx;
            const isThisCorrect = idx === currentQuestion.correctIndex;

            let buttonStyle = 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 text-gray-800';

            if (isAnswerSubmitted) {
              if (isThisCorrect) {
                buttonStyle = 'border-emerald-500 bg-emerald-50/90 text-emerald-900 font-semibold ring-1 ring-emerald-500';
              } else if (isSelected && !isCorrect) {
                buttonStyle = 'border-rose-400 bg-rose-50 text-rose-900 font-semibold ring-1 ring-rose-400';
              } else {
                buttonStyle = 'border-gray-200 bg-gray-50 text-gray-400 opacity-60';
              }
            }

            return (
              <button
                key={idx}
                type="button"
                disabled={isAnswerSubmitted}
                onClick={() => handleSelectOption(idx)}
                className={`w-full text-left p-3.5 sm:p-4 rounded-xl border text-sm transition-all flex items-center justify-between cursor-pointer ${buttonStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-gray-100 flex items-center justify-center text-xs font-mono font-bold text-gray-500 shrink-0">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{opt}</span>
                </div>

                {isAnswerSubmitted && isThisCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-2" />
                )}
                {isAnswerSubmitted && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0 ml-2" />
                )}
              </button>
            );
          })}
        </div>

        {/* Instant Feedback & Explanation */}
        {isAnswerSubmitted && (
          <div className="mt-6 pt-5 border-t border-gray-100 animate-in fade-in duration-200 space-y-4">
            <div
              className={`p-4 rounded-xl border flex items-start gap-3 text-xs sm:text-sm ${
                isCorrect
                  ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                  : 'bg-rose-50/70 border-rose-200 text-rose-950'
              }`}
            >
              {isCorrect ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              )}
              <div className="space-y-1">
                <div className="font-bold text-sm">
                  {isCorrect ? 'Excellente réponse !' : 'Réponse incorrecte'}
                </div>
                <p className="leading-relaxed text-gray-700">
                  {currentQuestion.explanation}
                </p>
                {relatedCard && (
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => onOpenCardModal(relatedCard.id)}
                      className="inline-flex items-center gap-1.5 text-xs text-blue-700 hover:text-blue-900 font-semibold underline underline-offset-2 transition cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Réviser la fiche #{relatedCard.id} ({relatedCard.title})</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Next button */}
            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={handleNextQuestion}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 text-white text-xs sm:text-sm font-semibold hover:bg-gray-800 transition cursor-pointer shadow-sm"
              >
                <span>
                  {currentQuestionIndex < activeQuestions.length - 1
                    ? 'Question suivante'
                    : 'Voir le bilan final'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
