//import useSWR from "swr";
//import ArtPieces from "./Components/ArtPieces";
import Spotlight from "./Components/Spotlight";

export default function SpotlightPage({ data }) {
  return (
    <div>
      <Spotlight pieces={data} />
    </div>
  );
}
