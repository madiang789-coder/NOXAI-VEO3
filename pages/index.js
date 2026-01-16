import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    setLoading(true);
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setImage(data.image);
    setLoading(false);
  };

  const generateVideo = async () => {
    setLoading(true);
    const res = await fetch("/api/generateVideo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setVideo(data.video);
    setLoading(false);
  };

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>NOX AI Studio</h1>

      <textarea
        placeholder="Tulis prompt kamu..."
        style={{ width: "100%", height: 120 }}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <br />
      <button onClick={generateImage} disabled={loading}>
        {loading ? "Loading..." : "Generate Image"}
      </button>
      {image && <img src={image} alt="Generated" style={{ width: "100%", marginTop: 20 }} />}

      <br />
      <button onClick={generateVideo} disabled={loading}>
        {loading ? "Loading..." : "Generate Video"}
      </button>
      {video && <video src={video} controls style={{ width: "100%", marginTop: 20 }} />}
    </div>
  );
}
