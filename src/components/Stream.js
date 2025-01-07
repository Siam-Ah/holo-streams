export default function Stream({ stream, onSelectStream }) {
  const isLive = stream.raw.status === "live";

  return (
    <li
      onClick={() => onSelectStream({ stream: stream.raw })}
      className={isLive ? "live-stream" : ""}
    >
      <img src={stream.raw.channel.photo} alt={stream.raw.id} />
      <h3>{stream.raw.title}</h3>
      <h4>{stream.raw.channel.name}</h4>
      {isLive && <span className="live-badge">LIVE</span>}
    </li>
  );
}
