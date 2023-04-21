import Image from "next/image";
import Link from "next/link";
export default function ArtPiecePreview({ slug, image, title, artist }) {
  return (
    <li>
      <Link href={`/art-pieces/${slug}`}>
        <Image src={image} alt={title} width={400} height={250} />
      </Link>
      <p>
        {title} by {artist}
      </p>
    </li>
  );
}
