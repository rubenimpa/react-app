// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, addDoc, getDoc, doc, getDocs, deleteDoc, updateDoc, getFirestore,  } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfBjVn5lRRmFbRfWK179nVIoQXyjDv8Ok",
  authDomain: "react-project-204d0.firebaseapp.com",
  projectId: "react-project-204d0",
  storageBucket: "react-project-204d0.appspot.com",
  messagingSenderId: "601915609349",
  appId: "1:601915609349:web:d19d1311fe09b6f0df276c",
  measurementId: "G-BGYV2XVZZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

async function cargarBaseDeDatos  () {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (producto) => {
        await addDoc(collection(db, "productos"), {
            id: producto.id,
            idCatalogo: producto.idCatalogo,
            image: producto.image,
            descripcion: producto.descripcion,
            titulo: producto.titulo,
            price: producto.price,
            stock: producto.stock,
          });
    })
    
}

const getProducto = (id) => {
  getDoc(doc(db,"productos",id))
}

const getProductos = async () => {
  const productos = await getDocs(collection(db, "productos"))
  return productos
}

/*const sendOrder = (user, products, priceTotal) => {
  const order = {
    buyer: {name: user.name, phone: user.phone, mail: user.mail},
    items: products,
    total: priceTotal
  };

  const db = getFirestore();
  const ordersCollection = collection(db, "orders");
  addDoc(ordersCollection, order).then(({id}) => setOrderId(id));
}*/

export {db,app, cargarBaseDeDatos, getProducto, getProductos}