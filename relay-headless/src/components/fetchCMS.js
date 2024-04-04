import config from "@/config";


const fetchCMS = ({collection}) => {
    const reqOptions = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    };
  
    return fetch(`${config.api}api/${collection}s?populate=*`, reqOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response.text().then((text) => {
          throw new Error(`Error ${response.status}: ${text}`);
        });
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        // console.log("API Token:", process.env.NEXT_PUBLIC_API_TOKEN);
      });
  };


export default fetchCMS;