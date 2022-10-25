import s from './Home.module.css';
import { Button } from '@mui/material';
import { useState, useEffect, useContext } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Modal } from 'components/Modal/Modal';
import { HeroesList } from './HeroesList';
import { getAllHeroes, createHero } from 'middlewares/asyncMiddlewares';
import { useSearchParams } from 'react-router-dom';
import { ModalContext } from 'components/AppProvider';

export default function Home() {
  const [heroes, setHeroes] = useState([]);
  const [params, setParams] = useSearchParams();
  const { openModal } = useContext(ModalContext);
  const pageInUrl = Number(params.get('page'));
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5 * pageInUrl || 5);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    getAllHeroes(limit, page).then(({ heroes: newHeroes, total }) => {
      setHeroes(prevState =>
        page > 1 ? [...prevState, ...newHeroes] : newHeroes
      );
      setTotal(total);
    });
  }, [page, limit]);

  useEffect(() => {
    if (heroes.length === total) {
      Notify.info('These`re all', {
        timeout: 2000,
        clickToClose: true,
      });
    }
  }, [heroes.length, total]);

  async function createNewHero(formData) {
    const response = await createHero(formData);
    if (response) {
      const { data: hero } = response.data;
      setHeroes(prevState => [...prevState, hero]);
      Notify.success(`Hero ${hero.nickname} created`, {
        timeout: 2000,
        clickToClose: true,
      });
    }
  }

  function loadMore() {
    const nextPage = pageInUrl ? pageInUrl + 1 : 2;
    setParams(`page=${nextPage}`);
    setPage(nextPage);
    setLimit(5);
  }

  return (
    <section className={s.homeSection}>
      <Modal createHero={createNewHero} />
      {heroes.length ? (
        <HeroesList heroes={heroes} />
      ) : (
        <p className={s.defaultText}>
          You can{' '}
          <button className={s.createButton} onClick={openModal}>
            create
          </button>{' '}
          your own hero
        </p>
      )}
      {heroes.length < total && <Button onClick={loadMore}>Load More</Button>}
    </section>
  );
}
