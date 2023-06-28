import "./Empty.scss";

interface EmptyProps {
  icon: string;
  iconNext: string;
  message1: string;
  message2: string;
}

function Empty({ icon, iconNext, message1, message2 }: EmptyProps) {
  return (
    <div className="empty-banner">
      <div className="fade-container">
        <i className={`icon-banner first ${icon}`}></i>
        <i className={`icon-banner next ${iconNext}`}></i>
      </div>
      {message1 && <span className="message message1">{message1}</span>}
      {message2 && <span className="message message2">{message2}</span>}
    </div>
  );
}

export default Empty;
