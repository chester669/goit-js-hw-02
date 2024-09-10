function getShippingCost(country) {
  let price;

  switch (country) {
    case "China":
      price = 100;
      break;
    case "Chile":
      price = 250;
      break;
    case "Australia":
      price = 170;
      break;
    case "Jamaica":
      price = 120;
      break;
    default:
      return "Sorry, there is no delivery to your country";
  }
  return (message = `Shipping to ${country} will cost ${price} credits`);
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

function distance(place) {
  let metres;
  switch (place.toLowerCase()) {
    case "home":
      metres = 100;
      break;
    case "work":
      metres = 2000;
      break;
    case "chornomorka":
      metres = 5000;
      break;
    default:
      return "sorry you are Living at Troeshchina";
  }
  return `distance to ${place} is ${metres} metres`;
}

console.log(distance("Home"));
console.log(distance("gym"));
console.log(distance("cHornomorka"));
console.log(distance("work"));
