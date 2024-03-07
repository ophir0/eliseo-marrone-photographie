import PhotoAlbum from "react-photo-album";

const photos = [
  { src: "/public/series/Délibérez-Vous/1.jpg", width: 800, height: 600 },
  { src: "/public/series/Délibérez-Vous/2.jpg", width: 1600, height: 900 },
];

export default function Gallery() {
  return <PhotoAlbum layout="rows" photos={photos} />;
}