import { experienceData } from "../data/experience-data";
const Experience = () => {
  return (
    <div>
      {experienceData.map((label) => (
        <>
          <div className="flex">
            <p className="w-[20%]">{label.date}</p>
            <div className="w-[80%]">
              <p className="font-semibold">{label.company}</p>
              <p>{label.title}</p>
              <p className="my-3">{label.roles}</p>
            </div>
          </div>
          <hr className="my-4" />
        </>
      ))}
    </div>
  );
};

export default Experience;
