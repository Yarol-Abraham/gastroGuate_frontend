import { NextPage } from "next";
import styles from './platillo.module.css';
import PedidosContext from '../../../../context/pedidos/pedidosContext';
import { useContext } from "react";


interface PropsPlatillo {
 platillo : {
    id: number,
    descripcion:String,
    precio: number,
    id_usuario_id: number,
    id_categoria_id: number,
    stock: number,
    estado: number,
    oferta: number,
    precio_oferta: number,
    image_url: any
 }
}

const Platillo: NextPage<PropsPlatillo> = function ({ platillo }) 
{
  const _PedidosContext = useContext(PedidosContext);

  const addPlatillo = function (platillo:any) { 
    
    let buscarPedido = _PedidosContext?.pedidos.filter(el => el.id_platillo == platillo.id) || [];
    let _pedido = {
      descripcion: platillo.descripcion,
      cantidad: 1,
      total: platillo.precio * 1,
      ubicacion: "SIN UBICACION",
      id_usuario: 0,
      id_platillo: platillo.id,
      precio_platillo: platillo.precio,
      cantidad_platillo: platillo.stock,
      image_url: platillo.image_url
    }

    if(buscarPedido?.length > 0)
    {
      _PedidosContext?.updatePedido(_pedido);
    }
    else
    {
      _PedidosContext?.addPedido(_pedido);
    }
   
  }

  const { image_url, descripcion, stock, precio } = platillo;
    return (
        <div className={styles.blog_slider}>
          <div className={styles.blog_slider__item}>
            <div className={styles.blog_slider__img}>
              {/*  eslint-disable-next-line @next/next/no-img-element */}
              <img src={`http://localhost:8000/media/${image_url}`} alt="" />
            </div>
            <div className={styles.blog_slider__content}>
              <h4 className={styles.blog_slider__title}>{descripcion}</h4>
              <p className={styles.blog_slider__text}> Disponible: <span className={styles.blog_slider__price}>{stock}</span></p>
              <p className={styles.blog_slider__text}> Precio: <span className={styles.blog_slider__price}>Q{precio}</span></p>
              <button onClick={()=>addPlatillo(platillo)} className={`custom_btn_2  ${styles.btn_color_shopping}`}>
                <i className="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
      </div>
    )    
}

export default Platillo