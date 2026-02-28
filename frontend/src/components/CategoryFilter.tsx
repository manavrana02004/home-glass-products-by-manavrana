import { CATEGORIES, type Category } from '../lib/seedData';

interface CategoryFilterProps {
  selected: Category;
  onChange: (category: Category) => void;
  counts?: Record<string, number>;
}

export function CategoryFilter({ selected, onChange, counts }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map((cat) => {
        const isActive = selected === cat;
        const count = cat === 'All' ? undefined : counts?.[cat];
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`font-body text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
              isActive
                ? 'bg-gold text-white border-gold'
                : 'bg-transparent text-warm-gray-600 border-warm-gray-300 hover:border-gold hover:text-gold'
            }`}
          >
            {cat}
            {count !== undefined && (
              <span className={`ml-1.5 text-[10px] ${isActive ? 'text-white/70' : 'text-warm-gray-400'}`}>
                ({count})
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
