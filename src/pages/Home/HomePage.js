

import React ,{useEffect} from 'react'
import Divider from '../../components/Divider/Divider'
import { Home } from '../../sections/Home/Home'
import { Pricing } from '../../sections/Pricing/Pricing'
import { BLUE_COLOR, NAVBAR_COLOR } from '../../config'
import { Why } from '../../sections/Why/Why'
import { Hug } from '../../sections/Hug/Hug'
import ReactGA from "react-ga";


export const HomePage = () => {
    //non interaction event
    useEffect(() => {
     ReactGA.pageview(window.location.pathname);
    }, [])
    
  return (
    <>
        <div 
            style={{ marginTop: 80 }}
        />
        <Divider 
            backgroundColor={ BLUE_COLOR }
            text='UNA APP DE ENVÍO DE DINERO A ECUADOR HECHA POR ECUATORIANOS'
            textColor='white'
        />

        <Home />

        <Divider 
            backgroundColor={ BLUE_COLOR }
            text='DESCARGAS'
            textColor='white'
            paddingY={20}
            showButtons={true}
            fontWeight='bold'
        />

        <Divider 
            backgroundColor='white'
            text='¿PORQUÉ MONEY BLINKS?'
            textColor='white'
            paddingY={20}
            fontWeight='bold'
            backgrandRadius={true}
            location='/why'
        />

        <Pricing />

        <Divider 
            backgroundColor={BLUE_COLOR}
            paddingY={20}
            fontSize={18}
            text='EMPIEZA A USAR MONEYBLINKS YA, EN DOS SIMPLES PASOS'
            textColor='white'
            fontWeight='bold'
        />

        <Why />

        
        <Divider 
            backgroundColor={BLUE_COLOR}
            textColor='white'
            paddingY={20}
            text='ASEGURA LA ATENCIÓN MÉDICA DE TU FAMILIA DESDE TU PRIMER ENVÍO'
            fontWeight='bold'
            text2='HAS CLICK AQUÍ Y TE CONTAMOS'
            showDown
        />

        <Hug />

        <Divider 
            backgroundColor={NAVBAR_COLOR}
            text='¿DUDAS, CLICK AQUÍ?'
            textColor='white'
            paddingY={20}
            fontWeight='bold'
            backgrandRadius={true}
            location='/contact'
        />

    </>
  )
}
