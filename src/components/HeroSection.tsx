import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const SLIDES = [
  {
    src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/bucket/f8a22746-439e-4e39-955b-f66491cbd102.jpg',
    label: 'Квартира',
  },
  {
    src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/files/67f38a29-4a33-44fb-9e63-c2c020981719.jpg',
    label: 'Офис',
  },
  {
    src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/bucket/ee41c672-d200-4e91-9950-b31598fb889b.jpg',
    label: 'Школа',
  },
];

export default function HeroSection() {
  const [slide, setSlide] = useState(0);

  const prev = () => setSlide((s) => (s - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setSlide((s) => (s + 1) % SLIDES.length);

  return (
    <>
      {/* Sticky header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <img
            src="https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/bucket/88d8052f-6df8-4551-aed4-475146b4b9b1.png"
            alt="Маркиза-ДВ"
            className="h-20 w-auto object-contain"
          />
          <div className="flex items-center gap-2">
            <a href="tel:+79502818877" className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-[#E85D04] transition-colors mr-1">
              <Icon name="Phone" size={15} className="text-[#E85D04]" />
              <span className="hidden sm:inline">+7 (950) 281-88-77</span>
            </a>
            {/* WhatsApp */}
            <a href="https://wa.me/79502818877" target="_blank" rel="noopener noreferrer"
              title="WhatsApp"
              className="w-8 h-8 rounded-full bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center transition-colors flex-shrink-0"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.122 1.528 5.858L0 24l6.335-1.508A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.002-1.368l-.36-.214-3.722.976.994-3.628-.235-.374A9.818 9.818 0 1112 21.818z"/></svg>
            </a>
            {/* Telegram */}
            <a href="https://t.me/markiza_dvvl" target="_blank" rel="noopener noreferrer"
              title="Telegram"
              className="w-8 h-8 rounded-full bg-sky-500 hover:bg-sky-600 flex items-center justify-center transition-colors flex-shrink-0"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.19 13.668l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.958.891z"/></svg>
            </a>
            {/* MAX */}
            <a href="https://max.ru/u/f9LHodD0cOIFHWgDuT5PtLwynlKm2RZ96kjgADbkhDjLZBR2mIzM3YJNUFA" target="_blank" rel="noopener noreferrer"
              title="MAX"
              className="w-8 h-8 rounded-full bg-purple-500 hover:bg-purple-600 flex items-center justify-center transition-colors flex-shrink-0"
            >
              <span className="text-white text-[10px] font-black leading-none">MAX</span>
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        {/* Логотип */}
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 bg-orange-50 px-4 py-2 rounded-full mb-6">
                <Icon name="BadgeCheck" size={18} />
                Работаем по всему городу
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Рулонные жалюзи для дома, офиса и школы
                <span className="block text-2xl md:text-3xl lg:text-4xl text-orange-500 mt-2">во Владивостоке и Артёме</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl text-slate-500 font-semibold">
                Замер бесплатно, монтаж за 1 день
              </p>

              <h2 className="mt-6 text-base md:text-lg text-slate-700 font-medium leading-relaxed">
                <span className="flex items-start gap-2">
                  <Icon name="Scissors" size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                  Изготовим под ваш размер за 3–5 дней.
                </span>
                <span className="flex items-start gap-2 mt-2">
                  <Icon name="PhoneCall" size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                  Один звонок — приедем, измерим, установим.
                </span>
                <span className="flex items-start gap-2 mt-2">
                  <Icon name="ShieldCheck" size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                  Гарантия 1 год на механизм и ткань.
                </span>
              </h2>

              <div className="mt-8">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-lg font-extrabold px-10 py-7 rounded-2xl bg-[#E85D04] hover:bg-[#d45203] text-white shadow-[0_8px_32px_rgba(232,93,4,0.4)] hover:shadow-[0_12px_40px_rgba(232,93,4,0.55)] hover:scale-[1.04] transition-all duration-200"
                >
                  <Icon name="Ruler" size={22} className="mr-2" />
                  Получить бесплатный замер
                </Button>
                <p className="mt-3 text-sm text-slate-400 font-medium">
                  Без предоплаты. Замерщик приедет в удобное время.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3">
                {[
                  { emoji: '🚗', t: 'Замер бесплатно' },
                  { emoji: '⏱', t: 'Срок от 3 дней' },
                  { emoji: '✅', t: 'Гарантия 1 год' },
                ].map((item) => (
                  <div
                    key={item.t}
                    className="flex flex-col items-center gap-2 text-center bg-white border border-slate-100 rounded-2xl px-3 py-4 hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <span className="text-3xl">{item.emoji}</span>
                    <span className="text-sm font-bold text-slate-700 leading-tight">{item.t}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-500 border-t border-slate-200 pt-6">
                <span className="text-yellow-400 text-lg tracking-tight">★★★★★</span>
                <span className="text-slate-800 font-bold">4.9 из 5</span>
                <span className="text-slate-300">|</span>
                <span>1 240 установок</span>
                <span className="text-slate-300">|</span>
                <span>Работаем с 2015 года</span>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  key={slide}
                  src={SLIDES[slide].src}
                  alt={SLIDES[slide].label}
                  className="w-full h-[420px] md:h-[520px] object-cover animate-scale-in"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {SLIDES.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => setSlide(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === slide ? 'w-8 bg-white' : 'w-2 bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                <div className="absolute bottom-4 right-4 flex gap-2">
                  {SLIDES.map((s, i) => (
                    <span
                      key={i}
                      onClick={() => setSlide(i)}
                      className={`text-xs font-bold px-3 py-1 rounded-full cursor-pointer transition-all ${
                        i === slide
                          ? 'bg-[#E85D04] text-white'
                          : 'bg-white/70 text-slate-700 hover:bg-white'
                      }`}
                    >
                      {s.label}
                    </span>
                  ))}
                </div>

                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow transition-all"
                >
                  <Icon name="ChevronLeft" size={20} />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow transition-all"
                >
                  <Icon name="ChevronRight" size={20} />
                </button>
              </div>

              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-3 hidden md:block">
                <p className="text-2xl font-extrabold text-slate-900">1 день</p>
                <p className="text-xs text-slate-500 font-medium">от замера до монтажа</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}