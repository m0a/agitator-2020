import config from '../config';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


describe('greet', (): void => {
    test('should say hello to Tom.', (): void => {
        const response = 'Hello, Tom!';
        expect(response).toBe('Hello, Tom!');
    });
})


// Initialize Firebase
firebase.initializeApp(config);

describe('firebase', () => {

    test('test001',async () => {
        const db = firebase.firestore();
        db.collection("users").onSnapshot(querySnapshot => {
            querySnapshot.docChanges().forEach(change => {
                console.log({change});
            })
        })
        try {
            const docRef = await db.collection("users").add({
            first: "makoto",
            last: "abe",
            born: 1979
            });
            console.log('docRef.id = ',docRef.id);
        
        } catch(e) {
            console.error(e);
        }
    })

})