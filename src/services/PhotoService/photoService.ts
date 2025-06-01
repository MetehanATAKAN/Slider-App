import api from '../api'
import type { Photo } from '../../types/photo'

export const getPhotos = async (): Promise<Photo[]> => {
  try {
    const { data } = await api.get<Photo[]>('/list', {
      params: { page: 1, limit: 100 },
    })
    return data
  } catch {
    throw new Error('An error occurred while fetching photos.')
  }
}
