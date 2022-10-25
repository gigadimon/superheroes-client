import { useParams, Outlet, Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ModalContext } from 'components/AppProvider';
import { deleteHero } from 'middlewares/asyncMiddlewares';
import { Button } from '@mui/material';
import s from './Header.module.css';
import { Notify } from 'notiflix';

export default function Header() {
  const { openModal } = useContext(ModalContext);
  const { heroId } = useParams();
  const navigate = useNavigate();

  async function removeHero() {
    const response = await deleteHero(heroId);
    Notify.success(response.data.message, {
      timeout: 2000,
      clickToClose: true,
    });
    navigate('/');
  }

  return (
    <div>
      <header className={s.header}>
        {heroId && (
          <>
            <Link to={-1} className={s.link}>
              ← Go back
            </Link>
            <Button onClick={removeHero}>remove hero</Button>
          </>
        )}
        <Button onClick={openModal} className={s.button}>
          {heroId ? 'Edit' : '+ Create'} hero
        </Button>
      </header>
      <Outlet />
    </div>
  );
}
