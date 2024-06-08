import { Modal } from '../Modal/Modal';
import { useModal } from '../../components/hooks/useModal';
import scss from './CamperCard.module.scss';
import { useSelector } from 'react-redux';
import { selectCampersData } from '../../redux/campers/selectors';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampersAsync } from '../../redux/campers/operations';

export const CamperCard = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const dispatch = useDispatch();

  const campers = useSelector(selectCampersData);
  console.log(campers);
  useEffect(() => {
    dispatch(fetchCampersAsync());
  }, [dispatch]);

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
