interface Props {
  items: string[];
}
const Skills = ({ items }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item, index) => (
        <div key={index} className="p-3 border bg-gray-200 rounded-sm">
          {item}
        </div>
      ))}
    </div>
  );
};

export default Skills;
