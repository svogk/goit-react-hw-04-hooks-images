import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import apiService from './apiService/apiService';
import s from './App.module.css';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [hits, setHits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [largeImage, setLargeImage] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!searchQuery || !page) {
      return;
    }
    setLoading(true);

    apiService
      .fetchHits(searchQuery, page)
      .then(data => {
        setHits(prevState => [...prevState, ...data.hits]);
      })
      .catch(error => console.error(error))
      .finally(() => {
        setLoading(false);

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  }, [searchQuery, page]);

  const handleFormSubmit = query => {
    if (searchQuery !== query) {
      setSearchQuery(query);
      setHits([]);
      setPage(1);
    }
  };

  const handleAddPage = () => {
    setPage(prevState => prevState + 1);
  };

  const handleShowLargeImage = largeImageURL => {
    setShowModal(true);
    setLargeImage(largeImageURL);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const buttonIsVisible = hits.length > 0 && !loading;

  return (
    <div className={s.app}>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery hits={hits} onShowLargeImage={handleShowLargeImage} />
      <div className={s.boxSpinner}>
        <Loader loading={loading} />
      </div>
      {buttonIsVisible && <Button onClick={handleAddPage} />}
      {showModal && (
        <Modal onOpenLargeImage={largeImage} onClose={toggleModal} />
      )}
      <ToastContainer />
    </div>
  );
}
