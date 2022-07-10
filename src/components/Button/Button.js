import "./Button.modules.css";

function Button({ children, link, type, isDefault, onClick }) {
  if (isDefault) {
    return <button onClick={onClick}>{children}</button>;
  }
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <span className={`de-button ${type || "medium"} animation fadeInUp`}>
        {children}
      </span>
    </a>
  );
}
export default Button;
