import { useState, useRef } from 'react';
import Icon from '@/components/ui/icon';

const TABS = [
  {
    id: 'apartments',
    label: '🏠 Квартиры',
    photos: [
      { src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/files/fea72ebe-3e3c-443b-aaad-7fd27a83fa15.jpg', caption: 'Спальня, блэкаут — сон без засветки' },
      { src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/files/6f720c80-950e-478e-bd4b-175e83cd94b8.jpg', caption: 'Кухня, влагостойкая ткань' },
      { src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/files/f152a2ce-4abe-49ee-b3c4-78f3535964ba.jpg', caption: 'Детская, день-ночь' },
      { src: 'https://cdn.poehali.dev/projects/8e5f4e63-d5a8-44bd-8e66-f6bc1aafe607/files/d84aca62-1fd7-4160-8802-0cba01e21dc5.jpg', caption: 'Гостиная, панорамное окно' },
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
