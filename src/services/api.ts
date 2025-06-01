import axios from 'axios'
import { toast } from 'react-toastify'

const api = axios.create({
  baseURL: 'https://picsum.photos/v2',
  timeout: 10000,
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status
    const serverMessage = error?.response?.data?.message || error?.message
    const fallbackMessage = error?.message || 'An unexpected error occurred'

    if (serverMessage) {
      toast.error(serverMessage, { position: 'top-right' })
    } else if (status === 404) {
      toast.error('Content not found (404)', { position: 'top-right' })
    } else if (status === 500) {
      toast.error('Server error (500)', { position: 'top-right' })
    } else {
      toast.error(fallbackMessage, { position: 'top-right' })
    }

    return Promise.reject(error)
  }
)

export default api
