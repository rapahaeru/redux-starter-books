import { combineReducers } from 'redux';
import ReducerBooks from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: ReducerBooks,
  activeBook: ActiveBook
});

export default rootReducer;
