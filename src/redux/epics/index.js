import { combineEpics } from 'redux-observable';
import UsersEpics from './user';
import AuthEpics from './auth';


const rootEpic = combineEpics(
    AuthEpics,
    UsersEpics
);
export default rootEpic;
