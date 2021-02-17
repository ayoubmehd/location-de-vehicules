var vehiculesElm = document.querySelector("#vehicules");
var boiteVitesse = document.querySelector("#boite_vitesse");
var priceForm = document.querySelector("#price_form");
var currentVehicule;

data.vehicules.data.forEach((element, index) => {
  var active = index === 0 ? "active" : "";
  vehiculesElm.innerHTML += `
     <div class="card fix-height ${active}" data-index="${index}">
        <img src="${element.imgSrc}" alt="${element.label}" />
        <div class="text">
            <h3>${element.label}</h3>
            <p class="prix">${element.prix} ${data.vehicules.curency}</p>
        </div>
    </div>
  `;
});
function clickTypeDeVehicule(event) {
  var elm = event ? event.target.closest(".card") : vehiculesElm.children[0];
  var index = elm.dataset.index;
  var siblings = Array.from(vehiculesElm.children);

  siblings.forEach(function (val) {
    val.classList.remove("active");
  });

  elm.classList.add("active");

  currentVehicule = data.vehicules.data[index];
  priceForm["carburant"].value = currentVehicule.carburant;
  priceForm["boite_vitesse"].value = currentVehicule.boite_vitesse
    ? currentVehicule.boite_vitesse
    : null;

  boiteVitesse.style.display = "block";

  if (!currentVehicule.boite_vitesse) {
    boiteVitesse.style.display = "none";
    priceForm["boite_vitesse"].value = null;
  }
}

function percentage(total, value) {
  if (total == 0) return 0;

  if (!value) {
    return 0;
  }

  return (value / 100) * total;
}

function carburantPerc() {
  return percentage(
    currentVehicule.prix,
    data.carburant.percentage[priceForm["carburant"].value]
  );
}

function boiteVitessePerc() {
  return percentage(
    currentVehicule.prix,
    data.boite_vitesse.percentage[priceForm["boite_vitesse"].value]
  );
}

clickTypeDeVehicule();

vehiculesElm.addEventListener("click", clickTypeDeVehicule);

priceForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var totalElm = document.querySelector(".prix-total");
  if (totalElm) {
    console.log(totalElm);
    totalElm.remove();
    // totalElm;
  }
  var total =
    (currentVehicule.prix + carburantPerc() + boiteVitessePerc()) *
    priceForm["nb_jours"].value;
  console.log(total);

  document.body.insertAdjacentHTML(
    "afterend",
    `
    <div class="prix-total">
      <p>Le totale est ${total.toFixed(2)} ${data.vehicules.curency}</p>
    </div>
  `
  );
});
