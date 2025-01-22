import { useResultContext } from "../ResultContext";

export default function NumResults() {
  const { resultCount } = useResultContext();

  return (
    <p className="num-results">
      Found <strong>{resultCount}</strong>{" "}
      {resultCount === 1 ? `result` : `results`}
    </p>
  );
}
