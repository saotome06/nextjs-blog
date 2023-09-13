import { Box } from '@mui/material';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import { useRouter } from 'next/router';
import CamImag from '../../components/camImg';
import newDataState from '../../components/camImg'; 
import styles from '../../components/layout.module.css';

export default function Home() {
  const { camNam } = useRouter().query;
  console.log(newDataState);
  return (
    <>
      <Header />
      <Sidebar />
      <Box
        sx={{
          width: '30%',
          border: 'none',
          marginLeft: '200px',
          backgroundColor: 'none',
          display: 'flex',
          justifyContent: 'flex-start',
          minWidth: '500px',
          boxShadow: '0 0 3px 2px #ccc',
          marginTop: '20px',
          padding: '10px',
        }}
      >
        <div 
          className={styles.camImg}
          style={{
            width: '90%',
            margin: 'auto', 
          }}>
          <CamImag camNam={camNam} />
          <p
            style={{
              textAlign: 'right',
              fontSize: '30px',
            }}
          >
            CAM
            <span
              style={{
                fontSize: '50px',
                fontWeight: 'bold',
              }}
            >
              {camNam}
            </span>
          </p>                                      
          <hr></hr>
          <p>{}</p>
        </div>
      </Box>
    </>
  );
}
