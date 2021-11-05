import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyAZETfRrMIlvvttV1BtyKxoeSQkdncyWus',
	authDomain: 'vue-dodo-pizza.firebaseapp.com',
	projectId: 'vue-dodo-pizza',
	storageBucket: 'vue-dodo-pizza.appspot.com',
	messagingSenderId: '293358718484',
	appId: '1:293358718484:web:daad7e9bc8256656662101',
}

firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore()

export { firestore }
