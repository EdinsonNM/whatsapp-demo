import { empty, observable, merge, forkJoin, fromEventPattern, concat } from "rxjs";
import { AUTH_LOGIN } from '../../constants/actions';
import { Observable, from } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {loadUsersOk} from '../actions/users';
import { switchMap, catchError, map, debounceTime, filter } from 'rxjs/operators';
import {ofType} from 'redux-observable'
import UserApi from '../../api/userApi';
import { loginActionOk, loginActionError, userMeAction } from '../actions/auth';

const loginEpic = action$ => action$.pipe(
    ofType(AUTH_LOGIN),
    switchMap(({payload}) => {
        const api = new UserApi();
        return fromEventPattern(
            handler => api.login(payload)
                .then(handler)
        )
        .pipe(
            map(data => loginActionOk(data.user)),
            catchError(error => loginActionError(error))
        );
    })
);



export default function AuthEpics(action$){
    return merge(
        loginEpic(action$),
    )
}