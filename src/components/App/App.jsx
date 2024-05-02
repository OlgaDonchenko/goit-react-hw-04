import { findImage } from "../../searcher-api";
import { useState, useEffect } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import SearchBar from "../SearchBar/SearchBar";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function App() {
  const [images, setImages] = useState([]);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchError, setSearchError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
  const getImages = async () => {
    const data = await findImage(inputValue, page);
    setImages(data);
  };

  const openModal = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImageUrl("");
    setModalIsOpen(false);
  };

  return (
    <>
      <h1>Search</h1>
      <SearchBar onSearch={performSearch} />

      {searchError && <ErrorMessage error={searchError} />}
      <ImageGallery items={searchResults} openModal={openModal} />
      {modalIsOpen && (
        <ImageModal imageUrl={selectedImageUrl} closeModal={closeModal} />
      )}
    </>
  );
}
