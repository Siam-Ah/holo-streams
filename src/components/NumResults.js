export default function NumResults({ streams }) {
  return (
    <p className="num-results">
      Found <strong>{streams.length}</strong>{" "}
      {streams.length === 1 ? `result` : `results`}
    </p>
  );
}
