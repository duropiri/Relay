export default function handler(req, res) {
  const {
    query: { path },
  } = req;

  if (!Array.isArray(path)) {
    return res.status(400).json({ error: "Invalid path" });
  }

  const imageUrl = `${
    process.env.NEXT_PUBLIC_STRAPI_BASE_URL || "http://localhost:1337"
  }/uploads/${path.join("/")}`;

  // Fetch the image from Strapi and pipe it to the response
  fetch(imageUrl)
    .then((strapiRes) => {
      if (!strapiRes.ok) {
        throw new Error(`Failed to fetch image: ${strapiRes.statusText}`);
      }
      res.setHeader("Content-Type", strapiRes.headers.get("Content-Type"));
      strapiRes.body.pipe(res);
    })
    .catch((error) => {
      console.error("Failed to fetch image from Strapi", error);
      res.status(500).json({ error: "Failed to fetch image" });
    });
}
