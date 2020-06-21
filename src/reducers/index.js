import { combineReducers } from 'redux';
import projects from './projects';
import tickets from './tickets';

export default combineReducers({
  projects,
  tickets,
});
