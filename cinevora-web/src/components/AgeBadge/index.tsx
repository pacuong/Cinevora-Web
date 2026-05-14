type Props = {
  label: string;
};

const AgeBadge = ({ label }: Props) => {
  const colorMap: Record<string, string> = {
    C16: "bg-orange-100 text-orange-200",
    C13: "bg-amber-100 text-amber-500",
    C18: "bg-rose-100 text-red-500",
    P: "bg-blue-100 text-blue-500",
  };

  return (
    <span
      className={`inline-flex rounded-md px-2 py-0.5 text-xs font-semibold ${
        colorMap[label] || "bg-slate-100 text-slate-500"
      }`}
    >
      {label}
    </span>
  );
};

export default AgeBadge;