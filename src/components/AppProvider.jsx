import { useState, createContext } from 'react';
import { App } from './App';

const modalContextValue = {
  open: false,
  openModal: () => {},
  closeModal: () => {},
};

export const ModalContext = createContext(modalContextValue);

export function AppContextProvider() {
  const [open, setOpen] = useState(false);

  function closeModalByEsc(event) {
    if (event.key !== 'Escape') {
      return;
    }
    closeModal();
  }

  function openModal() {
    document.addEventListener('keydown', closeModalByEsc);
    setOpen(true);
  }

  function closeModal(event) {
    if (event?.currentTarget !== event?.target) {
      return;
    }
    document.removeEventListener('keydown', closeModalByEsc);
    setOpen(false);
  }

  return (
    <ModalContext.Provider value={{ open, openModal, closeModal }}>
      <App />
    </ModalContext.Provider>
  );
}
