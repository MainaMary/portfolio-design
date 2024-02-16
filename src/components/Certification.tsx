import { certificationData } from "../data/certification-data";
const Certification = () => {
  return (
    <div>
      {certificationData.map((label) => (
        <div className="flex my-3">
          <p className="w-[20%]">{label.date}</p>
          <div className="w-[80%]">
            <p>{label.title}</p>
            <p>{label.site}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certification;
