export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body;

  // Untuk demo, kita pakai gambar placeholder
  const generatedImage = `https://via.placeholder.com/512?text=Generated+Image+from+${encodeURIComponent(prompt)}`;

  res.status(200).json({ image: generatedImage });
}
