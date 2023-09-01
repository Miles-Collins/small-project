import React from "react";

export default async function getWikiResults(searchTerm: string) {
  const searchParams = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: searchTerm,
    gsrlimit: "20",
    prop: "pageimages|extracts",
    exchars: "100",
    exintro: "true",
    explaintext: "true",
    exlimit: "max",
    format: "json",
    origins: "*",
  });

  const res = await fetch("https://en.wikipedia.org/w/api.php?" + searchParams);

  return res.json();
}
