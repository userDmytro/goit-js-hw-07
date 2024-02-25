'use strict'
const categoriesList = document.querySelector("ul#categories");

const categoryItems = categoriesList.querySelectorAll('li.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((categoryItem) => {
  
    const categoryTitle = categoryItem.querySelector('h2').textContent;
  
    const categoryElements = categoryItem.querySelectorAll('ul > li');
  
    console.log(`Caregory: ${categoryTitle}`);
    console.log(`Elements: ${categoryElements.length}`);
  });