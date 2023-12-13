import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4DOUW9n6RqndUARBTTla54z9E1aXUHM4",
  authDomain: "proyectocoderclase251123.firebaseapp.com",
  projectId: "proyectocoderclase251123",
  storageBucket: "proyectocoderclase251123.appspot.com",
  messagingSenderId: "204238179347",
  appId: "1:204238179347:web:c3929d1fb5255d7648c3e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
      <App />
    </ChakraProvider>
)
