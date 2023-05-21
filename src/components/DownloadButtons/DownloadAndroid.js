

import React from 'react';
import GooglePlayLogo from './google-play-logo.png'; // Importa el logotipo de Android

const DownloadButton = () => {
  const buttonStyle = {
    backgroundColor: 'black', // Fondo negro
    color: 'white', // Letras blancas
    padding: '12px 20px', // Padding en eje Y de 12px y en eje X de 20px
    borderRadius: '4px', // Borde redondeado con un radio de 4px
    display: 'flex', // Uso de Flexbox para centrar el contenido
    alignItems: 'center', // Centrado vertical del contenido
  };

  const logoStyle = {
    width: '24px', // Ancho del logotipo de Android
    height: '24px', // Alto del logotipo de Android
    marginRight: '8px', // Margen derecho de 8px para separar el logotipo del texto
  };

  return (
    <a
      href="https://play.google.com/store" // Enlace a la tienda de Google Play
      target="_blank" // Abre enlace en una nueva pestaña
      rel="noopener noreferrer" // Añade atributos de seguridad para enlaces externos
      style={buttonStyle}
    >
      <img src={GooglePlayLogo} alt="Google Play" style={logoStyle} />
      Descargar en Google Play
    </a>
  );
};

export default DownloadButton;
