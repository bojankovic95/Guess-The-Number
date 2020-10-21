let br = document.querySelectorAll(".br");
let randBr = Math.floor(Math.random() * 100);
let brojevi = [];
let tabela = document.getElementById("tab");
let counter = 0;
let contracounter = 7;
let brojigara = localStorage.getItem("brojigre");



br.forEach((br) => {
  br.addEventListener("click", () => {
    counter++;
    contracounter--;
    br.style.backgroundColor = "red";
    brojevi.push(br.innerHTML);

    if (br.innerHTML !== randBr || brojevi.length < 7) {
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      tabela.appendChild(tr);
      tr.appendChild(td);
      td.innerHTML = counter;
      tr.appendChild(td2);
      if (randBr > br.innerHTML) {
        td2.innerHTML = `Broj je veci od ${br.innerHTML}`;
      } else if (randBr < br.innerHTML) {
        td2.innerHTML = `Broj je manji od ${br.innerHTML}`;
      }
      tr.appendChild(td3);
      td3.innerHTML = `Preostalo pokusaja ${contracounter}`;
    }

    if (brojevi.length == 7) {
      alert(`Kraj igre, trazeni broj je ${randBr}`);
      localStorage.setItem("games", "BB");
      brojevi = [];
      location.reload();
    } else if (randBr == br.innerHTML) {
      localStorage.setItem("games", 1);
      br.style.backgroundColor = "green";
      alert(`Cestitamo! Trazeni broj je ${br.innerHTML}`);
      console.log(br);
      location.reload();
    }
  });
});

let foot = document.getElementById("footer");
//foot.innerHTML = localStorage.getItem("brojigre");

console.log(brojevi);

console.log(randBr);
