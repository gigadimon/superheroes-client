import { Button, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import s from './Form.module.css';

export function Form({ submitHandler }) {
  const [fileUploaded, setFileUploaded] = useState(false);
  const { heroId } = useParams();

  useEffect(() => {
    document
      .getElementById('avatar')
      ?.addEventListener('change', fileChangeHandler);

    return () => {
      document
        .getElementById('avatar')
        ?.removeEventListener('change', fileChangeHandler);
    };
  }, []);

  function fileChangeHandler(event) {
    if (event.currentTarget.files.length) {
      return setFileUploaded(true);
    }
    setFileUploaded(false);
  }

  return (
    <form
      id="form"
      encType="multipart/form-data"
      className={s.form}
      onSubmit={e => {
        submitHandler(e);
        setFileUploaded(false);
      }}
    >
      <div>
        <TextField
          required={!heroId}
          label="nickname"
          id="nickname"
          size="small"
          name="nickname"
          className={`${s.textInput} ${s.input}`}
        />
        <TextField
          label="real name"
          id="real_name"
          name="real_name"
          size="small"
          className={`${s.textInput} ${s.input}`}
        />
        <TextField
          label="superpowers"
          id="superpowers"
          name="superpowers"
          size="small"
          className={`${s.textInput} ${s.input}`}
        />
      </div>
      <TextField
        fullWidth
        label="description"
        id="origin_description"
        name="origin_description"
        className={`${s.longInput} ${s.input}`}
      />
      <TextField
        fullWidth
        label="catch phrase"
        id="catch_phrase"
        name="catch_phrase"
        className={`${s.longInput} ${s.input}`}
      />
      <label htmlFor="avatar" className={s.avatar}>
        {fileUploaded ? 'File uploaded' : 'Upload avatar'}
      </label>
      <input id="avatar" name="avatar" type="file" className={s.file} />
      <Button type="submit" className={s.submit}>
        {heroId ? 'edit hero' : 'create hero'}
      </Button>
    </form>
  );
}
