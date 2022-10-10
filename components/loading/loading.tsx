import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import styles from './loading.module.css';

const Loading: NextPage = () => 
{
    const [ hidden, setHidden ] = useState(true);
    
    useEffect(()=>{

        setTimeout(()=> setHidden(false),4000)

    },[])

    return (
        <>
            <div className={`${styles.loading} ${hidden ? '' : styles.hidden}`}>
                <div className={styles.loading_img}>
                </div>
            </div>
        </>
    )
}

export default Loading;