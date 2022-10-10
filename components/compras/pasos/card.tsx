import { NextPage } from "next";
import styles from './card.module.css';

interface Props {
    title: String;
    paragraph: String;
    imagen: String;
}

const Card: NextPage<Props> = function ({ title, paragraph, imagen }) 
{
    return (
      <div className={styles.blog_slider}>
        <div className={styles.blog_slider__wrp}>
          <div className={styles.blog_slider__item}>
            <div className={styles.blog_slider__img}>
              {/*  eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/image/${imagen}`} alt="" />
            </div>
            <div className={styles.blog_slider__content}>
              <div className={styles.blog_slider__title}>{title}</div>
              <div className={styles.blog_slider__text}>{paragraph}</div>
            </div>
          </div>
        </div>
      </div>
    )    
}

export default Card;