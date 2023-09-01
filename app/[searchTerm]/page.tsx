import Item from "@/components/item/Item";
import getWikiResults from "@/lib/getWikiResults";
import React from "react";

type SearchTermProps = {
  params: { searchTerm: string };
};

export async function generateMetadata({
  params: { searchTerm },
}: SearchTermProps) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const displayTerm: Result[] | undefined = data?.query?.pages;

  if (!data) {
    return {
      title: `${displayTerm} Not Found`,
    };
  }
}

export default async function SearchResults({
  params: { searchTerm },
}: SearchTermProps) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const results: Result[] | undefined = data?.query?.pages;

  const content = (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result) => {
          return <Item key={result.pageId} result={result} />;
        })
      ) : (
        <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
      )}
    </main>
  );
  return content;
}
