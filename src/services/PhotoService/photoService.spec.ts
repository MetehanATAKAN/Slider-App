import { describe, it, expect, vi } from 'vitest'
import { getPhotos } from './photoService'
import type { Photo } from '../../types/photo'

vi.mock('../api', () => ({
    default: {
        get: vi.fn()
    }
}))

import api from '../api'

describe('photoService', () => {
    it('should fetch photos correctly', async () => {
        const mockPhotos: Photo[] = [
            {
                id: '1',
                author: 'Test',
                download_url: 'https://example.com/test.jpg',
                url: 'https://example.com',
                width: 600,
                height: 400
            }
        ]

            ; (api.get as ReturnType<typeof vi.fn>).mockResolvedValue({
                data: mockPhotos
            })

        const result = await getPhotos()

        expect(api.get).toHaveBeenCalledWith('/list', {
            params: {
                page: 1,
                limit: 100,
            },
        })
        expect(result).toEqual(mockPhotos)
    })
})
