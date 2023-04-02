"use strict";
//2. Lưu dữ liệu dưới LocalStorage
const data1 = {
  id: "P001",
  Name: "Tom",
  type: "Cat",
  length: 50,
  weight: 5,
  age: 3,
  color: "red",
  breed: "Tabby",
  vaccinated: true,
  dewormed: false,
  sterilized: true,

  date: "22/12/2022",
};
const data2 = {
  id: "P002",
  Name: "Tom",
  type: "Cat",
  length: 50,
  weight: 5,
  age: 3,
  color: "red",
  breed: "Tabby",
  vaccinated: true,
  dewormed: true,
  sterilized: true,

  date: "22/12/2022",
};
const data3 = {
  type: "Dog",

  breed: "Husky",
};

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
//tạo dữ liệu để text petArr
if (!getFromStorage("petArr")) {
  saveToStorage("petArr", [data1, data2]);
}
const petArr = getFromStorage("petArr");
//tạo dữ liệu để text breedArr
if (!getFromStorage("breedArr")) {
  saveToStorage("breedArr", [data1, data2, data3]);
}
const breedArr = getFromStorage("breedArr");
console.log(typeof breedArr);
