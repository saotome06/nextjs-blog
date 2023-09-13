import ImaNextImage from 'next/image';
import styles from './layout.module.css';
import { useEffect, useState } from 'react';

export default function CamImag(props) {
  const [imageExists, setImageExists] = useState(false);
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  const nowDate = `-${year}${month}${day}-${hour}${minute}`;
  const imageUrl =
    'https://ugcam.z11.web.core.windows.net/ugcam-images/CAM' +
    props.camNam + nowDate + '.jpeg';
  const [newImageUrl, setnewImageUrl] = useState(imageUrl);
  const [newDataState, setnewDataState] = useState('');

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
    setnewDataState(newData);
    setnewImageUrl(
      'https://ugcam.z11.web.core.windows.net/ugcam-images/CAM' +
        props.camNam +
        '-' +
        newData +
        '.jpeg',
    );
  };

  useEffect(() => {
    checkImage(newImageUrl);
  }, [newImageUrl]);

  return (
    <>
        {imageExists && (
          <ImaNextImage
            src={newImageUrl}
            className={styles.container}
            width={200}
            height={200}
            alt=""
          />
        )}
        <div className={styles.date}>
          <p>{newDataState}</p>
        </div>
    </>
  );
}
