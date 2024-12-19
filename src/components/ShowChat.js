export default function ShowChat({ stream }) {
  return (
    <iframe
      title={stream.title}
      // src={`https://www.youtube.com/live_chat?v=${stream.id}&embed_domain=${window.location.hostname}`}
      src={`https://www.youtube.com/live_chat?v=${stream.id}&embed_domain=https://holo-streams.netlify.app`}
    ></iframe>
  );
}
