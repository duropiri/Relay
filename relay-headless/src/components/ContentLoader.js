"use client";
import React, { useEffect } from "react";
import { useGlobalState } from "./GlobalStateContext";

const fetchCMS = ({ collection }) => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  };

  return fetch(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/${collection}s?populate=*`, reqOptions)
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

const ContentLoader = () => {
  const {
    setIsLoading,
    setWhyContent,
    setCtaBannerContent,
    setHeroContent,
    setMarqueeContent,
  } = useGlobalState();

  useEffect(() => {
    setIsLoading(true);

    // Define all fetch operations in an array
    const fetchOperations = [
      fetchCMS({ collection: "why-content" }).then(
        (data) => data.data[0].attributes
      ),
      fetchCMS({ collection: "cta-banner" }).then(
        (data) => data.data[0].attributes
      ),
      fetchCMS({ collection: "hero-content" }).then(
        (data) => data.data[0].attributes
      ),
      fetchCMS({ collection: "marquee" }).then(
        (data) => data.data[0].attributes
      ),
    ];

    Promise.all(fetchOperations)
      .then(([whyContent, ctaBannerContent, heroContent, marqueeContent]) => {
        setWhyContent(whyContent);
        setCtaBannerContent(ctaBannerContent);
        setHeroContent(heroContent);
        setMarqueeContent(marqueeContent);
      })
      .catch((error) => {
        console.error("Error fetching content:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []); // Empty dependency array to run once on mount

  return null; // This component doesn't render anything itself
};

export default ContentLoader;
