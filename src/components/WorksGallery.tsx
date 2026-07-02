import { useState, useRef } from 'react';
import Icon from '@/components/ui/icon';

const TABS = [
  {
    id: 'apartments',
    label: '🏠 Квартиры',
    photos: [
      { src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/bucket/c1ac7c65-7718-462d-98ed-c813de39ca7b.jpg', caption: 'Гостиная, рулонные + шторы' },
      { src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/bucket/726e7f0d-8ccc-4b20-8e52-b9b5c563f929.jpg', caption: 'Рулонные на деревянном окне' },
      { src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/bucket/24cb23fb-b467-4e41-866c-9800b4ec7f39.jpg', caption: 'Кухня, рулонные + шторы' },
      { src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/bucket/dc642629-38bb-463c-bbf7-0c560d2e8687.jpg', caption: 'Мансарда, нестандартные окна' },
      { src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/bucket/f883a716-0f2c-440f-83e7-1893bb8c94a3.jpg', caption: 'Кабинет, день-ночь' },
      { src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/bucket/23e89320-3462-42a3-a4ad-c280d35d1afe.jpg', caption: 'Ванная, день-ночь' },
      { src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/bucket/76603d04-b514-4022-ab29-f60210c14383.jpg', caption: 'Мансарда, день-ночь + шторы' },
      { src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/bucket/9c3a01cb-35f6-4c19-bc73-c3b19eeb30e1.jpg', caption: 'Ванная, день-ночь в деревянном откосе' },
      { src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/bucket/765856e6-d4d7-4c5a-b83a-4eb2071044e7.jpg', caption: 'Детская, день-ночь' },
      { src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/bucket/afeb0a6e-9f97-416a-8a29-0ff20007e10b.jpg', caption: 'Панорамное окно, блэкаут' },
    ],
  },
  {
    id: 'offices',
    label: '🏢 Офисы',
    photos: [
      { src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/files/653ab23f-2b2c-4274-9c75-87dfa89c9012.jpg', caption: 'Open space, 24 окна — серые рулонные' },
      { src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/files/2779270c-4d76-46d6-b15c-d310237d89b4.jpg', caption: 'Переговорная, день-ночь' },
      { src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/files/2b5564c2-ac14-44f1-a049-1a6597abf596.jpg', caption: 'Кабинет директора, затемнение' },
      { src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/files/b4088ba7-7eca-4677-8105-4f32339b4a56.jpg', caption: 'Ресепшн, белые рулонные' },
    ],
  },
  {
    id: 'schools',
    label: '🏫 Школы',
    photos: [
      { src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/files/cc40e014-486d-4d2f-a370-97c620e307e0.jpg', caption: 'Класс, затемнение под проектор' },
      { src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/files/1c0552d7-5c71-421f-bddc-857e78d03ba2.jpg', caption: 'Актовый зал' },
      { src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/bucket/ee41c672-d200-4e91-9950-b31598fb889b.jpg', caption: 'Коридор, безопасный механизм' },
      { src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/bucket/5985d2da-1dac-4dab-8514-530518f30755.jpg', caption: 'Детский сад — без шнура, безопасно' },
    ],
  },
];

const CARD_WIDTH = 300;
const CARD_GAP = 16;

export default function WorksGallery() {
  const [activeTab, setActiveTab] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'right' ? CARD_WIDTH + CARD_GAP : -(CARD_WIDTH + CARD_GAP), behavior: 'smooth' });
  };

  const photos = TABS[activeTab].photos;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
          Наши работы: 1&nbsp;240 объектов —<br className="hidden md:block" /> квартиры, офисы, школы
        </h2>

        {/* Вкладки */}
        <div className="flex gap-6 border-b border-slate-100 mb-8">
          {TABS.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(i); if (scrollRef.current) scrollRef.current.scrollLeft = 0; }}
              className={`pb-3 text-base font-semibold transition-colors whitespace-nowrap ${
                activeTab === i
                  ? 'text-[#1A6FDB] border-b-2 border-[#1A6FDB]'
                  : 'text-[#888888] hover:text-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Карусель */}
        <div className="relative">
          {/* Стрелка влево */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 bg-white border border-slate-200 rounded-full shadow-md items-center justify-center hover:bg-slate-50 transition"
          >
            <Icon name="ChevronLeft" size={20} className="text-slate-700" />
          </button>

          {/* Скролл */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {photos.map((photo, i) => (
              <div
                key={i}
                className="flex-none rounded-xl overflow-hidden shadow-md bg-white border border-slate-100"
                style={{ width: CARD_WIDTH }}
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full object-cover"
                  style={{ height: 200 }}
                />
                <div className="px-4 py-3">
                  <p className="text-sm font-medium text-slate-800 leading-snug">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Стрелка вправо */}
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 bg-white border border-slate-200 rounded-full shadow-md items-center justify-center hover:bg-slate-50 transition"
          >
            <Icon name="ChevronRight" size={20} className="text-slate-700" />
          </button>
        </div>
      </div>
    </section>
  );
}