import { Button } from '@mui/material';
import { deleteAvatar, BASE_IMG_URL } from 'middlewares/asyncMiddlewares';
import { useLocation } from 'react-router-dom';
import { Notify } from 'notiflix';

import s from './ImageItem.module.css';

export function ImageItem({ image, setImages }) {
  const { pathname } = useLocation();

  function removeImage(image) {
    deleteAvatar(`${pathname}/${image}`).then(data => {
      Notify.success(data.data.message, {
        timeout: 2000,
        clickToClose: true,
      });
      setImages(prevState => prevState.filter(el => el !== image));
    });
  }

  return (
    <li key={image} className={s.item}>
      <img
        className={s.image}
        height="250"
        src={image ? `${BASE_IMG_URL}/${image}` : `${BASE_IMG_URL}/default.png`}
        alt="hero avatar"
      />
      <Button
        variant="contained"
        className={s.button}
        onClick={() => removeImage(image)}
      >
        Remove
      </Button>
    </li>
  );
}
