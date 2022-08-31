const productList = document.querySelector("#productList");
const cardCount = document.querySelector("#cardCount");

let cardContent = localStorage.getItem("cardContent") || [];
console.log(cardContent);
if (cardContent.length > 0) {
  cardContent = JSON.parse(cardContent);
  cardCount.innerHTML = cardContent.length;
} else {
  cardCount.innerHTML = 0;
}

const products = [
  {
    title: "Optic Mouse",
    desc: "Optic gaming rgbli ucuz fırsat bu fırsat",
    price: 50,
  },
  {
    title: "RGB MEKANİK KLAVYE",
    desc: "Rahat mekanik, hissiyatı mük ışıklı klavye",
    price: 750,
  },
  {
    title: "Ekran Kartı",
    desc: "rtx3050 6gb DLSS içeriyor. Kargo bedava",
    price: 15050,
  },
];

for (let index = 0; index < products.length; index++) {
  const product = products[index];

  const card = `<!-- CARD -->
    <div class="col-4 mt-5">
      <div class="card" style="width: 18rem">
        <!-- <img src="#" class="card-img-top" alt="..." /> -->
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">
            ${product.desc} : ${product.price}tl
          </p>
          <button onclick="sepeteEkle('${product.title}','${product.desc}','${product.price}')" class="btn btn-primary">Sepete Ekle</button>
        </div>
      </div>
    </div>`;

  productList.innerHTML += card;
}

function sepeteEkle(productTitle, productDesc, productPrice) {
  const productObjects = {
    title: productTitle,
    desc: productDesc,
    price: Number(productPrice),
  };
  cardContent.push(productObjects);
  localStorage.setItem("cardContent", JSON.stringify(cardContent));
  console.log(cardContent);
  cardCount.innerHTML = cardContent.length;
}
