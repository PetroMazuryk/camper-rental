import { useEffect, useRef } from 'react';

import scss from './Modal.module.scss';
import icon from '../../assets/sprite.svg';

export const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const closeModal = ({ code }) => {
      if (code === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', closeModal);

    return () => {
      document.removeEventListener('keydown', closeModal);
    };
  }, [onClose]);

  const handleClick = e => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    isOpen && (
      <div className={scss.overlay} onClick={handleClick}>
        <div className={scss.modal} ref={modalRef}>
          <button className={scss.button} onClick={onClose}>
            <svg className={scss.icon} width="32" height="32">
              <use href={`${icon}#icon-close`}></use>
            </svg>
          </button>
          {children}
        </div>
      </div>
    )
  );
};
