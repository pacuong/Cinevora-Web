type StatusToggleProps = {
  enabled: boolean;
};

const StatusToggle = ({ enabled }: StatusToggleProps) => {
  return (
    <div
      className={`relative h-6 w-10 rounded-full transition ${
        enabled ? "bg-violet-600" : "bg-slate-300"
      }`}
    >
      <div
        className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
          enabled ? "left-5" : "left-1"
        }`}
      />
    </div>
  );
};

export default StatusToggle;