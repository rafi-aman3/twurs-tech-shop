import firebase from "firebase/app";
import "firebase/firestore"


export const getCategories = () => {
    return firebase.firestore().collection("categories")
        .get()
        .then(querySnapshot => {
            const documents = querySnapshot.docs.map(doc => doc.data())
            return documents
        })
}


export const getProducts = () => {
    return firebase.firestore().collection("products")
    .get()
    .then(querySnapshot => {
        const productDocuments = querySnapshot.docs.map(doc => doc.data())
        return productDocuments;
    })
}

export const getProductsByCategory = (category) => {
    return firebase.firestore().collection("products").where("category", "==", category)
    .get()
    .then(querySnapshot => {
        const productsByCategory = querySnapshot.docs.map(doc => doc.data())
        return productsByCategory
    })
}