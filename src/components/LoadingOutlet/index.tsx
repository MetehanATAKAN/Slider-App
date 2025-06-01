import React from 'react'
import { Box, CircularProgress } from '@mui/material'

type LoadingOutletProps = {
  loading: boolean
  children: React.ReactNode
}

const LoadingOutlet: React.FC<LoadingOutletProps> = ({ loading, children }) => {
  return (
    <Box sx={{ position: 'relative' }}>
      {loading && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress sx={{ color: '#fff' }} />
        </Box>
      )}
      {children}
    </Box>
  )
}

export default LoadingOutlet
