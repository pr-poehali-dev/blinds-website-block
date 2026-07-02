import Icon from '@/components/ui/icon';

export default function WhyUsSection() {
  return (
    <>
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
    </>
  );
}
