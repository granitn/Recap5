import useSWR from "swr";
import ArtPieces from "./Components/ArtPieces";
import Spotlight from "./Components/Spotlight/Spotlight";

const url = "https://example-apis.vercel.app/api/art";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <p>Error: {error.message}</p>;
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;
  console.log(data);
  return (
    <div>
      <Spotlight pieces={data} />
      <ArtPieces pieces={data} />
    </div>
  );
}
