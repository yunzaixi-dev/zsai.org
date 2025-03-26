import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './styles.module.css';

export default function DarkModeImage({src, alt, className = '', ...props}) {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';
  
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`${className} ${isDarkMode ? styles.darkModeImage : ''}`} 
      {...props} 
    />
  );
}
