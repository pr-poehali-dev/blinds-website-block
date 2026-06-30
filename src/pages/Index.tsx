import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const SLIDES = [
  {
    src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/files/2a87fd9c-7b8b-4729-970f-1a9421db7e10.jpg',
    label: 'Квартира',
  },
  {
    src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/files/67f38a29-4a33-44fb-9e63-c2c020981719.jpg',
    label: 'Офис',
  },
  {
    src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/files/5ad4023e-93ea-4c96-b6b0-66fe692b1039.jpg',
    label: 'Школа',
  },
];

const Index = () => {
  const [slide, setSlide] = useState(0);

  const prev = () => setSlide((s) => (s - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setSlide((s) => (s + 1) % SLIDES.length);

  return (
    <div className="min-h-screen bg-[#F8F8F8] font-sans text-slate-900">

      {/* Sticky header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <img
            src="https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/bucket/88d8052f-6df8-4551-aed4-475146b4b9b1.png"
            alt="Маркиза-ДВ"
            className="h-10 w-auto object-contain"
          />
          <a href="tel:+7XXXXXXXXXX" className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-[#E85D04] transition-colors">
            <Icon name="Phone" size={16} className="text-[#E85D04]" />
            +7 (XXX) XXX-XX-XX
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        {/* Логотип */}
        <div className="container mx-auto px-4 pt-8 pb-0">
          <img
            src="https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/bucket/88d8052f-6df8-4551-aed4-475146b4b9b1.png"
            alt="Маркиза-ДВ"
            className="h-16 md:h-20 w-auto object-contain"
          />
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 bg-orange-50 px-4 py-2 rounded-full mb-6">
                <Icon name="BadgeCheck" size={18} />
                Работаем по всему городу
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Рулонные жалюзи для дома, офиса и школы
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

      <section className="bg-[#F5F7FA] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-12">
            Почему клиенты выбирают нас —<br className="hidden md:block" /> и возвращаются снова
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'Palette', emoji: '🎨', title: 'Более 200 вариантов тканей и цветов', desc: 'От прозрачного тюля до полного затемнения blackout. Подберём под любой интерьер и освещение.' },
              { icon: 'Ruler', emoji: '📐', title: 'Точный замер — в подарок', desc: 'Наш специалист приедет, измерит каждое окно и сразу покажет образцы на вашем объекте.' },
              { icon: 'Settings', emoji: '⚙️', title: 'Производство под ваш размер', desc: 'Не стандартные размеры из каталога, а точные. Режем и шьём под каждое окно отдельно.' },
              { icon: 'Wrench', emoji: '🔧', title: 'Монтаж в день доставки', desc: 'Приедем, установим, объясним управление. Без грязи, пыли и лишних дырок в стене.' },
              { icon: 'Building2', emoji: '🏢', title: 'Работаем с юридическими лицами', desc: 'Договор, счёт, закрывающие документы. Опыт с офисами, школами, больницами, отелями.' },
              { icon: 'ShieldCheck', emoji: '🛡', title: 'Гарантия 3 года', desc: 'Если механизм выйдет из строя — заменим бесплатно. Не звонок в колл-центр, а приезд мастера.' },
            ].map((item) => (
              <div
                key={item.title}
                className="group bg-white rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 border border-slate-100 hover:border-orange-200"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                  <Icon name={item.icon} size={24} className="text-[#E85D04]" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F0F2F5] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              4 простых шага — от звонка до красивых окон
            </h2>
            <p className="mt-3 text-base md:text-lg text-slate-500 font-medium">
              Вам не нужно ничего делать руками. Мы берём всё на себя.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-orange-200 via-[#E85D04] to-orange-200 z-0" />
            {[
              { n: '1', emoji: '📞', title: 'Оставьте заявку', desc: 'Позвоните или заполните форму. Перезвоним в течение 15 минут в рабочее время.' },
              { n: '2', emoji: '📏', title: 'Бесплатный замер на объекте', desc: 'Приедем в удобное время. Замерим все окна, покажем образцы тканей и рассчитаем стоимость.' },
              { n: '3', emoji: '🏭', title: 'Изготовление 3–5 рабочих дней', desc: 'Производим жалюзи под ваш точный размер. Уведомим, когда будут готовы.' },
              { n: '4', emoji: '🔧', title: 'Монтаж и сдача объекта', desc: 'Установим, покажем как пользоваться, уберём за собой. Подпишем акт приёма-передачи.' },
            ].map((step) => (
              <div key={step.n} className="relative z-10 bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-[#E85D04] text-white flex items-center justify-center text-2xl font-extrabold mb-4 shadow-[0_4px_16px_rgba(232,93,4,0.35)]">
                  {step.n}
                </div>
                <span className="text-3xl mb-3">{step.emoji}</span>
                <h3 className="text-base font-extrabold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-2xl mx-auto bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm flex gap-4 items-start">
            <span className="text-4xl flex-shrink-0">💬</span>
            <div>
              <p className="text-slate-700 font-medium leading-relaxed italic">
                «Оформили 12 окон в офисе за один день монтажа. Всё сделали аккуратно, без лишней суеты. Рекомендуем.»
              </p>
              <p className="mt-3 text-sm font-bold text-slate-500">
                — Марина К., офис-менеджер, ООО «Технопром»
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 4: Галерея + отзывы */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 text-center">
            Наши работы: 1 240 объектов по всему городу
          </h2>

          {/* Галерея 2×3 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {[
              { src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/files/fc1287ab-ef4c-4539-bea7-6cb2f8774ac1.jpg', label: 'Спальня — блэкаут, полное затемнение' },
              { src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/files/b8f188aa-a0bf-4248-8b9d-bc08e9070063.jpg', label: 'Офис open space, 24 окна — серые, цепной механизм' },
              { src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/files/5c35de6f-f2d7-4274-a9e3-e8783a321917.jpg', label: 'Детский сад — белые, безопасный механизм' },
              { src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/files/87521666-29da-491e-8648-85106f4cb13a.jpg', label: 'Кухня — влагостойкая ткань' },
              { src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/files/0ac6aa51-0083-4bc2-9aec-661b6f743400.jpg', label: 'Школьный класс — затемнение под проектор' },
              { src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/files/df1a9252-38d4-4298-9c28-241e370ce644.jpg', label: 'Переговорная — рулонные день-ночь' },
            ].map((photo) => (
              <div key={photo.src} className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-sm hover:shadow-xl transition-all duration-300">
                <img
                  src={photo.src}
                  alt={photo.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-0 left-0 right-0 px-3 py-3 text-white text-xs font-semibold translate-y-full group-hover:translate-y-0 transition-transform duration-300 leading-tight">
                  📸 {photo.label}
                </p>
              </div>
            ))}
          </div>

          {/* Отзывы */}
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {[
              {
                name: 'Анна В.',
                city: 'г. Москва',
                text: '«Заказала рулонные жалюзи в спальню и детскую. Менеджер помог выбрать ткань по образцам прямо у нас дома. Сделали за 4 дня, установили быстро и аккуратно. Ребёнок наконец-то спит в темноте!»',
                initials: 'АВ',
                color: 'bg-rose-100 text-rose-600',
              },
              {
                name: 'Дмитрий П.',
                city: 'ООО «Логистик Групп»',
                text: '«Устанавливали рулонные жалюзи в нашем офисе — 38 окон на двух этажах. Всё сделали за два дня, предоставили полный пакет документов для бухгалтерии. Качество механизма — проверили полгода спустя, ни одного нарекания.»',
                initials: 'ДП',
                color: 'bg-blue-100 text-blue-600',
              },
              {
                name: 'Наталья С.',
                city: 'МБОУ Школа № 47',
                text: '«Оснащали 11 классов в школе. Требовались жалюзи с затемнением под проектор и безопасные механизмы без шнура для детей. Всё согласовали быстро, уложились в бюджет, документы без замечаний.»',
                initials: 'НС',
                color: 'bg-emerald-100 text-emerald-600',
              },
            ].map((r) => (
              <div key={r.name} className="bg-[#F8F9FB] rounded-2xl p-6 border border-slate-100 flex flex-col gap-4">
                <div className="text-yellow-400 text-lg tracking-tight">★★★★★</div>
                <p className="text-sm text-slate-600 font-medium leading-relaxed flex-1 italic">{r.text}</p>
                <div className="flex items-center gap-3 pt-2 border-t border-slate-200">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0 ${r.color}`}>
                    {r.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{r.name}</p>
                    <p className="text-xs text-slate-500">{r.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Логотипы клиентов */}
          <div className="border-t border-slate-100 pt-10">
            <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Нам доверяют</p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {[
                { icon: 'Building2', label: 'Бизнес-центры' },
                { icon: 'GraduationCap', label: 'Школы и вузы' },
                { icon: 'Baby', label: 'Детские сады' },
                { icon: 'HeartPulse', label: 'Медцентры' },
                { icon: 'Hotel', label: 'Отели' },
              ].map((c) => (
                <div key={c.label} className="flex flex-col items-center gap-2 bg-slate-50 rounded-xl px-6 py-4 border border-slate-100 min-w-[110px]">
                  <Icon name={c.icon} size={28} className="text-slate-400" />
                  <span className="text-xs font-semibold text-slate-500">{c.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* БЛОК 5: Оффер + форма расчёта + FAQ */}
      <section className="bg-[#1A2B4A] py-16 md:py-24">
        <div className="container mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Узнайте стоимость за 2 минуты — без звонка
            </h2>
            <p className="mt-3 text-base md:text-lg text-slate-300 font-medium">
              Оставьте параметры — мы пришлём точный расчёт на WhatsApp или email.<br className="hidden md:block" />
              Замер бесплатно. Без обязательств.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* Оффер */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🎁</span>
                <div>
                  <p className="text-xs font-bold text-[#E85D04] uppercase tracking-widest">Спецпредложение</p>
                  <h3 className="text-xl font-extrabold text-white mt-0.5">При заказе от 5 окон</h3>
                </div>
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  'Бесплатный замер (обычно 500 ₽)',
                  'Бесплатная доставка',
                  'Монтаж в подарок (обычно от 1 500 ₽/окно)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={12} className="text-white" />
                    </span>
                    <span className="text-slate-200 font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto bg-[#E85D04]/15 border border-[#E85D04]/30 rounded-2xl px-5 py-4">
                <p className="text-sm font-bold text-[#E85D04] flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  Акция действует до конца месяца
                </p>
                <p className="text-xs text-slate-300 mt-1 font-medium">
                  Осталось мест на замер на этой неделе: <span className="text-white font-extrabold">4</span>
                </p>
              </div>
            </div>

            {/* Форма */}
            <div className="bg-white rounded-3xl p-8 flex flex-col gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Тип помещения</label>
                <Select>
                  <SelectTrigger className="h-13 rounded-xl border-slate-200 text-slate-700 font-medium">
                    <SelectValue placeholder="Выберите тип помещения" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="flat">Квартира</SelectItem>
                    <SelectItem value="office">Офис</SelectItem>
                    <SelectItem value="school">Школа / детский сад</SelectItem>
                    <SelectItem value="other">Другое</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Количество окон</label>
                <Select>
                  <SelectTrigger className="h-13 rounded-xl border-slate-200 text-slate-700 font-medium">
                    <SelectValue placeholder="Выберите количество" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-3">1–3 окна</SelectItem>
                    <SelectItem value="4-10">4–10 окон</SelectItem>
                    <SelectItem value="11-30">11–30 окон</SelectItem>
                    <SelectItem value="30+">Более 30 окон</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Телефон или WhatsApp</label>
                <Input
                  placeholder="+7 (___) ___-__-__"
                  className="h-13 rounded-xl border-slate-200 text-slate-700 font-medium placeholder:text-slate-400"
                />
              </div>
              <Button
                size="lg"
                className="w-full h-14 text-base font-extrabold rounded-xl bg-[#E85D04] hover:bg-[#d45203] text-white shadow-[0_6px_24px_rgba(232,93,4,0.4)] hover:scale-[1.02] transition-all duration-200 mt-1"
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Получить расчёт бесплатно
              </Button>
              <p className="text-center text-xs text-slate-400 font-medium -mt-2">
                Ответим в течение 15 минут. Без спама и навязчивых звонков.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto mt-16">
            <h3 className="text-xl font-extrabold text-white text-center mb-8">Частые вопросы</h3>
            <Accordion type="single" collapsible className="flex flex-col gap-3">
              {[
                { q: 'Сколько стоят рулонные жалюзи?', a: 'От 850 ₽ за окно стандартного размера с монтажом. Точную стоимость рассчитаем после замера или по вашим размерам.' },
                { q: 'Как долго ждать?', a: '3–5 рабочих дней с момента замера и оплаты. Для срочных заказов — уточняйте при заявке.' },
                { q: 'Можно без сверления?', a: 'Да. Устанавливаем на створку окна — без дырок в стенах. Подходит для аренды и пластиковых окон.' },
                { q: 'Вы работаете с юридическими лицами?', a: 'Да. Договор, счёт на оплату, накладная, акт — полный пакет. Возможна постоплата для постоянных клиентов.' },
                { q: 'Что если жалюзи сломаются?', a: 'Гарантия 3 года на механизм и ткань. Мастер приедет и устранит бесплатно.' },
              ].map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 overflow-hidden"
                >
                  <AccordionTrigger className="text-white font-bold text-sm md:text-base text-left hover:no-underline py-4">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 font-medium text-sm pb-4 leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </section>

      {/* Мини-блок доверия */}
      <div className="bg-[#FDF6EE] border-y border-amber-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {[
              { emoji: '🔒', label: 'Безопасная оплата' },
              { emoji: '📃', label: 'Договор на все работы' },
              { emoji: '🚫', label: 'Никакого спама' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-sm font-bold text-slate-600">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* БЛОК 6: Финальный CTA */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">

            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Красивые окна —<br />ближе, чем вы думаете
            </h2>
            <p className="mt-5 text-base md:text-lg text-slate-500 font-medium leading-relaxed">
              Оставьте заявку прямо сейчас — и уже завтра наш мастер<br className="hidden md:block" />
              будет у вас с образцами тканей и рулеткой.<br />
              <span className="font-bold text-slate-700">Бесплатно. Без обязательств. Без ожидания.</span>
            </p>

            <Button
              size="lg"
              className="mt-8 text-lg font-extrabold px-10 py-7 rounded-2xl bg-[#E85D04] hover:bg-[#d45203] text-white shadow-[0_8px_32px_rgba(232,93,4,0.4)] hover:shadow-[0_12px_40px_rgba(232,93,4,0.55)] hover:scale-[1.04] transition-all duration-200"
            >
              Вызвать замерщика бесплатно
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>

            <div className="mt-10 flex flex-col items-center gap-4">
              <a href="tel:+7XXXXXXXXXX" className="flex items-center gap-3 text-slate-700 font-bold hover:text-[#E85D04] transition-colors">
                <span className="text-xl">📞</span>
                <span>+7 (XXX) XXX-XX-XX</span>
                <span className="text-sm font-medium text-slate-400">Пн–Пт 9:00–19:00, Сб 10:00–17:00</span>
              </a>

              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="https://wa.me/7XXXXXXXXXX"
                  className="flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold px-5 py-3 rounded-xl transition-colors text-sm"
                >
                  <span className="text-lg">💬</span> Написать в WhatsApp
                </a>
                <a
                  href="https://t.me/username"
                  className="flex items-center gap-2 bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold px-5 py-3 rounded-xl transition-colors text-sm"
                >
                  <span className="text-lg">📲</span> Написать в Telegram
                </a>
              </div>

              <p className="flex items-center gap-2 text-sm text-slate-400 font-medium mt-1">
                <span>📍</span> Ваш город — выезд по всему городу и области
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;