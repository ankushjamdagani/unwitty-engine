function ImageLoader(assets = []) {
  const loadedAssets = {};
  assets.forEach((asset) => {
    const assetImage = new Image();
    assetImage.src = asset.image;
    assetImage.onload = () => {
      loadedAssets[asset.key] = assetImage;
    };
  });

  return loadedAssets;
}

export { ImageLoader };
