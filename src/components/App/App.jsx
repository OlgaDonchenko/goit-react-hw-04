import { findImage } from "../../searcher-api";
import { useState, useEffect, useRef } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { findImage } from "../../searcher-api";

export default function App() {
  const [images, setImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const [error, setError] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchError, setSearchError] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImageUrl("");
    setIsModalOpen(false);
  };

  useEffect(() => {
    async function getImages() {
      const data = await findImage();
      setImages(data);
    }
    getImages();
  }, []);
  const performSearch = async (query) => {
    try {
      const data = await findImage(query);
      setSearchResults(data);
      setSearchError(null);
    } catch (error) {
      setSearchError(error);
      setSearchResults([]);
    }
  };

  return (
    <>
      <h1>Search</h1>
      <SearchBar onSearch={performSearch} />

      {searchError && <ErrorMessage error={searchError} />}
      <ImageGallery items={searchResults} openModal={openModal} />
      {isModalOpen && (
        <ImageModal imageUrl={selectedImageUrl} closeModal={closeModal} />
      )}
    </>
  );
}
