class CurrencyConverter {
  constructor() {
    this.exchangeRates = {
      usd: 1,
      eur: 0.85,
      gbp: 0.72,
    };
  }

  convert(amount, fromCurrency, toCurrency) {
    switch (fromCurrency) {
      case "usd":
        switch (toCurrency) {
          case "usd":
            return amount;
          case "eur":
            return amount * 0.85;
          case "gbp":
            return amount * 0.72;
          default:
            throw new Error("Invalid target currency.");
        }
      case "eur":
        switch (toCurrency) {
          case "usd":
            return amount / 0.85;
          case "eur":
            return amount;
          case "gbp":
            return (amount / 0.85) * 0.72;
          default:
            throw new Error("Invalid target currency.");
        }
      case "gbp":
        switch (toCurrency) {
          case "usd":
            return amount / 0.72;
          case "eur":
            return (amount / 0.72) * 0.85;
          case "gbp":
            return amount;
          default:
            throw new Error("Invalid target currency.");
        }
      default:
        throw new Error("Invalid source currency.");
    }
  }
}

function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  let result;
  const resultElement = document.getElementById("result");

  if (fromCurrency === toCurrency) {
    resultElement.innerText = "Cannot convert between the same currency.";
    return;
  }

  try {
    const converter = new CurrencyConverter();
    result = converter.convert(amount, fromCurrency, toCurrency);
    const roundedResult = result.toFixed(2);
    resultElement.innerText = `Result: ${roundedResult} ${toCurrency.toUpperCase()}`;
  } catch (error) {
    resultElement.innerText = `Error: ${error.message}`;
  } finally {
    if (result !== undefined) {
      alert(`Result: ${result.toFixed(2)} ${toCurrency.toUpperCase()}`);
    }
  }
}
