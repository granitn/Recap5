import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <div>
      <h2>{title}</h2>
      <Image src={image} alt={title} height={500} width={500} />
      <p>by {artist}</p>
      <p>made in the year: {year}</p>
      <p>genre: {genre}</p>
      <button>
        <Link href={"/art-pieces"}>Back</Link>
      </button>
    </div>
  );
}
