import { Backdrop } from '@mui/material';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { Form } from './Form';
import { ModalContext } from 'components/AppProvider';

import s from './Modal.module.css';

export function Modal({ editHero, createHero }) {
  const { open, closeModal } = useContext(ModalContext);
  const { heroId } = useParams();

  function removeIfBlanc(data) {
    for (const [prop, value] of Array.from(data)) {
      if (!value) {
        data.delete(prop);
      }
    }
  }

  async function submitHandler(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    removeIfBlanc(formData);

    heroId ? await editHero(formData) : await createHero(formData);
    form.reset();
    closeModal();
  }

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
      onClick={closeModal}
      open={open}
    >
      <div className={s.formContainer}>
        <h1 className={s.title}>
          {heroId ? 'Enter new data for hero' : 'Enter new hero`s data'}
        </h1>
        <Form submitHandler={submitHandler} />
      </div>
    </Backdrop>
  );
}
