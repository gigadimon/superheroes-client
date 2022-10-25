import s from './Gallery.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getHeroById } from 'middlewares/asyncMiddlewares';
import { ImageItem } from './ImageItem';

export default function Gallery() {
  const { heroId } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    getHeroById(heroId).then(hero => {
      setImages(hero.images);
    });
  }, [heroId]);

  return (
    <ul className={s.list}>
      {images.map(image => (
        <ImageItem key={image} image={image} setImages={setImages} />
      ))}
    </ul>
  );
}
