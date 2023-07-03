function formatCurrency(number) {
  if (typeof number !== "number") {
    throw new Error("Invalid input. Expected a number.");
  }

  const currencyString = number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return currencyString;
}

const amount = 1234567.89;
const formattedAmount = formatCurrency(amount);
console.log(formattedAmount);
