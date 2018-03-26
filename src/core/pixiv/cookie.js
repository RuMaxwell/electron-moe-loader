import fs from 'fs'
import path from 'path'
import login from './login'
import account from './data/account'

let cookieObj;
let cookieString;

/**
 * To generate a Cookie string from a object.
 * 
 * @param {object} obj
 * @returns {string} a cookie string of the object.
 */
const cookieStringGenerator = function (obj) {
  let str;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      str = str + `${key}=${obj[key].toString()}; `;
    }
  }
  return str;
}

/**
 * To get the cookie string, if the cookie doesn't exsist, get from login api.
 * 
 * @returns {string} a cookie string.
 */
const getCookieString = function () {
  if (!cookieObj) {
    const file = fs.readFileSync(path.resolve('./data/cookie.json'));
    cookieObj = JSON.parse(file);
    if (cookieObj === {}) {
      updateCookie();
    } else {
      cookieString = cookieStringGenerator(cookieObj);
      return cookieString;
    }
  } else {
    return cookieString;
  }
}

/**
 * To update cookies from pixiv api.
 */
const updateCookie = async function () {
  const index = Math.floor(Math.random() * account.length);
  await login.getLoginResult(account[index].username, account[index].password);
}

export default {
  getCookieString: getCookieString,
  updateCookie: updateCookie
}