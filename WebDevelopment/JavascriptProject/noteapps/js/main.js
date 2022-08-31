const addBTN = document.querySelector("#addBTN");
const noteList = JSON.parse(localStorage.getItem("notes")) || [];
const notesLists = document.querySelector("#notes-lists");
const div = document.createElement("div");

let kaydet = localStorage.getItem("kayit") || "false";

addBTN.addEventListener("click", (e) => {
  kaydet = "true";
  localStorage.setItem("kayit", kaydet);
});

function noteKaydet() {
  if (kaydet.match("true")) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const noteContent = urlParams.get("noteContent");
    noteList.push({ name: noteContent });
    localStorage.setItem("notes", JSON.stringify(noteList));
    kaydet = "false";
    localStorage.setItem("kayit", kaydet);
    window.location.replace("/");
  }
}

function notlariGetir() {
  if (noteList.length > 0) {
    //
    for (let i = 0; i < noteList.length; i++) {
      const note = noteList[i];

      div.innerHTML = `<div class="m-2 mt-3"><h5 class="mb-4 text-light" id="${i}.">${note.name}</h5><button style="font-size: 15px; font-weight: bold;"  class="btn btn-danger" id="${i}" onclick="notDelete(${i})">DELETE</button></div><br>`;

      notesLists.innerHTML += div.innerHTML;
    }
    //
  } else {
    div.innerHTML = `<div class="m-2 mt-3"><h5 class="mb-4 text-light" >ÖNCELLİKLE NOT EKLEMELİSİN</h5></div><br>`;
    notesLists.innerHTML += div.innerHTML;
  }
}

function notDelete(sayi) {
  if (noteList.length > 0) {
    noteList.splice(sayi, 1);
    localStorage.setItem("notes", JSON.stringify(noteList));
    window.location.replace("/");
  }
}

window.onload = () => {
  notlariGetir();
  noteKaydet();
};
