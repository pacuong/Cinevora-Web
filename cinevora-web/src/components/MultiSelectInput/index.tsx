import Select from "react-select";

export interface MultiSelectOption {
  label: string;
  value: string;
}

interface MultiSelectInputProps {
  label?: string;
  name: string;
  value: string[];
  options: MultiSelectOption[];
  placeholder?: string;
  classLable?: string;
  onChange: (value: string[]) => void;
}

const MultiSelectInput = ({
  label,
  name,
  value,
  options,
  placeholder,
  classLable,
  onChange,
}: MultiSelectInputProps) => {
  const selectedOptions = options.filter((option) =>
    value.includes(option.value),
  );

  return (
    <div className="flex flex-col gap-2 text-left">
      {label && (
        <label
          htmlFor={name}
          className={`${classLable} text-base font-saira text-blue-100`}
        >
          {label}
        </label>
      )}

      <Select
        inputId={name}
        isMulti
        value={selectedOptions}
        options={options}
        placeholder={placeholder}
        closeMenuOnSelect={false}
        onChange={(selected) => {
          onChange(selected.map((item) => item.value));
        }}
      />
    </div>
  );
};

export default MultiSelectInput;