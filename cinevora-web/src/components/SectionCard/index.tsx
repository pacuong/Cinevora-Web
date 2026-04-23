import { ReactNode } from "react";

type SectionCardProps = {
  title: string;
  action?: string;
  children: ReactNode;
  className?: string;
};

const SectionCard = ({ title, action, children, className = "" }: SectionCardProps) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white shadow-sm ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
        <h2 className="text-[18px] font-bold text-slate-800">{title}</h2>

        {action ? (
          <button className="text-sm font-medium text-blue-600 transition hover:text-blue-700">
            {action}
          </button>
        ) : null}
      </div>

      <div className="p-4">{children}</div>
    </div>
  );
};

export default SectionCard;