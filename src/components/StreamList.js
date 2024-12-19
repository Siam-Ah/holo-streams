import Stream from "./Stream";

export default function StreamList({ streams, onSelectStream }) {
  return (
    <ul className="list list-streams">
      {streams?.map((stream) => (
        <Stream
          stream={stream}
          onSelectStream={onSelectStream}
          key={stream.raw.id}
        />
      ))}
    </ul>
  );
}
