import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function CtaSection() {
  return (
    <>
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
    </>
  );
}
