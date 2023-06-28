import "./Heading.scss";
interface HeadingProps {
  message: string;
}

function Heading({ message }: HeadingProps) {
  return (
    <div className="heading">
      <h1>{message}</h1>
    </div>
  );
}

export default Heading;
