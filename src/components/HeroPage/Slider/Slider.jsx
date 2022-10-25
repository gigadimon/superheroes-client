import SLickSlider from 'react-slick';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { BASE_IMG_URL } from 'middlewares/asyncMiddlewares';
import s from './Slider.module.css';

export function Slider({ images }) {
  const { heroId } = useParams();
  return (
    <div className={s.sliderWrapper}>
      <SLickSlider
        className={s.slider}
        {...{
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        }}
      >
        {images?.length ? (
          images.map(image => (
            <div key={image}>
              <img
                height="250"
                src={
                  image
                    ? `${BASE_IMG_URL}/${image}`
                    : `${BASE_IMG_URL}/default.png`
                }
                alt={`avatar hero ${heroId}`}
              />
            </div>
          ))
        ) : (
          <img
            height="250"
            src={`${BASE_IMG_URL}/default.png`}
            alt="avatar hero"
          />
        )}
      </SLickSlider>
      <Link to="avatars" className={s.galleryButton}>
        <Button variant="contained">Open gallery</Button>
      </Link>
    </div>
  );
}
