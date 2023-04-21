import ArtPieceDetails from "../Components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPiecePage({ data }) {
  const router = useRouter();
  const { slug } = router.query;
  const artPiece = data.find((piece) => piece.slug === slug);

  if (!artPiece) {
    return <p>no Art Piece found</p>;
  }

  return (
    <ArtPieceDetails
      image={artPiece.imageSource}
      title={artPiece.name}
      artist={artPiece.artist}
      year={artPiece.year}
      genre={artPiece.genre}
    />
  );
}
