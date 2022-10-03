import { useState } from "react";

import "./Gallery.scss";

import { items } from "./items";

import Modal from "../Modal/Modal";

export default function Gallery() {
  const [showModal, setShowModal] = useState(false);

  const handleClickModal = (e) => {
    document.body.classList.add("no-scroll");
    setShowModal(e.target.dataset.image);
  };

  const elements = items.map(({ id, text, imgUrl }) => (
    <div
      key={id}
      className={text}
      data-image={imgUrl}
      onClick={handleClickModal}
    ></div>
  ));

  const getModalImage = (showModal) => {
    setShowModal(showModal);
  };

  return (
    <section className="galleryPhotos">
      <h2 className="galleryTitle">Галерея</h2>
      <div className="galleryList">{elements}</div>
      {showModal && (
        <Modal onClose={getModalImage}>
          <img src={showModal} alt="img" className="modalImg" />
        </Modal>
      )}
    </section>
  );
}
