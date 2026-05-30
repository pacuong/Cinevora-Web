export interface InfoBoxProps {
  title: string;
  value: string;
}

const InfoBox = ({ title, value }: InfoBoxProps) => {
  return (
    <div className="bg-[#243859] rounded-[14px] p-4">
      <span className="text-blue-50 mb-2 block text-sm font-mont">{title}</span>

      <h3 className="text-white-100 text-base font-semibold">{value}</h3>
    </div>
  );
};

export default InfoBox;
