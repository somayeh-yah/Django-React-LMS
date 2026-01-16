export default function InfoCard({ children, className = "", onClick, id }) {
  return (
    <div
      key={id}
      className={` max-w-sm rounded-sm border border-br h-40 bg-slate-50 p-4 space-y-4 shadow-sm hover:bg-slate-100 mb-2 w-full ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
