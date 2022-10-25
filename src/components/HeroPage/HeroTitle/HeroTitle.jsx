import s from './HeroTitle.module.css';

export function HeroTitle({ hero: { nickname, real_name } }) {
  return (
    <div className={s.nameWrapper}>
      <h1 className={s.nickname}>{nickname}</h1>
      <h2 className={s.realName}>{real_name || 'Nothing'}</h2>
    </div>
  );
}
