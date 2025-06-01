import { Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        p: 4,
      }}
    >
      <Typography variant="h2" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        The page you are looking for doesn’t exist or the URL is incorrect.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/')}>
        Back to Home Page
      </Button>
    </Box>
  )
}

export default NotFound
