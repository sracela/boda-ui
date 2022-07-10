import "./Button.modules.css";

function Button({ children, link, type, isDefault, isDisabled, onClick }) {
  if (isDefault) {
    return (
      <button
        onClick={onClick}
        disabled={isDisabled}
        className={isDisabled ? "disabled" : ""}
      >
        {children}
      </button>
    );
  }
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={isDisabled ? "disabled" : ""}
    >
      <span className={`de-button ${type || "medium"} animation fadeInUp`}>
        {children}
      </span>
    </a>
  );
}
export default Button;
