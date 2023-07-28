

import React  from 'react';
import Divider from '../../components/Divider/Divider';
import { Home3 } from '../../sections/Home/Home';
import { Pricing } from '../../sections/Pricing/Pricing';
import { BLUE_COLOR, NAVBAR_COLOR } from '../../config';
import { Why } from '../../sections/Why/Why';
import { Hug } from '../../sections/Hug/Hug';
import es from '../../languages/es.json';
import { InstVideo } from '../../sections/InstiVideo/InstVideo';

export const HomePage = () => {

    
	return (
		<>
			<div 
				style={{ marginTop: 80, }}
			/>
			<Divider 
				backgroundColor={ BLUE_COLOR }
				text={es.UNA_APP_HOME}
				textColor='white'
			/> 

			<Home3/>

			<Divider 
				backgroundColor={ BLUE_COLOR }
				text={es.DESCARGAS_HOME}
				textColor='white'
				paddingY={20}
				showButtons={true}
				isDownload={true}
				fontWeight='bold'
			/>

			

			<Pricing />

			<Divider 
				backgroundColor='white'
				text={es.POR_QUE_HOME}
				textColor='white'
				paddingY={20}
				fontWeight='bold'
				backgrandRadius={true}
				location='/why'
			/>
			<InstVideo/>
			
			<Divider 
				backgroundColor={BLUE_COLOR}
				paddingY={20}
				fontSize={18}
				text={es.EMPIEZA_A_USAR_HOME}
				textColor='white'
				fontWeight='bold'
			/>

			<Why />

        
			<Divider 
				backgroundColor={BLUE_COLOR}
				textColor='white'
				paddingY={20}
				text={es.ASEGURA_ATENCION_HOME}
				fontWeight='bold'
				text2={es.HAZ_CLICK}
				showDown
			/>

			<Hug />

			<Divider 
				backgroundColor={NAVBAR_COLOR}
				text={es.DUDAS_HOME}
				textColor='white'
				paddingY={20}
				fontWeight='bold'
				backgrandRadius={true}
				location='/contact'
			/>

		</>
	);
};
