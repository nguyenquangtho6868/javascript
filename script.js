"use strict";
//1. Bổ sung Animation cho Sidebar
document.getElementById("sidebar").addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("active");
});
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
const healthy = document.getElementById("healthy-btn");
var kiemtra = true;

//Bắt sự kiện Click vào nút "Submit"
submitBtn.addEventListener("click", function () {
  // Lấy được dữ liệu từ các Input Form
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

    date: new Date(),
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

  //Giá trị ID không được trùng với các thú cưng còn lại. Nếu không hợp lệ, hãy đưa ra thông báo "ID must unique!".
  for (let i = 0; i < petArr.length; i++) {
    if (data.id === petArr[i].id) {
      alert("ID must unique!");
      kiemtra = false;
      break;
    } else {
      kiemtra = true;
    }
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

    petArr.push(data);
    console.log(petArr);
    saveToStorage("petArr", petArr);
    renderTableData(petArr);

    //clearInput()

    //console.log(petArr);
    clearInput();
  }

  if (khoemanh == false) {
    renderTableData(petArr);
  }
});
//Hiển thị danh sách thú cưng
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
  <th scope="col">Action</th>
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
    <td scope="col"><button class="btn btn-danger" onclick="deletePet('${index}')">Delete</button>
  
    </td>
  </tr> `;
  });

  document.getElementById("thead").innerHTML = str;
};
function deletePet(index) {
  if (confirm("Are you sure?")) {
    console.log(index);

    petArr.splice(index, 1);

    saveToStorage("petArr", petArr);
    renderTableData(petArr);
  }
}

console.log(breedArr);
//. Hiển thị Breed trong màn hình quản lý thú cưng
typeInput.addEventListener("click", renderBreed);
function renderBreed() {
  breedInput.innerHTML = "<option>Select Breed</option>";
  const breedDog = breedArr.filter((breeditem) => breeditem.type === "Dog");
  const breedCat = breedArr.filter((breeditem) => breeditem.type === "Cat");
  //chọn breed theo type
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
