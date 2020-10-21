let number = document.querySelectorAll(".br");
let randomNumber = Math.floor(Math.random() * 100);
let numbers = [];
let table = document.getElementById("tab");
let GamesNumber = localStorage.getItem("GamesNumber");
let counterUp = 0;
let counterDown = 7;
// localStorage.setItem("games", "");
// let games = localStorage.getItem("games");

number.forEach((number) => {
  number.addEventListener("click", () => {
    counterUp++;
    counterDown--;
    number.style.backgroundColor = "red";
    numbers.push(number.innerHTML);

    if (number.innerHTML !== randomNumber || numbers.length < 7) {
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      table.appendChild(tr);
      tr.appendChild(td);
      td.innerHTML = counterUp;
      tr.appendChild(td2);
      if (randomNumber > number.innerHTML) {
        td2.innerHTML = `Broj je veci od ${number.innerHTML}`;
      } else if (randomNumber < number.innerHTML) {
        td2.innerHTML = `Broj je manji od ${number.innerHTML}`;
      }
      tr.appendChild(td3);
      td3.innerHTML = `Preostalo pokusaja ${counterDown}`;
    }

    if (numbers.length == 7 && randomNumber != number.innerHTML) {
      //localStorage.setItem("games", games + 1);
      alert(`Kraj igre, trazeni broj je ${randomNumber}`);
      numbers = [];
      location.reload();
    } else if (randomNumber == number.innerHTML) {
      //localStorage.setItem("games", games + 1);
      number.style.backgroundColor = "green";


      setTimeout(function(){ alert(`Cestitamo! Trazeni broj je ${number.innerHTML}`); }, 300);
      setTimeout(function(){ location.reload(); }, 2000);


      //alert(`Cestitamo! Trazeni broj je ${number.innerHTML}`);
      console.log(number);
      //location.reload();
    }
  });
});

let foot = document.getElementById("footer");

console.log(numbers);

console.log(randomNumber);
