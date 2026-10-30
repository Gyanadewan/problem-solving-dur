function selectBestDiscount(price, offers) {
    let bestOffer = null;
    let lowestPrice = price;

    for (const offer of offers) {
        if (price >= offer.minPrice) {
            let discountedPrice;

            if (offer.type === "flat") {
                discountedPrice = price - offer.value;
            } else if (offer.type === "percent") {
                discountedPrice = price - (price * offer.value / 100);
            }

            discountedPrice = Math.max(0, discountedPrice);

            if (discountedPrice < lowestPrice) {
                lowestPrice = discountedPrice;
                bestOffer = offer;
            }
        }
    }

    return bestOffer;
}

console.log(selectBestDiscount(100, [
  { name: "FLAT15", type: "flat", value: 15, minPrice: 50 },
  { name: "HALF", type: "percent", value: 50, minPrice: 150 }
]))