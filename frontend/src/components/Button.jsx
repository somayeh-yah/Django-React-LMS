export default function Button({ icon, className = "", text = "", onClick }) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {icon}
      {text}
    </button>
  );
}
