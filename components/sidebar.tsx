import { Box, Button } from '@mui/material';

export default function Sidebar() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 30,
        left: 0,
        width: '200px',
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <Button
        sx={{
          border: 'none',
          margin: 'auto',
          padding: '10px',
          width: '100px',
          height: '80px',
          backgroundColor: 'white',
        }}
      >
        <img src="/logo.png" alt="Image" style={{ width: '100%' }} />
      </Button>
      <Button
        sx={{
          border: 'none',
          margin: 'auto',
          padding: '10px',
          height: '50px',
          backgroundColor: 'none',
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <img src="/dash.png" alt="Image" style={{ width: '10%' }} />
        <p
          style={{
            fontSize: '20px',
            padding: '5px',
            color: '#000',
            fontWeight: 'bold',
          }}
        >
          DASHBORD
        </p>
      </Button>
      <Button
        sx={{
          border: 'none',
          margin: 'auto',
          padding: '10px',
          height: '50px',
          backgroundColor: 'none',
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <img src="/map.png" alt="Image" style={{ width: '10%' }} />
        <p
          style={{
            fontSize: '20px',
            padding: '5px',
            color: '#000',
            fontWeight: 'bold',
            textAlign: 'left',
          }}
        >
          MAP
        </p>
      </Button>
    </Box>
  );
}
