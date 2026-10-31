
function updateInventory(initialInventory, transactions) {
    const inventory = { ...initialInventory };

    for (const transaction of transactions) {
        const { productId, quantity, type } = transaction;

        if (!(productId in inventory)) {
            inventory[productId] = 0;
        }

        if (type === "in") {
            inventory[productId] += quantity;
        } else if (type === "out") {
            inventory[productId] = Math.max(
                0,
                inventory[productId] - quantity
            );
        }
    }

    return inventory;
}

const initialInventory = {"apple":10,"banana":5}, transactions = [{"productId":"apple","quantity":3,"type":"in"},{"productId":"banana","quantity":2,"type":"out"}]
console.log(initialInventory )