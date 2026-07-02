
export default function GalleryReviewsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">

        {/* Отзывы */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 text-center">
          Что говорят наши клиенты
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {[
            {
              name: 'Анна В.',
              city: 'г. Владивосток',
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
              { name: 'РоссельхозБанк', bg: 'bg-green-50', text: 'text-green-800', border: 'border-green-200' },
              { name: 'ТАФИ', bg: 'bg-blue-50', text: 'text-blue-800', border: 'border-blue-200' },
              { name: 'Мечников Плюс', bg: 'bg-teal-50', text: 'text-teal-800', border: 'border-teal-200' },
              { name: 'ЮНИЛАБ', bg: 'bg-emerald-50', text: 'text-emerald-800', border: 'border-emerald-200' },
              { name: 'FESCO', bg: 'bg-slate-50', text: 'text-slate-800', border: 'border-slate-300' },
              { name: 'Газпромбанк', bg: 'bg-blue-50', text: 'text-blue-900', border: 'border-blue-200' },
              { name: 'ОКЕАН', bg: 'bg-cyan-50', text: 'text-cyan-800', border: 'border-cyan-200' },
              { name: 'SuMotori', bg: 'bg-sky-50', text: 'text-sky-800', border: 'border-sky-200' },
              { name: 'Морской Траст', bg: 'bg-indigo-50', text: 'text-indigo-800', border: 'border-indigo-200' },
              { name: 'Иллюzion', bg: 'bg-red-50', text: 'text-red-800', border: 'border-red-200' },
              { name: 'Fabio Pizza', bg: 'bg-orange-50', text: 'text-orange-800', border: 'border-orange-200' },
              { name: 'Супра', bg: 'bg-purple-50', text: 'text-purple-800', border: 'border-purple-200' },
              { name: 'Земля Леопарда', bg: 'bg-amber-50', text: 'text-amber-800', border: 'border-amber-200' },
              { name: 'Vladivostok Grand Hotel', bg: 'bg-stone-50', text: 'text-stone-700', border: 'border-stone-200' },
              { name: 'Транзит', bg: 'bg-zinc-50', text: 'text-zinc-800', border: 'border-zinc-300' },
            ].map(({ name, bg, text, border }) => (
              <div key={name} className={`${bg} ${border} border rounded-xl px-5 py-3 flex items-center justify-center min-w-[130px]`}>
                <span className={`${text} text-sm font-bold whitespace-nowrap`}>{name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}