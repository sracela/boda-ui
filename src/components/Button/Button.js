import "./Button.modules.css";

function Button({ children, link, type }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <span className={`de-button ${type || "medium"} animation fadeInUp`}>
        {children}
      </span>
    </a>
  );
}
export default Button;
