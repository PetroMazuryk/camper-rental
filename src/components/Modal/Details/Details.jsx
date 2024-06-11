import scss from './Details.module.scss';

export const Details = ({ item }) => {
  const {
    item: { form, length, width, height, tank, consumption },
  } = item;
  return (
    <div className={scss.details}>
      <h3 className={scss.title}>Vehicle details</h3>

      <div className={scss.detailsWrapper}>
        <div className={scss.item}>
          <p className={scss.itemText}>Form</p>
          <p className={scss.itemText}>{form}</p>
        </div>
        <div className={scss.item}>
          <p className={scss.itemText}>Length</p>
          <p className={scss.itemText}>{length}</p>
        </div>
        <div className={scss.item}>
          <p className={scss.itemText}>Width</p>
          <p className={scss.itemText}>{width}</p>
        </div>
        <div className={scss.item}>
          <p className={scss.itemText}>Height</p>
          <p className={scss.itemText}>{height}</p>
        </div>
        <div className={scss.item}>
          <p className={scss.itemText}>Tank</p>
          <p className={scss.itemText}>{tank}</p>
        </div>
        <div className={scss.item}>
          <p className={scss.itemText}>Consumption</p>
          <p className={scss.itemText}>{consumption}</p>
        </div>
      </div>
    </div>
  );
};
