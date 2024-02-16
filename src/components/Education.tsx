import { educationData } from "../data/education-data";
const Education = () => {
  return (
    <div>
      {educationData.map((label) => (
        <div className="flex">
          <p className="w-[20%]">{label.date}</p>
          <div className="w-[80%]">
            <p>{label.course}</p>
            <p>{label.school}</p>
            <p>{label.type}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
