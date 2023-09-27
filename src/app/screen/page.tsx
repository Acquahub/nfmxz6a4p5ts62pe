import React from 'react';
import Link from 'next/link';
import AguaNotOverwritable from '../aguaNotOverwritable';
import styles from './screen.module.css';
import { Metadata } from "next";

import Image from 'next/image';



export const metadata: Metadata = {
                
}

function Screen() {
    
    
    
    

    function aguaRender() {
        return(
            <div className={"baseScreen hide-native-scrollbar " + styles["Screen"]}>
                
<div id="layer-1-6874853d1bb340cba355a0a15669f16d" className={"baseLayer hide-native-scrollbar " + styles["layer-1-6874853d1bb340cba355a0a15669f16d"]}    >
<Link href="/screen"><div className={"baseImageView " + styles["logo-6b2a9e907c894f1d93de787337c8e2c2"]}  >
    <Image id="logo-6b2a9e907c894f1d93de787337c8e2c2" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'contain' }} fill={true} alt="logo" src='https://i.ibb.co/5ndGgWv/image-43.png' />
</div></Link>
<div id="text-1-a0cfcf0311644f7d86799e9365a7fd6c" className={" baseText " + styles["text-1-a0cfcf0311644f7d86799e9365a7fd6c"]}   >
    Productos
</div>
</div>
            </div>
        );
    };

    return aguaRender();
}

export default Screen;
            