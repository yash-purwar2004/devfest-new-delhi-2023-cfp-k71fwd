// Import stylesheets
import './style.css';
import salt from './env/secret';

function encryptString(str) {
  let encryptedStr = '';
  for (let i = 0; i < str.length; i++) {
    encryptedStr += String.fromCharCode(str.charCodeAt(i) + 2);
  }
  return encryptedStr;
}

function decryptString(str) {
  let decryptedStr = '';
  for (let i = 0; i < str.length; i++) {
    decryptedStr += String.fromCharCode(str.charCodeAt(i) - 2); // Corrected this line
  }
  return decryptedStr;
}

// Define the salt
let salt = 'YourSaltValueHere'; // Replace with your actual salt value

let encryptedUrl =
  'jvvru<11tcy0ikvjwdwugteqpvgpv0eqo1kcoitcycn1fgxhguv/fgnjk/42451ockp1TGCFOG0of';
let decryptedUrl = decryptString(encryptedUrl);
console.log(decryptedUrl); // Use console.log to print the decrypted URL
