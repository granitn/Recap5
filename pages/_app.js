import { useState, useEffect } from "react";
import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "./Components/Layout";
const url = "https://example-apis.vercel.app/api/art";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  //  const [spotlightPiece, setSpotlightPiece] = useState(null);

  const { data, error, isLoading } = useSWR(url, fetcher);
  if (error) return <p>Error: {error.message}</p>;
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;
  console.log(data);

  return (
    <>
      <GlobalStyle />
      <Layout />
      <Component {...pageProps} data={data} />
    </>
  );
}
