"use strict";
const submitBtn = document.getElementById("submit-btn");
const breedInput = document.getElementById("input-breed");
const typeInput = document.getElementById("input-type");
const kiemtra = true;
//bắt sự kiện cho nut submit breedArr
submitBtn.addEventListener("click", function () {
  const data = {
    breed: breedInput.value,
    type: typeInput.value,
    //Validate cho input breedArr
  };
  if (data.type === "Select Type") {
    alert("Please sclect Type");
    kiemtra = false;
  }
  if (data.breed === "") {
    alert("Please select Breed!");
    kiemtra = false;
  }
  if (kiemtra) {
    const clearInput = function () {
      typeInput.value = "Select Type";
      breedInput.value = "";
    };
    breedArr.push(data);
    //Lấy dữ liệu Breed từ LocalStorage
    saveToStorage("breedArr", breedArr);
    renderTableData1(breedArr);
    clearInput();
  }
});
// hiển thị trong bảng
const renderTableData1 = function (breedArr) {
  var strbr = `
   <tr>
   <th scope="col">#</th>
   <th scope="col">Breed</th>
   <th scope="col">Type</th>
   <th scope="col">Action</th>
   </tr>
   `;
  breedArr.map((value, index) => {
    strbr += `<tr>
    <td scope="row">${index}</td>
    <td scope="col">${value.breed}</td>
   
    <td scope="col">${value.type}</td>
    <td scope="col"><button class="btn btn-danger" onclick="deletePet('${index}')">Delete</button>
    
      </td>
  
    </tr>`;
  });
  document.getElementById("thead").innerHTML = strbr;
};
//Xoá breed
function deletePet(index) {
  if (confirm("Are you sure?")) {
    console.log(index);

    breedArr.splice(index, 1);
    console.log(breedArr);
    saveToStorage("breedArr", breedArr);
    renderTableData1(breedArr);
  }
}
