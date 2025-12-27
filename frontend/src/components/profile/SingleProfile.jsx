export default function SingleProfile({ src, name, text = false }) {
  return (
    <div className="profile-row">
      <img className="profile-avatar peer" src={src} alt={name} />
      <span className="profile-tooltip-peer">{name}</span>
      <p className="mt-2 text-sm text-muted font-sans hover:border-b">{text}</p>
    </div>
  );
}
