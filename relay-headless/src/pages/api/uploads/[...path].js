export default function handler(req, res) {
    const {
      query: { path },
    } = req;
  
    const imageUrl = `http://localhost:1337/uploads/${path.join('/')}`;
    // Fetch the image from Strapi and pipe it to the response
    fetch(imageUrl).then(strapiRes => {
      strapiRes.body.pipe(res);
    }).catch(error => {
      console.error("Failed to fetch image from Strapi", error);
      res.status(500).json({ error: "Failed to fetch image" });
    });
  }
  