"use strict";
const Export = document.getElementById("export-btn");
const Import = document.getElementById("import-btn");
const inputfile = document.getElementById("input-file");
// Export
function saveStaticDataToFile() {
  //chuyen file trong petArr
  var data_petArr = JSON.stringify(petArr);
  //lấy đối tượng blob làm đầu vào và cho phép bạn lưu tệp trên trình duyệt web.
  var file = new Blob([data_petArr], { type: "JSON" });
  //tạo mỏ neo để luw giữ liệu
  var anchor = document.createElement("a");
  anchor.href = URL.createObjectURL(file);
  //tải giữ liệu về máy
  anchor.download = "save.JSON";
  anchor.click();
}
console.log(petArr);
//bắt sự kiện nut Export
Export.addEventListener("click", saveStaticDataToFile);
//Import dữ liệu
//bắt sự kiện input file
inputfile.addEventListener("change", function () {
  console.log(inputfile.files);
});
//bắt sự kiện Nút Import
Import.addEventListener("click", function () {
  console.log("import");
  const file = inputfile.files[0];
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    saveToStorage("petArr", JSON.parse(reader.result));
  });
  if (file) {
    reader.readAsText(file);
    inputfile.value = "";
  }
});
