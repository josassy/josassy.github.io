import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

export const ProjectCard = ({
  title, description, date, url, src, action, images
}) => {
  
  const [modalOpen, setModalOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const showModal = () => {
    setModalOpen(true);
  }
  const hideModal = () => {
    setModalOpen(false);
  }

  return (
    <div key={url} className="card">
      {/* workaround for Chrome flex image bug: https://www.freecodecamp.org/forum/t/flex-basis-wont-shrink-image-in-flexbox/255701*/}
      <div className="image-container">
        <img src={src} alt={`Screenshot of ${title}`}/>
      </div>
      <div className="description">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="caption">{date}</p>
        <a href={url} onClick={showModal} className="caption action-link"><p>{action} &raquo;</p></a>
      </div>
      {(images && modalOpen) &&
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={hideModal}
            onMovePrevRequest={() => setPhotoIndex(
              (photoIndex + images.length - 1) % images.length)}
            onMoveNextRequest={() => setPhotoIndex(
              (photoIndex + 1) % images.length)}
          />
        }
    </div>
)};