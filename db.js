// db.js

// Initialize Firebase
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    databaseURL: 'YOUR_DATABASE_URL',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID'
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const database = firebase.database();

// Load all published articles
export const loadArticles = async () => {
    const snapshot = await database.ref('articles').orderByChild('published').equalTo(true).once('value');
    const articles = snapshot.val();
    return articles ? Object.values(articles) : [];
};

// Save a new or updated article
export const saveArticle = async (article) => {
    const { id, ...articleData } = article;
    if (id) {
        await database.ref(`articles/${id}`).set(articleData);
    } else {
        const newArticleRef = database.ref('articles').push();
        await newArticleRef.set(articleData);
    }
};

// Delete an article
export const deleteArticle = async (id) => {
    await database.ref(`articles/${id}`).remove();
};

// Manage category operations
export const loadCategories = async () => {
    const snapshot = await database.ref('categories').once('value');
    return snapshot.val() ? Object.values(snapshot.val()) : [];
};

export const saveCategory = async (category) => {
    const { id, ...categoryData } = category;
    if (id) {
        await database.ref(`categories/${id}`).set(categoryData);
    } else {
        const newCategoryRef = database.ref('categories').push();
        await newCategoryRef.set(categoryData);
    }
};

export const deleteCategory = async (id) => {
    await database.ref(`categories/${id}`).remove();
};
