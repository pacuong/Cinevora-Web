import React from "react";

export interface SelectOption {
  label: string;
  value: string;
}

interface SelectComponentProps {
  label?: string;
  name: string;
  value: string;
  options: SelectOption[];
  placeholder?: string;
  onChange: (value: string) => void;
}

const SelectComponent = ({
  label,
  name,
  value,
  options,
  placeholder,
  onChange,
}: SelectComponentProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };
  return (
    <div className="flex flex-col text-left gap-2">
      {label && (
        <label htmlFor={name} className="text-blue-100 text-base font-saira">
          {label}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        className="border border-gray-10 rounded-md px-3 py-2 text-gray-40 text-base outline-none focus:border-blue-10"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((selectOption) => (
          <option key={selectOption.value} value={selectOption.value}>
            {selectOption.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;
