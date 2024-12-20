export default function Stream({ stream, onSelectStream }) {
  return (
    <li onClick={() => onSelectStream({ stream: stream.raw })}>
      <img src={stream.raw.channel.photo} alt={stream.raw.id} />
      <h3>{stream.raw.title}</h3>
      <h4>{stream.raw.channel.name}</h4>
    </li>
  );
}
