export default function InfoCard({ children, className = "", onClick, id }) {
  return (
    <div
      key={id}
      className={`rounded-xl border border-br bg-slate-50 p-4 shadow-sm hover:bg-slate-100 mb-2 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
