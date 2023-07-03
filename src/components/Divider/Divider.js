
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Dashed } from '../../globalStyles';
import './DividerStyle.css'
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const Divider = (
  { 
    text, 
    backgroundColor, 
    textColor, 
    paddingY = 10, 
    showButtons = false, 
    fontSize = 16, 
    fontWeight = 'normal',
    text2,
    socialMedia = false,
    backgrandRadius = false,
    location = '',
    showDown = false,
    isButtonEnable=false
  }
) => {
  const dividerStyle = {
    padding: `${paddingY}px 20px`, // Padding en eje Y de 10px y en eje X de 20px
    width: '100%', // Ancho del contenedor al 100% de la pantalla
    backgroundColor: backgroundColor, // Color de fondo pasado como prop
    color: textColor, // Color de texto pasado como prop
    fontSize: fontSize,
    textAlign: 'center',
    display: 'flex',
    flexDirection: text2 ? 'column' : 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: fontWeight
  };

  const [showDownState, setShowDownState] = useState(false);
  const downRef = useRef(null);

  return (
    <Dashed className='section_divider' style={dividerStyle}>
      
      {
        showButtons && (
          <>
            {
              socialMedia && (
                <a
                  href={"https://www.tiktok.com/@moneyblinks.ec"} // Enlace a Facebook
                  target="_blank" // Abre enlace en una nueva pestaña
                  rel="noopener noreferrer" // Añade atributos de seguridad para enlaces externos
                  style={{
                    display: 'flex'
                  }}
                >
                  <img src='/assets/tiktokpng.png' className='social_redes' alt="TikTok"  />
                </a>
              )
            }
            <a
              href={socialMedia ? "https://www.facebook.com/profile.php?id=100082781024453" : 'https://play.google.com/store/apps/details?id=com.moneyblinks.WalletApp&hl=es_419'} // Enlace a Facebook
              target="_blank" // Abre enlace en una nueva pestaña
              rel="noopener noreferrer" // Añade atributos de seguridad para enlaces externos
              style={{
                display: 'flex'
              }}
            >
              <img className='social_media' src={socialMedia ? '/assets/fb.png' : '/assets/logo_playstore.png'} alt="Facebook" style={{ marginLeft: 30 }} />
            </a>
          </>
        )
      }
      
      {
        <Link style={{ 
          textDecoration: 'none',
          pointerEvents: location===''?'none':'auto',
          cursor: location===''?'default':'pointer',
        }}  to={location}>
          <div className='divider__bgradius'>{text}</div>
        </Link>
      }
      
      {
        !backgrandRadius && text2 && (
          <div>
            <br />
            <p className='divider__text2' onClick={ showDown ? () => setShowDownState(!showDownState) : () => {} } >{text2}</p>
          </div>
        )
      }

      {
        showButtons && (
          <>
            <a
              href={socialMedia ? "https://www.instagram.com/moneyblinks.ec/" : 'https://apps.apple.com/us/app/moneyblinks-wallet/id1590351645?l=es'}// Enlace a Instagram
              target="_blank" // Abre enlace en una nueva pestaña
              rel="noopener noreferrer" // Añade atributos de seguridad para enlaces externos
              style={{
                display: 'flex'
              }}
            >
              <img className='social_media' src={socialMedia ? '/assets/insta.png' : '/assets/logo_appstore.png'} alt="Instagram"  />
            </a>
            {
              socialMedia && (
                <a
                  href={"https://youtube.com/@moneyblinks9734"} // Enlace a Facebook
                  target="_blank" // Abre enlace en una nueva pestaña
                  rel="noopener noreferrer" // Añade atributos de seguridad para enlaces externos
                  style={{
                    display: 'flex'

                  }}
                >
                  <img src='/assets/youtubepng.png' alt="Youtube" className='social_redes'  />
                </a>
              )
            }
          </>
        )
      }

      {
        text2 && showDown && (
          <CSSTransition
            in={showDownState}
            nodeRef={downRef}
            timeout={300}
            classNames="alert"
            unmountOnExit
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 20
              }}
            >
              <p 
                ref={downRef} 
                style={{
                  width: '80%',
                  color: 'white',
                  textAlign: 'justify'
                }}
              >
                Desde el primer envío con tu medio de pago de preferencia y sin costo adicional, puedes registrar hasta 3 miembros de tu familia en Ecuador de forma que si tienen una enfermedad puedan ser atendidos por un médico y recibir medicina, todo de forma gratuita.<br/><br /> Además tú tienes un seguro de vida por USD $5,000, solo debes registrar los beneficiarios que desees en el link que encontrarás en el correo de confirmación del envío realizado.
              </p>
            </div>
          </CSSTransition>
        )
      }

    </Dashed>
  );
};

Divider.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default Divider;
// En el código anterior, estamos utilizando propiedades (props) para pasar el texto, color de fondo y color de texto al componente "Divider". Luego, estamos utilizando las propiedades pasadas para establecer los estilos del contenedor en línea, incluyendo el padding, ancho, color de fondo, color de texto y el borde troquelado. Por último, estamos renderizando el texto dentro del contenedor con los estilos aplicados. Asegúrate de importar y usar la biblioteca "prop-types" para realizar la validación de tipos de las propiedades del componente.





