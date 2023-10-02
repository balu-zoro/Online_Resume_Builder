
// for adding new work experience field dynamically
function addNewWEField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");
  weOb.insertBefore(newNode, weAddButtonOb);
}
// for adding academic qualification field dynamically
function addNewAQField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("aqField");
  newNode.classList.add("mt-2");
  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");
  aqOb.insertBefore(newNode, aqAddButtonOb);
}

// for generating cv

function generateCV() {
  // For setting First name
  let firstnameField = document.getElementById("firstnameField").value;
  let firstnameT = document.getElementById("firstnameT");
  firstnameT.innerHTML = firstnameField;
  // For setting Last name
  let lastnameField = document.getElementById("lastnameField").value;
  let lastnameT = document.getElementById("lastnameT");
  lastnameT.innerHTML = lastnameField;
  // For setting first and last name in professional information
  let firstnameT1 = document.getElementById("firstnameT1");
  let lastnameT1 = document.getElementById("lastnameT1");
  firstnameT1.innerHTML = firstnameField;
  lastnameT1.innerHTML = lastnameField;

  // for setting contact
  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;

  // for setting email
  document.getElementById("emailT").innerHTML =
    document.getElementById("emailField").value;

  // for setting address
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;

  // for setting facebook link
  document.getElementById("facebookT").innerHTML =
    document.getElementById("facebookField").value;
  document
    .getElementById("facebookT")
    .setAttribute("href", document.getElementById("facebookField").value);

  // for setting insta link
  document.getElementById("instaT").innerHTML =
    document.getElementById("instaField").value;
  document
    .getElementById("instaT")
    .setAttribute("href", document.getElementById("instaField").value);

  // for setting Github link
  document.getElementById("githubT").innerHTML =
    document.getElementById("githubField").value;
  document
    .getElementById("githubT")
    .setAttribute("href", document.getElementById("githubField").value);

  // for setting linkedin link
  document.getElementById("linkedinT").innerHTML =
    document.getElementById("linkedinField").value;
  document
    .getElementById("linkedinT")
    .setAttribute("href", document.getElementById("linkedinField").value);

  // for setting summary
  document.getElementById("summaryT").innerHTML =
    document.getElementById("summaryField").value;

  // for setting work experience

  let wes = document.getElementsByClassName("weField");
  let str = "";
  for (let e of wes) {
    str = str + `<li> ${e.value}</li>`;
  }
  document.getElementById("weT").innerHTML = str;

  // for setting academic qualification

  let aqs = document.getElementsByClassName("aqField");
  let str1 = "";
  for (let a of aqs) {
    str1 = str1 + `<li> ${a.value}</li>`;
  }
  document.getElementById("aqT").innerHTML = str1;

  //for setting image

  let file = document.getElementById("imageField").files[0];
  console.log(file);
  let reader = new FileReader();
  reader.readAsDataURL(file);
  console.log(reader.result);
  reader.onloadend = function () {
    document.getElementById("imageTemplate").src = reader.result;
  };

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}

// for printing the resume

function printCV() {
  var note =
    "On the next pop up , Under 'more options' change the paper size to 'A3' and also tick the 'Background Graphics' option to print your cv with Color ";
  alert(note);
  window.print();
}
