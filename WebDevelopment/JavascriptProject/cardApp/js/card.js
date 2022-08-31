let cardContent = localStorage.getItem("cardContent") || [];
const cardCount = document.querySelector("#cardCount");
const toplamFiyatIcerik = document.querySelector("#toplamFiyat");
console.log(cardContent.length);

let toplam = 0;
if (cardContent.length > 2) {
  cardContent = JSON.parse(cardContent);
  cardCount.innerHTML = cardContent.length;
  console.log("test");
  for (let index = 0; index < cardContent.length; index++) {
    const card = cardContent[index];
    const cardIcerik = `<!-- CARD -->
    <div class="col-4 mt-5">
      <div class="card" style="width: 18rem">
        <!-- <img src="#" class="card-img-top" alt="..." /> -->
        <div class="card-body">
          <h5 class="card-title">${card.title}</h5>
          <p class="card-text">
            ${card.desc} : ${card.price}tl
          </p>
          <button class="btn btn-danger" onclick="sepettenSil(${index})">ÇIKAR</button>
        </div>
      </div>
    </div>`;
    productList.innerHTML += cardIcerik;
    toplam += Number(card.price);
  }
  const fiyatIcerik = `<h3 style="margin-left: 5%; margin-top: 2%">TOPLAM ÜCRET:</h3>
  <h3 style="margin-right: 5%; margin-top: 2%">${toplam}₺</h3>`;
  toplamFiyatIcerik.innerHTML += fiyatIcerik;
} else {
  cardCount.innerHTML = 0;
  productList.innerHTML = `<h4>Hiç Ürününüz Bulunmamaktadır!</h4>`;
  const fiyatIcerik = `<h3 style="margin-left: 5%; margin-top: 2%">TOPLAM ÜCRET:</h3>
  <h3 style="margin-right: 5%; margin-top: 2%">${toplam}₺</h3>`;
  toplamFiyatIcerik.innerHTML += fiyatIcerik;
}

function sepettenSil(urunSira) {
  cardContent.splice(urunSira, 1);
  localStorage.setItem("cardContent", JSON.stringify(cardContent));
  location.replace("/card.html");
}
