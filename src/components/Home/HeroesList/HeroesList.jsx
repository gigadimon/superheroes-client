import { Hero } from './Hero';
import s from './HeroesList.module.css';

export function HeroesList({ heroes }) {
  return (
    <ul className={s.list}>
      {heroes.map(hero => (
        <Hero key={hero._id} hero={hero} />
      ))}
    </ul>
  );
}
