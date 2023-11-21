let users = [
  {
    id: "123456789",
    createdDate: "2021-01-06T00:00:00.000Z",
    status: "En validation",
    firstName: "Mohamed",
    lastName: "Taha",
    userName: "mtaha",
    registrationNumber: "2584",
    action: "",
  },
  {
    id: "987654321",
    createdDate: "2021-07-25T00:00:00.000Z",
    status: "Validé",
    firstName: "Hamid",
    lastName: "Orrich",
    userName: "horrich",
    registrationNumber: "1594",
    action: "",
  },
  {
    id: "852963741",
    createdDate: "2021-09-15T00:00:00.000Z",
    status: "Rejeté",
    firstName: "Rachid",
    lastName: "Mahidi",
    userName: "rmahidi",
    registrationNumber: "3576",
    action: "",
  },
];

let modale = [
  {
    label: "Nom",
  },
  {
    label: "Nom d'utilisateur",
  },
  {
    label: "Matricule",
  },
  {
    label: "prenom",
  },
  {
    label: "Date de creation",
  },
  {
    label: "Etat",
  },
];

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

btn.onclick = function () {
  modal.style.display = "block";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let birthday = new Date("1995-12-17T03:24:00");
birthday.toString();
console.log(birthday);

displayList(users);

function displayList(users) {
  let tbody = document.getElementById("tableBody");
  users.forEach((user) => {
    user.createdDate
      ? (user.createdDate = new Date(user.createdDate))
      : (user.createdDate = new Date());
    user.createdDate.toString();
    user.createdDate =
      user.createdDate.getDate() +
      "/" +
      (user.createdDate.getMonth() + 1) +
      "/" +
      user.createdDate.getFullYear();
    let tr = document.createElement("tr");
    tr.style.borderTop = "1px solid gray";
    Object.entries(user).forEach((value) => {
      let td = document.createElement("td");
      let div = document.createElement("div");
      div.innerText = value[1];
      td.classList.add("bordered-row");
      if (value[1] === "En validation") {
        div.classList.add("process");
      } else if (value[1] === "Validé") {
        div.classList.add("agree");
      } else if (value[1] === "Rejeté") {
        div.classList.add("reject");
      }
      td.appendChild(div);
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
}

displayFields();

function displayFields() {
  let form = document.getElementById("fields");
  modale.forEach((field) => {
    let div = document.createElement("div");
    Object.entries(field).forEach((value) => {
      let input = document.createElement("input");
      let label = document.createElement("label");
      label.innerText = value[1];
      div.appendChild(label);
      div.appendChild(input);
    });
    form.appendChild(div);
  });
}
