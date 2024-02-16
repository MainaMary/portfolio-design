interface Props {
  children: string;
  className?: string;
}

const SubTitle = ({ children, className = "" }: Props) => {
  return (
    <p className={`text-base mb-3 font-semibold ${className}`}>{children}</p>
  );
};

export default SubTitle;
