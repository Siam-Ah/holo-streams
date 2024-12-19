import { useState } from "react";
import ShowChat from "./ShowChat";

export default function ShowStream({ stream, chatRight, onChatRight }) {
  const [chatBottom, setChatBottom] = useState(false);

  function handleChatBottom() {
    setChatBottom((chatBottom) => !chatBottom);
  }

  return (
    <div className="details">
      <header>
        <img src={stream.channel.photo} alt={stream.id} />
        <div className="details-overview">
          <h2>{stream.title}</h2>
          <p>{`Status: ${stream.status}`}</p>
          <p>{`Live viewers: ${stream.live_viewers}`}</p>
        </div>
      </header>
      <div className="video-container">
        <iframe
          title={stream.title}
          src={`https://www.youtube.com/embed/${stream.id}`}
          allowFullScreen
        ></iframe>
      </div>
      <div className="button-container">
        <button
          className="btn-action"
          onClick={handleChatBottom}
          aria-expanded={chatBottom}
        >
          {!chatBottom ? `Show chat bottom` : `Hide chat bottom`}
        </button>
        <button
          className="btn-action"
          onClick={onChatRight}
          aria-expanded={chatRight}
        >
          {!chatRight ? `Show chat right` : `Hide chat right`}
        </button>
      </div>
      {chatBottom ? (
        <div className="video-container">
          <ShowChat stream={stream} />
        </div>
      ) : null}
    </div>
  );
}
