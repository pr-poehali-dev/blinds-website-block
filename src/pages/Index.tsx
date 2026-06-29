import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const CAT_IMG = 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/files/27b64426-1c2d-4564-a856-77babbe30a8c.jpg';

type Result = {
  emoji: string;
  title: string;
  desc: string;
  color: string;
};

const RESULTS: Record<string, Result> = {
  energetic: {
    emoji: '⚡',
    title: 'Огненный Рыжик',
    desc: 'Ты — вихрь энергии! Носишься по дому, играешь до упаду и обожаешь приключения. С тобой не соскучишься.',
    color: 'from-orange-400 to-pink-500',
  },
  chill: {
    emoji: '😌',
    title: 'Дзен-Котик',
    desc: 'Спокойствие — твоё всё. Любимое дело — нежиться на солнышке и философски смотреть в окно. Мур.',
    color: 'from-sky-400 to-violet-500',
  },
  cuddly: {
    emoji: '💜',
    title: 'Обнимашка',
    desc: 'Ты — мягкий комочек любви. Готов мурлыкать на коленях весь день и согревать сердца. Тебя невозможно не любить.',
    color: 'from-fuchsia-400 to-rose-500',
  },
  curious: {
    emoji: '🔍',
    title: 'Любопытный Исследователь',
    desc: 'Каждая коробка, пакет и щель — твоя добыча. Ты везде сунешь нос и всё проверишь. Настоящий детектив!',
    color: 'from-emerald-400 to-teal-500',
  },
};

const QUESTIONS = [
  {
    q: 'Идеальное утро для тебя — это…',
    options: [
      { t: 'Бегать и будить всех в 5 утра', k: 'energetic', icon: 'Sunrise' },
      { t: 'Поспать ещё часиков восемь', k: 'chill', icon: 'Moon' },
      { t: 'Обняться и не отпускать', k: 'cuddly', icon: 'Heart' },
      { t: 'Изучить новый уголок дома', k: 'curious', icon: 'Compass' },
    ],
  },
  {
    q: 'Что выберешь из этого?',
    options: [
      { t: 'Гоняться за лазером', k: 'energetic', icon: 'Zap' },
      { t: 'Тёплый плед и тишина', k: 'chill', icon: 'Cloud' },
      { t: 'Колени любимого человека', k: 'cuddly', icon: 'Smile' },
      { t: 'Загадочная коробка', k: 'curious', icon: 'Package' },
    ],
  },
  {
    q: 'Твоя суперсила — это…',
    options: [
      { t: 'Прыгнуть на 2 метра вверх', k: 'energetic', icon: 'Rocket' },
      { t: 'Спать 16 часов подряд', k: 'chill', icon: 'BedDouble' },
      { t: 'Лечить грусть мурчанием', k: 'cuddly', icon: 'Sparkles' },
      { t: 'Найти спрятанное лакомство', k: 'curious', icon: 'Search' },
    ],
  },
];

const Index = () => {
  const [step, setStep] = useState(-1);
  const [scores, setScores] = useState<Record<string, number>>({});

  const handleAnswer = (k: string) => {
    const next = { ...scores, [k]: (scores[k] || 0) + 1 };
    setScores(next);
    setStep(step + 1);
  };

  const getResult = (): Result => {
    const best = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
    return RESULTS[best?.[0]] || RESULTS.cuddly;
  };

  const restart = () => {
    setScores({});
    setStep(-1);
  };

  const isStart = step === -1;
  const isQuiz = step >= 0 && step < QUESTIONS.length;
  const isDone = step >= QUESTIONS.length;
  const result = isDone ? getResult() : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-violet-100 font-sans overflow-hidden relative">
      <div className="absolute top-10 left-8 text-6xl animate-float opacity-40 select-none">🐾</div>
      <div className="absolute bottom-16 right-10 text-7xl animate-float opacity-30 select-none" style={{ animationDelay: '1.5s' }}>🐾</div>
      <div className="absolute top-1/2 right-1/4 text-5xl animate-float opacity-20 select-none" style={{ animationDelay: '0.8s' }}>✨</div>

      <div className="container max-w-3xl mx-auto px-4 py-10 md:py-16 relative z-10">
        <header className="text-center mb-10 animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 leading-tight">
            Котики
          </h1>
          <p className="mt-3 text-base md:text-lg font-semibold text-gray-600">
            Пройди тест и узнай, какой ты котик 🐱
          </p>
        </header>

        {isStart && (
          <div className="animate-scale-in text-center">
            <div className="relative inline-block">
              <img
                src={CAT_IMG}
                alt="Котик"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-[2.5rem] shadow-2xl mx-auto border-4 border-white animate-float"
              />
              <span className="absolute -top-4 -right-2 text-5xl animate-wiggle">😻</span>
            </div>
            <h2 className="mt-8 text-2xl md:text-4xl font-extrabold text-gray-800">
              Какой ты котик?
            </h2>
            <p className="mt-3 text-gray-600 max-w-md mx-auto font-medium">
              3 вопроса, 30 секунд и ты узнаешь свою кошачью сущность. Готов?
            </p>
            <Button
              onClick={() => setStep(0)}
              size="lg"
              className="mt-8 text-lg font-bold px-10 py-7 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 shadow-xl hover:scale-105 transition-transform"
            >
              <Icon name="Play" size={22} className="mr-1" />
              Начать тест
            </Button>
          </div>
        )}

        {isQuiz && (
          <div key={step} className="animate-scale-in">
            <div className="flex items-center gap-2 mb-6">
              {QUESTIONS.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                    i <= step ? 'bg-gradient-to-r from-orange-500 to-pink-500' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>

            <p className="text-sm font-bold text-pink-500 mb-2">
              Вопрос {step + 1} из {QUESTIONS.length}
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-7">
              {QUESTIONS[step].q}
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {QUESTIONS[step].options.map((opt) => (
                <button
                  key={opt.k + opt.t}
                  onClick={() => handleAnswer(opt.k)}
                  className="group flex items-center gap-4 text-left bg-white rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border-2 border-transparent hover:border-pink-300"
                >
                  <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center text-pink-500 group-hover:scale-110 transition-transform">
                    <Icon name={opt.icon} size={24} />
                  </span>
                  <span className="font-semibold text-gray-700">{opt.t}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {isDone && result && (
          <div className="animate-scale-in text-center">
            <div className={`inline-flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br ${result.color} shadow-xl mb-6 animate-float`}>
              <span className="text-6xl">{result.emoji}</span>
            </div>
            <p className="text-sm font-bold text-pink-500">Твой результат</p>
            <h2 className={`text-4xl md:text-5xl font-extrabold mt-2 text-transparent bg-clip-text bg-gradient-to-r ${result.color}`}>
              {result.title}
            </h2>
            <p className="mt-5 text-lg text-gray-600 font-medium max-w-lg mx-auto">
              {result.desc}
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={restart}
                size="lg"
                className="text-lg font-bold px-8 py-6 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 shadow-xl hover:scale-105 transition-transform"
              >
                <Icon name="RotateCcw" size={20} className="mr-1" />
                Пройти ещё раз
              </Button>
              <Button
                onClick={restart}
                size="lg"
                variant="outline"
                className="text-lg font-bold px-8 py-6 rounded-full border-2 border-pink-300 text-pink-600 hover:bg-pink-50"
              >
                <Icon name="Share2" size={20} className="mr-1" />
                Поделиться
              </Button>
            </div>
          </div>
        )}

        <footer className="text-center mt-16 text-sm text-gray-400 font-medium animate-fade-in">
          Сделано с любовью к котикам 🐈
        </footer>
      </div>
    </div>
  );
};

export default Index;
