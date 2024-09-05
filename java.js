const data = [
  {
    id: 1,
    name: "Luke Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    homeworld: "tatooine",
  },
  {
    id: 2,
    name: "C-3PO",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    homeworld: "tatooine",
  },
  {
    id: 3,
    name: "R2-D2",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    homeworld: "naboo",
  },
  {
    id: 4,
    name: "Darth Vader",
    pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    homeworld: "tatooine",
  },
  {
    id: 5,
    name: "Leia Organa",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    homeworld: "alderaan",
  },
  {
    id: 6,
    name: "Owen Lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 8,
    name: "R5-D4",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    homeworld: "tatooine",
  },
  {
    id: 9,
    name: "Biggs Darklighter",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    homeworld: "tatooine",
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    homeworld: "stewjon",
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    homeworld: "tatooine",
  },
  {
    id: 12,
    name: "Wilhuff Tarkin",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    homeworld: "eriadu",
  },
  {
    id: 13,
    name: "Chewbacca",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    homeworld: "kashyyyk",
  },
  {
    id: 14,
    name: "Han Solo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    homeworld: "corellia",
  },
  {
    id: 15,
    name: "Greedo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    homeworld: "Rodia",
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    homeworld: "tatooine",
  },
  {
    id: 18,
    name: "Wedge Antilles",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
    homeworld: "corellia",
  },
  {
    id: 19,
    name: "Jek Tono Porkins",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    homeworld: "bestine",
  },
  {
    id: 20,
    name: "Yoda",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
  },
  {
    id: 21,
    name: "Palpatine",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    homeworld: "naboo",
  },
];
const row = document.querySelector(".row");
const button = document.querySelector(".karaterButonu");
function karakter() {
  //if else yazıdğımız yer ve karaktere boyut verip foreach ile içerisinde araştırıp tek button ile getirdiğimiz yer ve görselleri.
  if (row.innerHTML == "") {
    button.innerHTML = "Krakterleri gizle";
    button.style.backgroundColor = "lightblue";
    data.forEach((karakter) => {
// += anlamı - teker teker görselleri okuyup sitede yayınlıyor + olmazsa sonuncu resim geliyor sadece
      row.innerHTML += `  
    <div class="col-lg-3 cards" >
    <img src="${karakter.pic}" width=100px>

    <p>${karakter.name}
    </p>
    <p>${karakter.homeworld}</p>
    
    </div>
    `;
    });
  } else {
    button.innerHTML = "Karateri göster";
    row.innerHTML = "";
    button.style.backgroundColor = "lightgreen";
  }
}
/* homeworld leri array haline getirme */

const homeworldsRaw = data.map((karakter) => karakter.homeworld);
console.log(homeworldsRaw);
//undifiend dönmemesi için aşağıyı yazdık
const homeWorlds = homeworldsRaw.map( 
  (homeworld) => homeworld ?? "other"
); /* mapin içinde nulis ile other kullanma */
console.log(homeWorlds);
//tekrar eden isimleri kaldırdık burda da 
const homeworldsUnique = [...new Set(homeWorlds)];
console.log(homeworldsUnique);
const homeworldsLowercase = homeworldsUnique.map((homeworld) =>
  homeworld.toLowerCase() 
//bütün yazıları gezip büyük harfli olanları küçük harfe çevirme
);
const homeworlds = homeworldsLowercase;
console.log(homeworlds);
function createRadioButtons() {
  const radioContainer = document.getElementById("radioContainer");
  homeworlds.forEach((homeworld) => {
    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = "homeworld";
    radioInput.value = homeworld;
    radioInput.id = homeworld;
    const label = document.createElement("label");
    //labelı inputla bağlamak için htmlfor 
    label.htmlFor = homeworld;
    label.textContent = homeworld;
    radioContainer.appendChild(radioInput);
    //radiocontainerin içine raidoınput ile label ekleme
    radioContainer.appendChild(label);
  });
}
createRadioButtons();
const radioButtons = document.querySelectorAll('input[name="homeworld"]');
radioButtons.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.checked) {
      const filteredHomeworld = data.filter();
      console.log(`Seçilen gezegen${radio.value}`);
    }
  });
});
console.log(radioButtons)