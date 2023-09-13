import styles from './layout.module.css';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import CamImag from './camImg';
export default function Cam(props) {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push(`/cam/${props.camNam}`);
  };
  return (
    <Button
      className={styles.backPanel}
      onClick={handleButtonClick}
      sx={{
        backgroundColor: props.backColor,
      }}
    >
      <div className={styles.mainBlock}>
        <CamImag camNam={props.camNam} />
        <p>
          CAM<span>{props.camNam}</span>
        </p>
        <hr></hr>
        <p>{props.address}</p>
      </div>
    </Button>
  );
}
