import React from 'react';

import ImageCard from './ImageCard';
import styles from './ImageList.module.css';

export default ({ images }) => {
  const imagesList = images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className={styles['image-list']}>{imagesList}</div>;
};
