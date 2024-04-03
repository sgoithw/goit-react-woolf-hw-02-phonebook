import style from './ContactListItem.module.css';

const ContactListItem = ({ name, number, onDelete }) => (
  <li className={style.contactListItem}>
    {name}: {number}
    <button
      className={style.contactListItemDeleteButton}
      type="button"
      onClick={onDelete}
    >
      Delete
    </button>
  </li>
);

export default ContactListItem;
