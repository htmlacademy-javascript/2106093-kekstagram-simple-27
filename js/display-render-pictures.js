const displayRenderPictures = (picturesData) => {

  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const picturesFragment = document.createDocumentFragment();

  picturesData.forEach(({url, description, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    pictureElement.querySelector('.picture__likes').textContent = likes;

    picturesFragment.append(pictureElement);
  });

  document.querySelector('.container').append(picturesFragment);

};

export {displayRenderPictures};
