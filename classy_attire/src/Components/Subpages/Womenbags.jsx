import React, { useEffect, useState } from 'react'
import ApiCall from "../ApiCall";
import  handleClick  from './CartAxioscall';
import styles from './Prod.module.css'
import {Link as RouterLink} from "react-router-dom"

export default function Womenbags () {
    const [Loading, setLoading] = useState(true);
    const [data,setData] = useState(null);

    // api call on mounting
    // axiosApiCall(url,method,data)
    useEffect(() =>{
        setLoading(true);

        ApiCall("women","get",data)
        .then((res) =>{
            setLoading(false);
            // console.log(res.data["women-topWear"]);
            setData(res.data["women-bags"]);
        })
        .catch((err) =>{
            console.log(err);
            setLoading(false);
        })
    },[])

    return (
        <div className={styles.main_prod_box}>
        {
          data?.map((prod)=>{
            return(
              <div>
                {
                  <div className={styles.prod_box}>
                    <div>
                      <img className={styles.prod_imgs} src={prod.img[0]} />
    
                      <div className={styles.prod_price_btn}>
                        <div className={styles.prod_price}>{`₹ ${prod.price}`}</div>
                        <div  className={styles.prod_add_cart}>
                        <RouterLink to="/cart">
                          <button onClick={() => handleClick(prod)}className={styles.prod_cart_btn}>Add To Cart</button>
                          </RouterLink>
                          </div>
                      </div>
    
                      <div className={styles.prod_brand}>{prod.brand}</div>
                    </div>
                  </div>
                }
              </div>
            )
          })
        }
        </div>
      )
}
