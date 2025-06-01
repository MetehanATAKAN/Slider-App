import { useQuery } from '@tanstack/react-query'
import type { UseQueryResult } from '@tanstack/react-query'
import { getPhotos } from '../services/PhotoService/photoService'
import type { Photo } from '../types/photo'

export const usePhotos = (): UseQueryResult<Photo[], Error> => {
  return useQuery<Photo[]>({
    queryKey: ['photos'],
    queryFn: getPhotos,
    retry: false,
  })
}
