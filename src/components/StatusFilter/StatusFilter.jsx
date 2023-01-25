import { Button } from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from 'redux/actions';
import { statusFilters } from 'redux/constants';
import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  const filter = useSelector(state => state.filters.status);
  const dispatch = useDispatch();
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  console.log(filter);
  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
