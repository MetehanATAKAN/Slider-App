import LoadingOutlet from "../../components/LoadingOutlet";
import { usePhotos } from "../../hooks/usePhotos";
import PhotoSlider from "../../components/PhotoSlider";
import { Container, Typography } from "@mui/material";

const Home = () => {
  const { data, isLoading } = usePhotos();
  return (
    <LoadingOutlet loading={isLoading}>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
         Photo Slider App
        </Typography>
        <PhotoSlider data={data} />
      </Container>
    </LoadingOutlet>
  );
};

export default Home;
