import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getHeroById, editHero } from 'middlewares/asyncMiddlewares';
import { Modal } from 'components/Modal/Modal';
import { HeroDescription, HeroTitle, Slider } from './index';
import s from './HeroPage.module.css';

export default function HeroPage() {
  const [hero, setHero] = useState({});
  const { heroId } = useParams();

  useEffect(() => {
    getHeroById(heroId).then(hero => {
      setHero(hero);
    });
  }, [heroId]);

  function getHeroFromFormData(formData) {
    return Array.from(formData).reduce((acc, [prop, value]) => {
      acc[prop] = value;
      return acc;
    }, {});
  }

  async function submitHandler(formData) {
    const normalFormData = getHeroFromFormData(formData);
    if (!Object.values(normalFormData).filter(el => el).length) {
      return;
    }
    const response = await editHero(heroId, formData);
    if (response) {
      const { data: hero } = response.data;
      setHero(hero);
    }
  }

  return (
    <section className={s.heroSection}>
      <Modal editHero={submitHandler} />
      <HeroTitle hero={hero} />
      <Slider images={hero.images} />
      <HeroDescription hero={hero} />
    </section>
  );
}
