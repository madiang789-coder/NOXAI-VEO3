export default function Home() {
  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>NOX AI Studio</h1>
      <textarea placeholder="Tulis prompt kamu..." style={{ width: "100%" }} />
      <br />
      <button>Generate</button>
    </div>
  );
}
