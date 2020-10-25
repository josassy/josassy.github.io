import React, { useState } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import Modal from "react-modal";


export const ProjectCard = ({
  title, description, date, url, src, action, images
}) => {
  
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  }

  return (
    <div key={url} className="card">
      {/* workaround for Chrome flex image bug: https://www.freecodecamp.org/forum/t/flex-basis-wont-shrink-image-in-flexbox/255701*/}
      <div className="image-container">
        <img src={src} alt={`Screenshot of ${title}`}/>
      </div>
      <div className="description">
        <h2>{title}</h2>
        <p>{description}</p>
        <p className="caption">{date}</p>
        <a href={url} onClick={showModal} className="caption action-link"><p>{action} &raquo;</p></a>
      </div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
      >
        <SimpleImageSlider
          images={images}
          width={500}
          height={500}
        />
      </Modal>
    </div>
)};