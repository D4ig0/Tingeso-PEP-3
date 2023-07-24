// components/Popup.jsx
import React from 'react';
import Modal from 'react-modal';
import styles from "../styles/popUp.module.css";

const Popup = ({ isOpen, onRequestClose, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
      contentLabel="Confirmación"
    >
      <h2 className={styles.modalTitle}>¿Estás seguro?</h2>
      <p className={styles.modalMessage}>Si abandonas la página ahora, perderás el progreso de tu prueba.</p>
      <div className={styles.modalButtons}>
        <button className={styles.confirmButton} onClick={onConfirm}>Sí, abandonar</button>
        <button className={styles.cancelButton} onClick={onRequestClose}>Cancelar</button>
      </div>
    </Modal>
  );
};

export default Popup;
