import { Modal } from '../Modal/Modal';
import { useModal } from '../../components/hooks/useModal';
import scss from './CamperCard.module.scss';
export const CamperCard = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <div>
      <button className={scss.button} type="button" onClick={openModal}>
        Show more
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div>Camper Card</div>
      </Modal>
    </div>
  );
};
