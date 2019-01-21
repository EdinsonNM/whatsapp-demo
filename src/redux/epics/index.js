import { combineEpics } from 'redux-observable';
import UsersEpics from './user';


const rootEpic = combineEpics(
    UsersEpics
);
export default rootEpic;
