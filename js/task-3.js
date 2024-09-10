function checkForSpam(message) {
  const lowerCaseMessage = message.toLowerCase();
  const forbiddenWords =
    lowerCaseMessage.includes("sale") || lowerCaseMessage.includes("spam");
  return forbiddenWords;
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

function checkForAviability(product) {
  const lowerCase = product.toLowerCase();
  const isAviable = lowerCase.includes("wine") && lowerCase.includes("milk");
  return isAviable;
}
console.log(
  checkForAviability("in our store we have meat , beef, wine, coke today")
);
console.log(
  checkForAviability("in our store we have meat , beef, cucmber, coke today")
);
console.log(
  checkForAviability("in our store we have meat , beef, milk, wine today")
);
console.log(
  checkForAviability("in our store we have meat , beef, milk, coke today")
);
