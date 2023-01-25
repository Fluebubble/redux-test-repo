import { MdClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCompleted } from 'redux/actions';
import { getTasks } from 'redux/selectors';
import css from './Task.module.css';
import { deleteTask } from 'redux/actions';

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToggleComplete = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToggleComplete}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
