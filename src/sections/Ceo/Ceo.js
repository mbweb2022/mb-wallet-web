import React, { useState } from 'react';
import { Dashed } from '../../globalStyles';
import { ReactComponent as Manito } from './../mano.svg';
import './CeoStyles.css';
import { BLUE_COLOR, GREY_COLOR, NAVBAR_COLOR } from '../../config';

export const Ceo = () => {

	const [ceo, setCeo] = useState(null);

	const elementos = [
		{ id: 1, img: '/assets/ceo.png', title: 'CO-FOUNDER & CEO', name: 'JUAN CARLOS MEDINA', desc: 'Juan Carlos es ecuatoriano y tiene 27 años de experiencia en Inclusión Financiera desarrollada en organizaciones globales, centrada en el desarrollo de productos y servicios financieros para segmentos de población vulnerable, basados en las Tendencias Fintech, incluyendo Aplicaciones de Contabilidad Financiera para Microempresarios, Plataformas de Préstamos P2P y Capacidades de Gestión de Dinero Móvil. JC ha demostrado Experiencia tecnológica en el desarrollo e implementación de soluciones bancarias y plataformas móviles para instituciones financieras, y un profundo conocimiento del desarrollo de algoritmos de pronóstico de capacidad de pago.', desc2: 'Juan Carlos ha desarrollado fuertes habilidades de gestión del rendimiento operativo y financiero convirtiendo crisis operativas en crecimiento sostenible y rentable de Instituciones Financieras en toda América Latina, esa experiencia también le ha proporcionado un profundo conocimiento del entorno de la regulación financiera en la región además de exposición profesional en África, Asia y Europa del Este. Juan Carlos ha presidido con éxito el Directorio de varias entidades financieras en varios países de América Latina.' },
		{ id: 5, img: '/assets/ceo5.png', title: 'CO-FOUNDER & CFO', name: 'WALTER TUMBACO', desc: 'Walter es Contador Público con una dilatada carrera de más de 35 años en auditoría financiera, asesoría tributaria internacional y auditoría interna de procesos y de gestión; en posiciones de Dirección en Ecuador Bottling Company Corp. (Coca-Cola), KPMG, Romero y Asociados, Ernst & Young y Diario El Universo. Actualmente es Socio de LAS - Legal Advisor Solutions Ltd., Firma miembro de LATAXNET – Latin America Tax & Legal Network y WTS. A partir de enero del 2002, lidera la práctica tributaria y financiera en LAS, atendiendo a compañías multinacionales y grupos económicos locales; con énfasis en la búsqueda de soluciones regionales para los clientes internacionales de la Firma, formando parte del International Tax Network de LATAXNET y WTS' },
		{ id: 3, img: '/assets/ceo3.png', title: 'CO-FOUNDER', name: 'FRANCISCO ESPINOSA', desc: 'Consultor de Tecnología Bancaria con 15 años de experiencia en Banca General cubriendo principalmente Banca Comercial y Banca de Inclusión. Francisco tiene una dilatada experiencia de trabajo en varios países en América Latina en desarrollo de software, arquitectura empresarial y desarrollo de negocios. Francisco ha dedicado su carrera para hacer que los proyectos a gran escala tengan éxito aportando soluciones innovadoras combinando sus habilidades técnicas con un fuerte conocimiento en el sector bancario. Francisco ha trabajado para importantes empresas de servicios financieros de la región como: TCS, Yellow Pepper y CobisCorp.' },
		{ id: 4, img: '/assets/ceo4.png', title: 'CO-FOUNDER', name: 'MIGUEL VALDES', desc: 'Miguel es un reconocido profesional con formación académica en Jurisprudencia. Su enfoque principal es la planificación fiscal internacional y la resolución de controversias, con especialización en clientes que provienen o trabajan en América Latina. Su distinguida carrera incluye el trabajo para los gigantes de servicios profesionales de Estados Unidos, Coopers & Lybrand, Mayor Brown y Andersen Tax, y Ernst & Young, donde se retiró como socio. Su trabajo internacional incluye ser socio de Machado Associados en São Paulo, así como trabajar para Koury, Lopes Advogados. Miguel es uno de los fundadores de Lataxnet, una red fiscal que se extiende por América Latina, donde mantiene contactos con abogados y contables. Miguel obtuvo su título como abogado en la Universidad Loyal de Chicago, obtuvo un máster en fiscalidad en la Universidad DePaul y se licenció en derecho en la Facultad de Derecho de la Universidad DePaul. Se desempeña como profesor de Impuestos Internacionales y Precios de Transferencia en la Universidad DePauL.' },
		{ id: 2, img: '/assets/ceo2.png', title: 'CO-FOUNDER', name: 'RICARDO CALVO', desc: 'Ricardo tiene amplia experiencia en Finanzas Inclusivas y servicios financieros digitales, trabajando en posiciones operativas, gerenciales y de asesoría por más de 30 años. Ricardo tiene múltiples experiencias exitosas en la gestión de proyectos, prestación de servicios de asesoramiento a instituciones financieras en América Latina, África y Asia. Lanzamiento de operaciones de microfinanciamiento en bancos comerciales y apoyo en la transformación digital de instituciones de microfinanzas en todo el mundo, implementando las mejores prácticas en diseño centrado en el producto, refinamiento de las metodologías crediticias y estrategias comerciales. Con una larga trayectoria de logros en la creación y alineación de organizaciones en términos de escala, eficiencia y rentabilidad.' },
		{ id: 6, img: '/assets/ceo6.png', title: 'CO-FOUNDER', name: 'SANTIAGO MOSQUERA', desc: 'Profesional con formación en Tecnología de la Información, Santiago se ha distinguido como Arquitecto de Software y empresario, actualmente Santiago es  CEO de Clear Minds Consultores Cia. Ltda. con más de 15 años de experiencia en desarrollo de aplicaciones web y móviles, Santiago está comprometido con el desarrollo y promoción de actividades con jóvenes para desarrollar su talento y capacidad de desarrollo en tecnología, impartiendo conocimiento a personas de todas las edades, desde niños de 7 años hasta desarrolladores de software de todo nivel.' },
	];

	const handleSetCeo = (element) => {
		setCeo(element);
		document.documentElement.scrollTo({
			top: 0,
			left: 0,
			behavior: 'instant', // Optional if you want to skip the scrolling animation
		});
	};

	return (
		<Dashed className='ceo__section'>

			{
				ceo
					? <div className='ceo__row' style={{ paddingTop: 20, paddingBottom: 20 }}>
						<div className='grid-item__ceo' >
							<img src={ceo.img} alt='heart' height='auto' width='35%' />
							<div className='ceo__column'>
								<div style={{ display: 'flex', alignItems: 'center' }} >
									<Manito style={{ width: '50px', height: 30 }} />
									<p style={{ color: BLUE_COLOR }}>{ceo.name}</p>
								</div>
								<p style={{ color: NAVBAR_COLOR, marginLeft: 49 }} className='responsivem' >{ceo.title}</p>
								<p style={{ fontSize: 17, fontWeight: 300, fontFamily: 'Helvetica, sans-serif', color: GREY_COLOR, marginLeft: 49, textAlign: 'justify' }} >{ceo.desc}</p>
								{
									ceo.desc2 && <p style={{ fontSize: 17, fontWeight: 300, fontFamily: 'Helvetica, sans-serif', color: GREY_COLOR, marginLeft: 49, textAlign: 'justify' }} >{ceo.desc2}</p>
								}
								<div
									style={{ display: 'flex', alignItems: 'center' }}
									className='hover'
									onClick={() => setCeo(null)}
								>
									<Manito style={{ transform: 'rotateY(180deg)' }} width={50} height={30} />
									<p style={{ color: NAVBAR_COLOR }}>VOLVER A NOSOTROS</p>
								</div>
							</div>
						</div>
					</div>
					: <div className="grid-container-ceo">
						{elementos.map(elemento => (
							<div key={elemento.id} className="grid-item-ceo">
								<img src={elemento.img} alt='heart' width='120px' height='120px' />
								<p style={{ color: GREY_COLOR, marginTop: 10 }} >{elemento.name}</p>
								<p style={{ color: BLUE_COLOR }}>{elemento.title}</p>
								<div onClick={() => handleSetCeo(elemento)} className='grid-item-box'>
									<p>LEER MÁS</p>
								</div>
							</div>
						))}
					</div>
			}
		</Dashed>
	);
};