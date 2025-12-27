export default function InfoCard({ children }) {
  return (
    <div className="rounded-xl border-br bg-surface p-4 shadow-sm hover:bg-slate-50">
      {children}
    </div>
  );
}
