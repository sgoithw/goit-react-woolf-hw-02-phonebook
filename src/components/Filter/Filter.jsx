import style from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={style.filterLabel}>
    Find contacts by name <br />
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;
