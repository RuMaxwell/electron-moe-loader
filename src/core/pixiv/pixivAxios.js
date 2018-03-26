import axios from 'axios'
import cookie from './cookie'

/**
 * Get an axios instance for pixiv http requests.
 * 
 * @returns {axiosInstance} an axios instance with specified headers.
 */
const getInstance = function () {
  const cookieString = cookie.getCookieString();
  return axios.create({
    headers: {
      'Accpet': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
      'Cookie': cookieString
    }
  })
}

export default {
  getInstance: getInstance
}