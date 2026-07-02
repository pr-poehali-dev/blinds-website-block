import Icon from '@/components/ui/icon';

export default function GalleryReviewsSection() {
  return (
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
  );
}
