import ImaNextImage from 'next/image';
import styles from './layout.module.css';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Flag } from '@mui/icons-material';
export default function Cam(props) {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push(`/cam/${props.camNam}`);
  };

  const [imageExists, setImageExists] = useState(false);
  const imageUrl =
    'https://ugcam.z11.web.core.windows.net/ugcam-images/CAM' +
    props.camNam +
    '-20230828-2238.jpeg';
  const [newImageUrl, setnewImageUrl] = useState(imageUrl);

  const checkImage = (url) => {
    const img = new Image();
    img.src = url;
    img.onload = function () {
      setImageExists(true);
    };
    img.onerror = function () {
      setImageExists(false);
      changeImg(newImageUrl);
    };
  };

  const changeImg = (url) => {
    const dateString = url.match(/-(\d{8}-\d{4})/)[1];
    const year = dateString.substr(0, 4);
    const month = dateString.substr(4, 2);
    const day = dateString.substr(6, 2);
    const hour = dateString.substr(9, 2);
    const minute = dateString.substr(11, 2);
    const dateObject = new Date(`${year}-${month}-${day}T${hour}:${minute}:00`);
    dateObject.setMinutes(dateObject.getMinutes() - 1);
    const newYear = dateObject.getFullYear();
    const newMonth = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const newDay = dateObject.getDate().toString().padStart(2, '0');
    const newHour = dateObject.getHours().toString().padStart(2, '0');
    const newMinute = dateObject.getMinutes().toString().padStart(2, '0');
    const newData = `${newYear}${newMonth}${newDay}-${newHour}${newMinute}`;
    setnewImageUrl(
      'https://ugcam.z11.web.core.windows.net/ugcam-images/CAM' +
        props.camNam +
        '-' +
        newData +
        '.jpeg',
    );
    return newImageUrl;
  };

  useEffect(() => {
    checkImage(newImageUrl);
  }, [newImageUrl]);

  return (
    <Button
      className={styles.backPanel}
      onClick={handleButtonClick}
      sx={{
        backgroundColor: props.backColor,
      }}
    >
      <div className={styles.mainBlock}>
        {imageExists && (
          <ImaNextImage
            src={newImageUrl}
            className={styles.container}
            width={200}
            height={200}
            alt=""
          />
        )}
        <p>
          CAM<span>{props.camNam}</span>
        </p>
        <hr></hr>
        <p>{props.address}</p>
      </div>
    </Button>
  );
}
