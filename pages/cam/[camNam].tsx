import { Box } from '@mui/material';
import Cam from '../../components/cam';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';

export default function Home() {
  return (
    <>
      <Header />
      <Sidebar />
      <Box
        sx={{
          border: 'none',
          marginLeft: '200px',
          backgroundColor: 'none',
          display: 'flex',
          justifyContent: 'flex-start',
          minWidth: '500px',
        }}
      >
        <Cam camNam={1} address="東京都" backColor="rgb(173, 231, 231)" />
        <Cam camNam={2} address="大阪府" backColor="rgb(173, 255, 173)" />
      </Box>
    </>
  );
}
