import { useState, useEffect } from "react";
import ArtPiecePreview from "../ArtPiecePreview";

function Spotlight({ pieces }) {
  const [spotlightPiece, setSpotlightPiece] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * pieces.length);
    setSpotlightPiece(pieces[randomIndex]);
  }, [pieces]);

  if (!spotlightPiece) {
    return null;
  }

  return (
    <div>
      <h2>Spotlight Piece</h2>
      <ArtPiecePreview
        image={spotlightPiece.imageSource}
        title={spotlightPiece.name}
        artist={spotlightPiece.artist}
      />
    </div>
  );
}

export default Spotlight;
