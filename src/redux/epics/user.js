import { empty, observable, merge } from "rxjs";
import { USERS_LOAD, USERS_LOAD_OK } from '../../constants/actions';
import { Observable, from } from 'rxjs';
import {getUsers} from '../../utils';
import {loadUsersOk} from '../actions/users';
import { switchMap, catchError, map } from 'rxjs/operators';
import {ofType} from 'redux-observable'
const usersLoadEpic = (action$) => action$.pipe(
    ofType(USERS_LOAD),
    switchMap((action) => {
        return from(getUsers()).pipe(
            map(data => data.map((user, index) => ({
                    id: index + 1,
                    avatar: user.picture.thumbnail,
                    name: `${user.name.first} ${user.name.last}`
            }))),
            map(data => loadUsersOk(data))
        );
    })
);


const usersLoadEpicOk= (action$) => action$.pipe(
    ofType(USERS_LOAD_OK),
    switchMap((action) => {
        console.log("datos cargados satisfactoriamente");
        return empty();
    })
);

export default function UsersEpics(action$){
    return merge(
        usersLoadEpic(action$),
        usersLoadEpicOk(action$)
    )
}