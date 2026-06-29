import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/files/59b5f1c7-d5d4-48f7-b371-5b935e431926.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full mb-6">
                <Icon name="BadgeCheck" size={18} />
                Работаем по всему городу
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Рулонные жалюзи для дома, офиса и школы
              </h1>
              <p className="mt-4 text-lg md:text-xl text-slate-500 font-semibold">
                Замер бесплатно, монтаж за 1 день
              </p>

              <h2 className="mt-6 text-base md:text-lg text-slate-700 font-medium leading-relaxed space-y-1">
                <span className="flex items-start gap-2">
                  <Icon name="Scissors" size={18} className="text-emerald-500 mt-1 flex-shrink-0" />
                  Изготовим под ваш размер за 3–5 дней.
                </span>
                <span className="flex items-start gap-2 mt-2">
                  <Icon name="PhoneCall" size={18} className="text-emerald-500 mt-1 flex-shrink-0" />
                  Один звонок — приедем, измерим, установим.
                </span>
                <span className="flex items-start gap-2 mt-2">
                  <Icon name="ShieldCheck" size={18} className="text-emerald-500 mt-1 flex-shrink-0" />
                  Гарантия 1 год на механизм и ткань.
                </span>
              </h2>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="text-base font-bold px-8 py-6 rounded-xl bg-slate-900 hover:bg-slate-800 shadow-lg hover:scale-[1.03] transition-transform"
                >
                  <Icon name="Ruler" size={20} className="mr-1" />
                  Вызвать замерщика
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base font-bold px-8 py-6 rounded-xl border-2 border-slate-200 hover:bg-slate-50"
                >
                  <Icon name="Phone" size={20} className="mr-1" />
                  Позвонить нам
                </Button>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3">
                {[
                  { emoji: '🚗', t: 'Замер бесплатно' },
                  { emoji: '⏱', t: 'Срок от 3 дней' },
                  { emoji: '✅', t: 'Гарантия 1 год' },
                ].map((item) => (
                  <div
                    key={item.t}
                    className="flex flex-col items-center gap-2 text-center bg-slate-50 border border-slate-100 rounded-2xl px-3 py-4 hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <span className="text-3xl">{item.emoji}</span>
                    <span className="text-sm font-bold text-slate-700 leading-tight">{item.t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-scale-in">
              <img
                src={HERO_IMG}
                alt="Рулонные жалюзи в интерьере"
                className="w-full h-[420px] md:h-[520px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-6 py-4 hidden md:block">
                <p className="text-3xl font-extrabold text-slate-900">1 день</p>
                <p className="text-sm text-slate-500 font-medium">от замера до монтажа</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;