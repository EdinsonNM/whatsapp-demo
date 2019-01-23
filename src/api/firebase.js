import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import config from '../config/firebase';
var app = firebase.initializeApp(config);
class Firebase {
    constructor(){
        this._app = app;
        this._firebase = firebase;
    }
}
export default Firebase;