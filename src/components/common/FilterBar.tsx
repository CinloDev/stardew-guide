"use client";

interface FilterOption {
  label: string;
  value: string;
}

interface FilterBarProps {
  value: string;
  options: FilterOption[];
  onChange: (value: string) => void;
}

export function FilterBar({ value, options, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          type="button"
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`rounded-lg border px-3 py-1.5 text-sm transition ${
            value === option.value
              ? "border-amber-700 bg-amber-700 text-amber-50"
              : "border-amber-900/20 bg-white text-stone-700 hover:bg-amber-50"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
