import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <li>
      <Image src={image} alt={title} width={400} height={250} />
      <p>
        {title} by {artist}
      </p>
    </li>
  );
}
