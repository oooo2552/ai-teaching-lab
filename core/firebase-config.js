import { initializeApp } from 'https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/13.4.0/firebase-database.js';
export const app=initializeApp({apiKey:'AIzaSyAZ5mIZLvhnTSgsUpzZEc2HNVumFLLRpHA',authDomain:'ai-teaching-lab.firebaseapp.com',projectId:'ai-teaching-lab',storageBucket:'ai-teaching-lab.firebasestorage.app',messagingSenderId:'195312322241',appId:'1:195312322241:web:86ae91b571ea79dd7c7640',databaseURL:'https://ai-teaching-lab-default-rtdb.asia-southeast1.firebasedatabase.app/'});
export const auth=getAuth(app), db=getDatabase(app);
export const teacherUID='GO8ks4VWq2YgjOMnee8ldR2Za8N2';
