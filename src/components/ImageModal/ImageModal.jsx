import React from "react";
import ReactModal from "react-modal";
import styles from "./ImageModal.module.css";

const ImageModal = ({ selectedImage, closeModal }) => {
    return (
        <ReactModal
            isOpen={!!selectedImage}
            onRequestClose={closeModal}
            className={styles.modal}
            overlayClassName={styles.overlay}
        >
            <button onClick={closeModal} className={styles.closeButton}>
                &times;
            </button>
            {selectedImage && (
                <img
                    src={selectedImage.src}
                    alt={selectedImage.alt || "Image"}
                    className={styles.image}
                />
            )}
        </ReactModal>
    );
};

export default ImageModal;
