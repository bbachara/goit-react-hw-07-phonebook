import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../redux/actions';
import css from './SearchBar.module.css';

export const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = event => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <div>
      <h2 className={css.title}>Search Contact</h2>
      <div className={css.wrapper}>
        <input
          className={css.field}
          type="text"
          placeholder="Search contacts..."
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};
