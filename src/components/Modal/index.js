import React from "react";

function Modal({ currentPhoto }) {
  const { name, category, description, index } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div class="modalContainer">
        <h3 classname="modalTitle">{name}</h3>
        <img
          src={require(`../../assets/large/${category}/${index}.jpg`)}
          alt="Current category"
        />
        <p>{description}</p>
        <button type="button">Close</button>
      </div>
    </div>
  );
}

export default Modal;
