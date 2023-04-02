"use strict";
const submitBtn = document.getElementById("submit-btn");
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const ageInput = document.getElementById("input-age");
const typeInput = document.getElementById("input-type");
const weightInput = document.getElementById("input-weight");
const lengthInput = document.getElementById("input-length");
const colorInput = document.getElementById("input-color-1");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");
const kiemtra = true;
//tạo lại hàm renderTableData với chức năng edit thay cho delete
const renderTableData2 = function (petArr) {
  var stredit = `<tr>
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
    <th scope="col">Action</th>
    </tr>
      `;
  petArr.map((value, index) => {
    stredit += `<tr>
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
      <td scope="col"><button class="btn btn-danger" onclick="EditPet('${index}')">Edit</button>
    
      </td>
    </tr> `;
  });

  document.getElementById("thead").innerHTML = stredit;
};
//bắt sự kiện nút edit
function EditPet(index) {
  //remove hide để bản form hiện ra
  document.getElementById("container-form").classList.remove("hide");
  // Lấy được dữ liệu từ các Input Form idInput
  idInput.value = petArr[index].id;
  nameInput.value = petArr[index].Name;
  ageInput.value = petArr[index].age;
  typeInput.value = petArr[index].type;
  weightInput.value = petArr[index].weight;
  lengthInput.value = petArr[index].length;
  colorInput.value = petArr[index].color;
  breedInput.value = petArr[index].breed;
  vaccinatedInput.checked = petArr[index].vaccinated;
  dewormedInput.checked = petArr[index].dewormed;
  sterilizedInput.checked = petArr[index].sterilized;
}
//bắt sự kiện cho nut submit edit
submitBtn.addEventListener("click", function () {
  document.getElementById("container-form").classList.add("hide");
  const data = {
    id: idInput.value,
    Name: nameInput.value,
    type: typeInput.value,
    length: parseInt(lengthInput.value),
    weight: parseInt(weightInput.value),
    age: parseInt(ageInput.value),
    color: colorInput.value,
    breed: breedInput.value,
    vaccinated: vaccinatedInput.checked,

    dewormed: dewormedInput.checked,
    sterilized: sterilizedInput.checked,

    //date: new Date(),
  };
  // Validate dữ liệu hợp lệ
  //Không có trường nào bị nhập thiếu dữ liệu.
  if (
    data.id.trim() === "" ||
    data.Name.trim() === "" ||
    isNaN(data.age) ||
    isNaN(data.weight) ||
    isNaN(data.length)
  ) {
    alert("vui long khong de trong ");
    kiemtra = false;
  }

  //Trường Age chỉ được nhập giá trị trong khoảng 1 đến 15. Nếu không hợp lệ, hãy đưa ra thông báo "Age must be between 1 and 15!".
  if (data.age < 1 || data.age > 15) {
    alert("Age must be between 1 and 15!");
    kiemtra = false;
  }
  //Trường Weight chỉ được nhập giá trị trong khoảng 1 đến 15. Nếu không hợp lệ, hãy đưa ra thông báo "Weight must be between 1 and 15!".
  if (data.weight < 1 || data.weight > 15) {
    alert("Weight must be between 1 and 15!");
    kiemtra = false;
  }

  //  Trường Length chỉ được nhập giá trị trong khoảng 1 đến 100. Nếu không hợp lệ, hãy đưa ra thông báo "Length must be between 1 and 100!".
  if (data.length < 1 || data.length > 100) {
    alert("Length must be between 1 and 100!");
    kiemtra = false;
  }
  // Bắt buộc phải chọn giá trị cho trường Type. Nếu không hợp lệ, hãy đưa ra thông báo "Please select Type!".
  if (data.type == "Select Type") {
    alert("Please select Type!");
    kiemtra = false;
  }
  //Bắt buộc phải chọn giá trị cho trường Breed. Nếu không hợp lệ, hãy đưa ra thông báo "Please select Breed!".
  if (data.breed == "Select Breed") {
    alert("Please select Breed!");
    kiemtra = false;
  }

  //4. Thêm thú cưng vào danh sách

  if (kiemtra) {
    const clearInput = function () {
      idInput.value = "";
      nameInput.value = "";
      typeInput.value = "Select Type";
      breedInput.value = "Select Breed";

      lengthInput.value = "";
      weightInput.value = "";
      ageInput.value = "";
      colorInput.value = "";

      vaccinatedInput.checked = false;
      dewormedInput.checked = false;
      sterilizedInput.checked = false;
    };

    const index = petArr.findIndex((pet) => pet.id === data.id);
    console.log(petArr);
    data.date = petArr[index].date;
    petArr[index] = data;
    saveToStorage("petArr", petArr);
    renderTableData2(petArr);

    clearInput();
  }
});
//bắt lại sự kien chọn breed theo typeInput
typeInput.addEventListener("click", renderBreed);
function renderBreed() {
  breedInput.innerHTML = "<option>Select Breed</option>";
  const breedDog = breedArr.filter((breeditem) => breeditem.type === "Dog");
  const breedCat = breedArr.filter((breeditem) => breeditem.type === "Cat");

  if (typeInput.value === "Dog") {
    breedDog.forEach(function (breeditem) {
      const option = document.createElement("option");
      option.innerHTML = `${breeditem.breed}`;
      breedInput.appendChild(option);
    });
  } else if (typeInput.value === "Cat") {
    breedCat.forEach(function (breeditem) {
      const option = document.createElement("option");
      option.innerHTML = `${breeditem.breed}`;
      breedInput.appendChild(option);
    });
  }
}
