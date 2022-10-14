import { NextPage } from "next";
import styles from './platillo.module.css';

const Platillo: NextPage = function () 
{
    return (
        <div className={styles.blog_slider}>
          <div className={styles.blog_slider__item}>
            <div className={styles.blog_slider__img}>
              {/*  eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/image/item_1.jpg`} alt="" />
            </div>
            <div className={styles.blog_slider__content}>
              <h4 className={styles.blog_slider__title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
              <p className={styles.blog_slider__text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, voluptatibus. 
              <span className={styles.blog_slider__price}>Q50</span></p>
              <button className={`custom_btn_2  ${styles.btn_color_shopping}`}>
                <i className="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
      </div>
    )    
}

export default Platillo