import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <li>
      <Image src={image} alt={title} width={400} height={400} />
      <p>{title}</p>
      <p>{artist}</p>
    </li>
  );
}
