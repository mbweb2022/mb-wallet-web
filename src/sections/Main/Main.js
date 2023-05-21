

import React from 'react'
import Divider from '../../components/Divider/Divider'
import { BLUE_COLOR, NAVBAR_COLOR } from '../../config'
import { Home } from '../Home/Home'
import { Why } from '../Why/Why'
import { Pricing } from '../Pricing/Pricing'
import { Hug } from '../Hug/Hug'
import { Faqs } from '../Faqs/Faqs'
import { Easy } from '../Easy/Easy'
import { Tutorials } from '../Tutorials/Tutorials'
import { Whats } from '../Whats/Whats'
import { Ceo } from '../Ceo/Ceo'
import { Contact } from '../Contact/Contact'
import { Footer } from '../Footer/Footer'

export const Main = () => {
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

        <Pricing />

        <div id='us' ></div>

        <Divider 
            backgroundColor='white'
            text='ADEMÁS PUEDES PAGAR $2,99 POR ENVÍO, NO IMPORTA LA SUMA QUE ENVIES, HAS CLICK Y TE CONTAMOS'
            textColor='red'
            fontWeight='bold'
            paddingY={20}
            fontSize={20}
        />

        <Divider 
            backgroundColor={ BLUE_COLOR }
            text='ASEGURA LA ATENCIÓN MÉDICA DE TU FAMILIA DESDE TU PRIMER ENVÍO'
            textColor='white'
            fontWeight='bold'
            text2='HAS CLICK AQUÍ Y TE CONTAMOS'
        />

        <Divider 
            backgroundColor={ NAVBAR_COLOR }
            text='¿PORQUÉ MONEY BLINKS?'
            textColor='white'
            paddingY={20}
            fontWeight='bold'
            fontSize={35}
        />

        <Divider 
            backgroundColor='white'
            text='EMPIEZA A USAR MONEYBLINKS YA, EN DOS SIMPLES PASOS'
            textColor={ BLUE_COLOR }
            fontWeight='bold'
        />

        <Why />

        
        <Divider 
            backgroundColor='white'
            text=''
            textColor='white'
            paddingY={10}
        />
        

        

        <Hug />

        <div id='faqs'></div>

        <Divider 
            backgroundColor={BLUE_COLOR}
            text='DUDAS? CLICK AQUÍ'
            textColor='red'
            fontWeight='bold'
            paddingY={20}
            fontSize={20}
        />

        {/* <Divider 
            backgroundColor='white'
            text='DESCARGAS'
            textColor='red'
            paddingY={20}
            showButtons={true}
            fontWeight='bold'
        />

        <Divider 
            backgroundColor='white'
            text='SIGUENOS'
            textColor='red'
            paddingY={20}
            showButtons={true}
            fontWeight='bold'
            socialMedia={true}
        /> */}

        <Faqs />

        <Divider 
            backgroundColor={  BLUE_COLOR }
            text=''
            textColor={  BLUE_COLOR }
            paddingY={10}
        />

        <Easy />

        <div id='tutorials' ></div>

        <Divider 
            backgroundColor={  BLUE_COLOR }
            text=''
            textColor={  BLUE_COLOR }
            paddingY={10}
        />

        <Tutorials />

        <div id='community' ></div>

        <Divider 
            backgroundColor={  BLUE_COLOR }
            text=''
            textColor={  BLUE_COLOR }
            paddingY={10}
        />

        <Whats />

        <Divider 
            backgroundColor={ BLUE_COLOR }
            text='DESCARGAS'
            textColor='white'
            paddingY={20}
            showButtons={true}
            fontWeight='bold'
        />

        <Divider 
            backgroundColor={ BLUE_COLOR }
            text='UNA APP DE ENVÍO DE DINERO A ECUADOR HECHA POR ECUATORIANOS'
            textColor='white'
        />

        <Ceo />

        <div id='contact' ></div>

        <Divider 
            backgroundColor={ NAVBAR_COLOR }
            text='CONTACTANOS'
            textColor='white'
            paddingY={20}
            fontWeight='bold'
            fontSize={35}
        />

        <Contact />

        <Divider 
            backgroundColor={ BLUE_COLOR }
            text='DESCARGAS'
            textColor='red'
            paddingY={20}
            showButtons={true}
            fontWeight='bold'
        />

        <Divider 
            backgroundColor='white'
            text='SÍGUENOS'
            textColor='red'
            paddingY={20}
            showButtons={true}
            fontWeight='bold'
            socialMedia={true}
        />

        <Footer />
    </>
  )
}
