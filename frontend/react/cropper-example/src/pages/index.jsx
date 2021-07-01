import React, { useState, useCallback, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const SIZE = 150;

function createCroppedImage(image, crop) {
  if (!image) {
    return Promise.reject();
  }
  const canvas = document.createElement("canvas");
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  canvas.width = crop.width;
  canvas.height = crop.height;
  const ctx = canvas.getContext("2d");

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width,
    crop.height
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      blob => {
        if (!blob) {
          reject();
          return;
        }

        blob.name = "test.jpg";
        resolve(window.URL.createObjectURL(blob));
      },
      "image/jpeg",
      1
    );
  });
}

const createCrop = crop => ({
  ...crop,
  width: crop.width <= 0 ? SIZE : crop.width,
  height: crop.height <= 0 ? SIZE : crop.height,
  aspect: 1
});

const CropDemo = ({ src, setImgUrl }) => {
  const [crop, setCrop] = useState();
  const [imgElement, setImgElement] = useState();

  const onChange = useCallback(crop => setCrop(createCrop(crop)), []);
  const imageLoaded = useCallback(image => setImgElement(image), []);

  useEffect(() => {
    if (!imgElement) {
      return;
    }

    setCrop({
      x: imgElement.width / 2 - SIZE / 2,
      y: imgElement.height / 2 - SIZE / 2,
      width: SIZE,
      height: SIZE,
      unit: "px",
      aspect: 1
    });
  }, [imgElement]);

  useEffect(() => {
    (async () => {
      try {
        const imgUrl = await createCroppedImage(imgElement, crop);
        setImgUrl(imgUrl);
      } catch {}
    })();
  }, [imgElement, crop, setImgUrl]);

  return (
    <>
      <ReactCrop
        src={src}
        crop={crop}
        onChange={onChange}
        onImageLoaded={imageLoaded}
      />

      <br />

      <p>{JSON.stringify(crop)}</p>
    </>
  );
};

const Container = () => {
  const [croppedImgUrl, setCroppedImgUrl] = useState();
  return (
    <>
      <h1>Crop image</h1>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <CropDemo src="/sample.jpg" setImgUrl={setCroppedImgUrl} />
        </div>
        <div style={{ flex: 1 }}>
          {croppedImgUrl && (
            <img src={croppedImgUrl} style={{ width: 200 }} alt="cropped" />
          )}
        </div>
      </div>
    </>
  );
};

export default Container;
