import { HolodexApiClient } from "holodex.js";
import Navbar from "./Navbar";
import Main from "./Main";
import Box from "./Box";
import { useEffect, useState } from "react";
import StreamList from "./StreamList";
import ShowStream from "./ShowStream";
import ShowChat from "./ShowChat";
import Search from "./Search";
import NumResults from "./NumResults";

export default function App() {
  const [streams, setStreams] = useState([]);
  const [selectedStream, setSelectedStream] = useState(null);
  const [chatRight, setChatRight] = useState(false);
  const [chatBottom, setChatBottom] = useState(false);
  const [query, setQuery] = useState("");

  function handleSelectedStream({ stream }) {
    setSelectedStream((selectedStream) =>
      stream.id === selectedStream?.id ? null : stream
    );

    setChatRight(false);
    setChatBottom(false);
  }

  function handleChatRight() {
    setChatRight((chatRight) => !chatRight);
  }

  function handleChatBottom() {
    setChatBottom((chatBottom) => !chatBottom);
  }

  useEffect(
    function () {
      const client = new HolodexApiClient({
        apiKey: process.env.REACT_APP_API_KEY,
      });

      // Get Hololive's stream
      client
        .getLiveVideos({ org: "Hololive" })
        .then(function (videos) {
          // handle result
          // console.log(videos);
          const filteredVideos = videos.filter(
            (videos) => videos.channel.raw.org === "Hololive"
          );
          if (query === "") {
            setStreams(filteredVideos);
          } else {
            const queriedVideos = filteredVideos.filter(
              (videos) =>
                videos.channel.raw.name
                  .toUpperCase()
                  .includes(query.toUpperCase()) ||
                videos.channel.raw.english_name
                  .toUpperCase()
                  .includes(query.toUpperCase())
            );
            setStreams(queriedVideos);
          }
          console.log(filteredVideos);
        })
        .catch((error) => {
          console.log("Error fetching streams:", error);
        });
    },
    [query]
  );

  // // Get Usada Pekora's channel info
  // client.getChannel("UC1DCedRgGHBdm81E1llLhOQ").then(function (channel) {
  //   // handle result
  //   console.log(channel.name); // Pekora Ch. 兎田ぺこら
  //   console.log(channel.englishName); // Usada Pekora
  //   console.log(channel.subscriberCount); // 1540000
  // });

  return (
    <div>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults streams={streams} />
      </Navbar>
      <Main>
        <Box>
          <StreamList streams={streams} onSelectStream={handleSelectedStream} />
        </Box>
        {selectedStream ? (
          <Box>
            <ShowStream
              stream={selectedStream}
              chatRight={chatRight}
              onChatRight={handleChatRight}
              chatBottom={chatBottom}
              onChatBottom={handleChatBottom}
            />
          </Box>
        ) : null}
        {chatRight ? (
          <Box>
            <div className="chat-container">
              <ShowChat stream={selectedStream} />
            </div>
          </Box>
        ) : null}
      </Main>
    </div>
  );
}
