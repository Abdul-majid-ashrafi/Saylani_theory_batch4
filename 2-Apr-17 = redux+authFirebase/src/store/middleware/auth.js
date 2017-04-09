import firebase from 'firebase'
import { AuthAction } from '../action/authAction'
export class FirebaseAuthService {


    static registerUserOnFirebase(credentials) {
        return (dispatch) => {
            console.log('credentials', credentials)
            // firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.pass)
            // .then((userResponseFromFirebase) => {
            // console.log(userResponseFromFirebase)
            FirebaseAuthService.createUserOnFirebaseWithUid(dispatch, credentials)
            // })
            // .catch((error) => {
            //     console.log(error.message)
            //     dispatch(AuthAction.signupReject(error))
            // });
        }
    }

    static createUserOnFirebaseWithUid(dispatch, credentials) {
            console.log('credentials', credentials)
        
        // delete credentials.pass
        // firebase.database().ref('/')
        //     .child(`newUsers/${userResponseFromFirebase.uid}`)
        //     .set(credentials)
        //     .then(() => {
        //         dispatch(AuthAction.signupSuccessFull())
        //     })
    }



    static loginOnFirebase(credentials) {
        return (dispatch) => {
            firebase.auth()
                .signInWithEmailAndPassword(credentials.email, credentials.pass)
                .then((authUser) => {
                    FirebaseAuthService.getUserFromFirebase(dispatch, authUser)
                })
                .catch((error) => {
                    console.log(error.message)
                    dispatch(AuthAction.loginReject(error))
                });
        }
    }

    static getUserFromFirebase(dispatch, authUser) {
        firebase.database().ref('/')
            .child(`newUsers/${authUser.uid}`)
            .once('value', (snap) => {
                dispatch(AuthAction.loginSuccessFull(snap.val()))
            })
    }

    static logoutFromFirebase() {
        return (dispatch) => {
            firebase.auth().signOut()
                .then(function () {
                    dispatch(AuthAction.logOutUser())
                })
                .catch((error) => {
                    console.log(error.message)
                    dispatch(AuthAction.logOutUserReject(error))
                });
        }

    }



}