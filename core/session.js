import {auth,db,teacherUID} from './firebase-config.js';
import {signInAnonymously,onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js';
export {ref,get,set,update,onValue,runTransaction} from 'https://www.gstatic.com/firebasejs/13.4.0/firebase-database.js';
export {auth,db,teacherUID};
export async function ensureUser(){await auth.authStateReady();return auth.currentUser|| (await signInAnonymously(auth)).user;}
export function joinURL(code){return new URL(`player.html?room=${encodeURIComponent(code)}`,location.href).href;}
export function showQR(el,url){el.src='https://api.qrserver.com/v1/create-qr-code/?size=180x180&data='+encodeURIComponent(url);el.hidden=false;el.onerror=()=>{el.hidden=true};}
