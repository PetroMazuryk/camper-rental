import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCampersData, selectPage } from '../../redux/campers/selectors';
import { selectFilterLocation } from '../../redux/filter/selectors';
import { fetchCampersAsync } from '../../redux/campers/operations';
import { setPage, clearItems } from '../../redux/campers/slice';

import { CamperBar } from '../CamperBar/CamperBar';
import { CamperItem } from '../CamperItem/CamperItem';

import toast from 'react-hot-toast';
import scss from './CamperList.module.scss';

export const CamperList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCampersData);
  const page = useSelector(selectPage);
  const locationFilter = useSelector(selectFilterLocation);
  const [hiddenBtn, setHiddenBtn] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    dispatch(setPage(1));
    1;
    dispatch(clearItems());
  }, [locationFilter, dispatch]);

  useEffect(() => {
    if (isInitialLoad) {
      setIsInitialLoad(false);
      return;
    }

    dispatch(fetchCampersAsync({ page, locationFilter }))
      .unwrap()
      .then(() => {
        toast.success('Campers loaded successfully');
      })
      .catch(() => {
        toast.error('A download error occurred');
      });
  }, [dispatch, page, locationFilter, isInitialLoad]);

  useEffect(() => {
    if (items.length % 4 !== 0 || items.length === 0) {
      setHiddenBtn(false);
    } else {
      setHiddenBtn(true);
    }
  }, [items]);

  const loadMore = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <>
      <div className={scss.catalogWrapper}>
        <CamperBar />
        {Array.isArray(items) && items.length > 0 && (
          <ul className={scss.listWrapper}>
            {items.map(item => (
              <li className={scss.item} key={item._id}>
                <CamperItem item={item} />
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={scss.btnWrapper}>
        {items && hiddenBtn && (
          <button type="button" className={scss.loadBtn} onClick={loadMore}>
            Load more
          </button>
        )}
      </div>
    </>
  );
};
