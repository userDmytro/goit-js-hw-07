'use strict';
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];



const gallery = document.querySelector('.gallery');
const fragment = document.createDocumentFragment();

images.forEach((image) => {
  const listItem = document.createElement('li');
  const imgElement = document.createElement('img');
  imgElement.src = image.url;
  imgElement.alt = image.alt;

  listItem.style.margin = '10px';
  listItem.style.overflow = 'hidden';
  listItem.style.borderRadius = '8px';
  listItem.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
  imgElement.style.maxWidth = '100%';
  imgElement.style.height = 'auto';
  imgElement.style.borderRadius = '8px';
  imgElement.style.transition = 'transform 0.3s ease-in-out';

  imgElement.addEventListener('mouseover', () => {
    imgElement.style.transform = 'scale(1.1)';
  });

  imgElement.addEventListener('mouseout', () => {
    imgElement.style.transform = 'scale(1)';
  });

  listItem.appendChild(imgElement);
  fragment.appendChild(listItem);
});

gallery.appendChild(fragment);