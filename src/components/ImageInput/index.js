/* eslint react/prop-types: 0 */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiPlus } from 'react-icons/fi';

import { Container, NewImage } from './styles';

function ImageInput(props) {
  const { images, setImages } = props;

  const [previewImages, setPreviewImages] = useState([]);

  const handleSelectImages = (event) => {
    if (event.target.files) {
      const selectedImages = Array.from(event.target.files);
      setImages({ ...images, toUpload: selectedImages });
      const selectedImagesPreview = selectedImages.map((image) => {
        return URL.createObjectURL(image);
      });
      setPreviewImages(selectedImagesPreview);
    }
  };

  return (
    <Container>
      {images &&
        images.loaded.map((image) => {
          return <img key={image} src={image} alt="produto" />;
        })}
      {previewImages.map((image) => {
        return <img key={image} src={image} alt="produto" />;
      })}
      <NewImage htmlFor="image[]">
        <FiPlus size={24} color="#8257e5" />
        <input
          id="image[]"
          type="file"
          multiple
          onClick={() => setImages({ ...images, loaded: [] })}
          onChange={handleSelectImages}
        />
      </NewImage>
    </Container>
  );
}

ImageInput.propTypes = {
  images: PropTypes.shape({
    loaded: PropTypes.arrayOf(PropTypes.string),
    toUpload: PropTypes.arrayOf(PropTypes.object),
    toDelete: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  setImages: PropTypes.func.isRequired,
};

export default ImageInput;
