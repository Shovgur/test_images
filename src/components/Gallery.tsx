"use client";
import { useEffect, useState } from "react";
import ImageModal from "./ImageModal";
import fetchImages from "@/api";

interface Image {
  id: number;
  webformatURL: string;
  likes: number;
  views: number;
}

const Gallery = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    const getImages = async () => {
      const data = await fetchImages();
      setImages(data);
    };
    getImages();
  }, []);

  const openModal = (image: Image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image) => (
        <div key={image.id} className="relative">
          <img
            src={image.webformatURL}
            alt={`Image ${image.id}`}
            onClick={() => openModal(image)}
            className="w-full h-auto cursor-pointer"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 flex justify-between items-center">
            <span className="text-white">Likes: {image.likes}</span>
            <span className="text-white">Views: {image.views}</span>
          </div>
        </div>
      ))}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default Gallery;
