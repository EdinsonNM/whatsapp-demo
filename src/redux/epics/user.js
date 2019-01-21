import { empty, observable, merge, forkJoin } from "rxjs";
import { USERS_LOAD, USERS_LOAD_OK } from '../../constants/actions';
import { Observable, from } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {loadUsersOk} from '../actions/users';
import { switchMap, catchError, map, debounceTime, filter } from 'rxjs/operators';
import {ofType} from 'redux-observable'
import store from '../store';
const usersLoadEpic = (action$) => action$.pipe(
    ofType(USERS_LOAD),
    switchMap((action) => {
        var page = store.getState().user.page;
        
        return ajax.getJSON(`https://randomuser.me/api/?page=${page}&results=10&nat=PE`)
        .pipe(
            map(data => data.results),
            map(data => {
                var results = store.getState().user.data;
                return data.map((user, index) => ({
                    id: results.length + index + 1,
                    avatar: user.picture.thumbnail,
                    name: `${user.name.first} ${user.name.last}`
                }))
            }),
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