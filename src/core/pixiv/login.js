import urls from './urls'
import axios from 'axios'
import cheerio from 'cheerio'
import { URLSearchParams } from 'url'

/**
 * To login Pixiv with specified username and password.
 * 
 * @param {string} username The username of Pixiv.
 * @param {string} password The password of Pixiv.
 */
const login = async function (username, password) {
  const loginStartPage = await axios.get(urls.loginStart);
  let $ = cheerio.load(loginStartPage.data);
  const initConfig = JSON.parse($('#init-config').val());
  const postKey = initConfig.postKey;

  const params = new URLSearchParams();
  params.append('pixiv_id', username);
  params.append('captcha', '');
  params.append('g_recaptcha_response', '');
  params.append('password', password);
  params.append('post_key', postKey);
  params.append('source', 'pc');
  params.append('ref', 'wwwtop_accounts_index');
  params.append('return_to', 'https://www.pixiv.net/');
  const loginResult = await axios.post(urls.loginApi, params);
  
}

export default login