"use strict";
const findBtn = document.getElementById("find-btn");
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const typeInput = document.getElementById("input-type");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");
//tạo lại bảng hiển thị thú cưng
const renderTableData = function (petArr) {
  var str = `<tr>
    <th scope="col">ID</th>
    <th scope="col">Name</th>
    <th scope="col">Age</th>
    <th scope="col">Type</th>
    <th scope="col">Weight</th>
    <th scope="col">Length</th>
    <th scope="col">Breed</th>
    <th scope="col">Color</th>
    <th scope="col">Vaccinated</th>
    <th scope="col">Dewormed</th>
    <th scope="col">Sterilized</th>
   
    <th scope="col">Date Added</th>
   
    </tr>
      `;
  petArr.map((value, index) => {
    str += `<tr>
      <td scope="row">${value.id}</td>
      <td scope="col">${value.Name}</td>
      <td scope="col">${value.age}</td>
      <td scope="col">${value.type}</td>
      <td scope="col">${value.weight}</td>
      <td scope="col">${value.length}</td>
      <td scope="col">${value.breed}</td>
      <td scope="col">  <i class="bi bi-square-fill" style="color: ${
        value.color
      } "></i></td>
     <td scope="col">${
       value.vaccinated
         ? '<i class="bi bi-check-circle-fill"></i>'
         : '<i class="bi bi-x-circle-fill"></i>'
     }</td>
      <td scope="col">${
        value.dewormed
          ? '<i class="bi bi-check-circle-fill"></i>'
          : '<i class="bi bi-x-circle-fill"></i>'
      }</td>
      <td scope="col">${
        value.sterilized
          ? '<i class="bi bi-check-circle-fill"></i>'
          : '<i class="bi bi-x-circle-fill"></i>'
      }</td>
     
      <td scope="col">${value.date.toLocaleString("en-US").slice(0, 10)} 
   </td>
     
    </tr> `;
  });

  document.getElementById("thead").innerHTML = str;
};
console.log(petArr);
renderTableData(petArr);
//tạo lại chọn breed không phân biệt Dog và Cat
typeInput.addEventListener("click", renderBreed);
function renderBreed() {
  breedInput.innerHTML = "<option>Select Breed</option>";
  const breedDog = breedArr.filter((breeditem) => breeditem.type === "Dog");
  const breedCat = breedArr.filter((breeditem) => breeditem.type === "Cat");

  if (typeInput.value === "Dog") {
    breedArr.forEach(function (breeditem) {
      const option = document.createElement("option");
      option.innerHTML = `${breeditem.breed}`;
      breedInput.appendChild(option);
    });
  } else if (typeInput.value === "Cat") {
    breedArr.forEach(function (breeditem) {
      const option = document.createElement("option");
      option.innerHTML = `${breeditem.breed}`;
      breedInput.appendChild(option);
    });
  }
}
//bắt sự kiện nut find

findBtn.addEventListener("click", function () {
  let petArrnew = petArr;
  //dùng hàm filter để lọc điều kiện tìm kiếm
  let petArrnewid = petArrnew.filter((pet) =>
    pet.id.toUpperCase().includes(idInput.value.toUpperCase())
  );
  let petArrnewName = petArrnewid.filter((pet) =>
    pet.Name.toUpperCase().includes(nameInput.value.toUpperCase())
  );
  let petArrnewtype = petArrnewName.filter((pet) =>
    typeInput.value !== "Select Type"
      ? pet.type === typeInput.value
      : petArrnewName
  );
  let petArrnewbreed = petArrnewtype.filter((pet) =>
    breedInput.value !== "Select Breed"
      ? pet.breed === breedInput.value
      : petArrnewtype
  );
  let petArrnewvac = petArrnewbreed.filter((pet) =>
    vaccinatedInput.checked === true ? pet.vaccinated === true : petArrnewbreed
  );
  let petArrnewdew = petArrnewvac.filter((pet) =>
    dewormedInput.checked === true ? pet.dewormed === true : petArrnewvac
  );
  let petArrnewste = petArrnewdew.filter((pet) =>
    sterilizedInput.checked === true ? pet.sterilized === true : petArrnewdew
  );
  renderTableData(petArrnewste);
});
