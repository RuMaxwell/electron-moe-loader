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
  let str = '';
  for (let key in obj) {
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
const getCookieString = async function () {
  if (cookieObj === undefined) {
    const file = fs.readFileSync(path.resolve('./static/data/pixiv/cookie.json')).toString('utf8');
    cookieObj = JSON.parse(file);
    if (Object.keys(cookieObj).length === 0) {
      await updateCookie();
      return cookieString;
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
  const cookie = await login.getLoginResult(account[index].username, account[index].password);
  cookieObj = cookie;
  cookieString = cookieStringGenerator(cookie);
  fs.writeFileSync(path.resolve('./static/data/pixiv/cookie.json'), JSON.stringify(cookieObj));
}

export default {
  getCookieString: getCookieString,
  updateCookie: updateCookie
}