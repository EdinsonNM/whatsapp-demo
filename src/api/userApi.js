import Firebase from './firebase';
import store from '../redux/store';
import { userMeAction } from '../redux/actions/auth';

class UserApi extends Firebase{
    constructor(){
        super();
    }
    login({email,password}){
        return this._firebase.auth().signInWithEmailAndPassword(email, password);
    }
    registerActiveUser(userId){
        return this._db.ref('activeusers/' + userId).set(true);
    }

}
export default UserApi;