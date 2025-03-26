import React, { useEffect, useRef } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './styles.module.css';

export default function DarkModeImage({src, alt, className = '', ...props}) {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  
  // 在Canvas中处理图像以实现精确的颜色映射
  useEffect(() => {
    if (!isDarkMode || !imgRef.current) return;
    
    const img = imgRef.current;
    
    // 等待图像加载完成
    const handleImageLoad = () => {
      if (!canvasRef.current) return;
      
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      // 设置Canvas尺寸与图像一致
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      
      // 绘制原始图像到Canvas
      ctx.drawImage(img, 0, 0);
      
      // 获取图像数据
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      // 处理每个像素
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        
        // 如果是白色或接近白色（考虑一定的容差）
        if (r > 240 && g > 240 && b > 240) {
          // 将白色转换为 #1b1b1d
          data[i] = 0x1b;     // R
          data[i + 1] = 0x1b; // G
          data[i + 2] = 0x1d; // B
        } else {
          // 对其他颜色应用一般的暗色模式处理
          // 反转颜色但保持一定的亮度和对比度
          data[i] = 255 - r;
          data[i + 1] = 255 - g;
          data[i + 2] = 255 - b;
        }
      }
      
      // 将处理后的图像数据写回Canvas
      ctx.putImageData(imageData, 0, 0);
    };
    
    if (img.complete) {
      handleImageLoad();
    } else {
      img.addEventListener('load', handleImageLoad);
    }
    
    return () => {
      img.removeEventListener('load', handleImageLoad);
    };
  }, [isDarkMode, src]);
  
  return (
    <div className={styles.imageContainer}>
      {isDarkMode ? (
        <canvas 
          ref={canvasRef} 
          className={`${className} ${styles.canvasImage}`} 
          alt={alt}
          {...props}
        />
      ) : null}
      <img 
        ref={imgRef}
        src={src} 
        alt={alt} 
        className={`${className} ${isDarkMode ? styles.hiddenImage : ''}`}
        {...props} 
      />
    </div>
  );
}
