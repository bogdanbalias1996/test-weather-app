import axios, { AxiosError, AxiosResponse } from 'axios'
import axiosRetry from 'axios-retry'
import { API_URL } from '.'

export const api = axios.create({
  baseURL: API_URL,
  responseType: 'json',
})

axiosRetry(api, { retries: 3 })

api.interceptors.request.use((config) => {
  config.params = { ...config.params, appid: 'e1884f851ee0a609338af5c9ea3749ee' }
  return config
})

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (err: AxiosError) => {
    const status = err.response?.status || 500
    const { config } = err

    console.log('RESPONSE ERROR :', config.url)

    switch (status) {
      // authentication (token related issues)
      case 401: {
        return Promise.reject(err)
      }

      // forbidden (permission related issues)
      case 403: {
        return Promise.reject(err)
      }

      // bad request
      case 400: {
        return Promise.reject(err)
      }

      // not found
      case 404: {
        return Promise.reject(err)
      }

      // conflict
      case 409: {
        return Promise.reject(err)
      }

      // unprocessable
      case 422: {
        return Promise.reject(err)
      }

      // generic api error (server related) unexpected
      default: {
        return Promise.reject(err)
      }
    }
  },
)
