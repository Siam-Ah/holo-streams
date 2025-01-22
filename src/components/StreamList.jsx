import { useSearchParams } from "react-router-dom";
import Stream from "./Stream";
import { useResultContext } from "../ResultContext";

export default function StreamList({ streams, onSelectStream, query }) {
  const [searchParams] = useSearchParams();
  const { setResultCount } = useResultContext();

  let queryFilteredStreams = streams;

  if (query !== "") {
    queryFilteredStreams = streams.filter(
      (stream) =>
        stream.channel.raw.name.toUpperCase().includes(query.toUpperCase()) ||
        stream.channel.raw.english_name
          .toUpperCase()
          .includes(query.toUpperCase())
    );
  }

  const filterValue = searchParams.get("region") || "all";

  let filteredStreams;
  if (filterValue === "all") filteredStreams = queryFilteredStreams;
  if (filterValue === "JP")
    filteredStreams = queryFilteredStreams.filter(
      (stream) =>
        stream.channel.raw.suborg.includes("0th Generation") ||
        stream.channel.raw.suborg.includes("1st Generation") ||
        stream.channel.raw.suborg.includes("2nd Generation") ||
        stream.channel.raw.suborg.includes("GAMERS") ||
        stream.channel.raw.suborg.includes("3rd Generation") ||
        stream.channel.raw.suborg.includes("4th Generation") ||
        stream.channel.raw.suborg.includes("5th Generation") ||
        stream.channel.raw.suborg.includes("6th Generation") ||
        stream.channel.raw.suborg.includes("DEV_IS FLOW GLOW")
    );
  if (filterValue === "EN")
    filteredStreams = queryFilteredStreams.filter(
      (stream) =>
        stream.channel.raw.suborg.includes("English -Myth-") ||
        stream.channel.raw.suborg.includes("English -Promise-") ||
        stream.channel.raw.suborg.includes("English -Advent-") ||
        stream.channel.raw.suborg.includes("English -Justice-")
    );
  if (filterValue === "ID")
    filteredStreams = queryFilteredStreams.filter((stream) =>
      stream.channel.raw.suborg.includes("Indonesia")
    );
  if (filterValue === "holostars")
    filteredStreams = queryFilteredStreams.filter((stream) =>
      stream.channel.raw.suborg.includes("HOLOSTARS")
    );

  setResultCount(filteredStreams ? filteredStreams.length : 0);

  return (
    <ul className="list list-streams">
      {filteredStreams?.map((stream) => (
        <Stream
          stream={stream}
          onSelectStream={onSelectStream}
          key={stream.raw.id}
        />
      ))}
    </ul>
  );
}
