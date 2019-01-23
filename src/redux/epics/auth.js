import { empty, observable, merge, forkJoin, fromEventPattern, concat, of } from "rxjs";
import { AUTH_LOGIN } from '../../constants/actions';
import { Observable, from } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { loadUsersOk, registerUserLoginAction } from '../actions/users';
import { switchMap, catchError, map, debounceTime, filter, mergeMap } from 'rxjs/operators';
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
            mergeMap(data => {
                return concat(
                    of(loginActionOk(data.user)),
                    of(registerUserLoginAction(data.user.uid))
                );
            }),
            catchError(error => loginActionError(error))
        );
    })
);



export default function AuthEpics(action$){
    return merge(
        loginEpic(action$),
    )
}