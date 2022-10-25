import { Link } from 'react-router-dom';
import { BASE_IMG_URL } from 'middlewares/asyncMiddlewares';
import s from './Hero.module.css';

export function Hero({ hero }) {
  const { _id: id, nickname, images } = hero;
  return (
    <li key={id} className={s.hero}>
      <Link to={`${id}`} className={s.link}>
        <img
          className={s.image}
          width="250"
          height="250"
          src={
            images[0]
              ? `${BASE_IMG_URL}/${images[0]}`
              : `${BASE_IMG_URL}/default.png`
          }
          alt={`${nickname} avatar`}
        />
        <h4 className={s.heroName}>{nickname}</h4>
      </Link>
    </li>
  );
}
