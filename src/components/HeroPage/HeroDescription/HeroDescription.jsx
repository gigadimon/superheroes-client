import s from './HeroDescription.module.css';

export function HeroDescription({ hero }) {
  const { origin_description, superpowers, catch_phrase } = hero;
  return (
    <>
      <p className={s.field}>
        <span className={s.fieldTitle}>Description: </span>
        <span className={s.fieldText}>{origin_description || 'Nothing'}</span>
      </p>
      <p className={s.field}>
        <span className={s.fieldTitle}>Superpowers: </span>
        <span className={s.fieldText}>
          {superpowers?.length
            ? superpowers.map((el, i, arr) =>
                i !== arr.length - 1 ? `${el}, ` : el
              )
            : 'Nothing'}
        </span>
      </p>
      <p className={s.field}>
        <span className={s.fieldTitle}>Catch Phrase: </span>
        <span className={s.fieldText}>{catch_phrase || 'Nothing'}</span>
      </p>
    </>
  );
}
