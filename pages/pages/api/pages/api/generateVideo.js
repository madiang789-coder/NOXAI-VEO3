export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body;

  // Untuk demo, kita pakai video placeholder
  const generatedVideo = `https://www.w3schools.com/html/mov_bbb.mp4`;

  res.status(200).json({ video: generatedVideo });
}
