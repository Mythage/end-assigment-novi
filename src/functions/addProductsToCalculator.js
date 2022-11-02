export function addProductsToCalculator(table, products, selector) {
    const filteredProducts = selector !== undefined ? products.filter(selector) : products
    console.log(products)
    const body = table.getElementsByTagName('tbody')[0]
    body.innerHTML = ""
    for (const product of filteredProducts){
        const row = document.createElement("tr")

        //creating product label.
        const tdProduct = document.createElement("td");
        if (product.food.product.length> 10) {
            tdProduct.textContent = `${product.food.product.split(',', 1)}`
            if (product.food.product.length> 25){
                tdProduct.textContent = `${product.food.product.slice(0,25) + '...'}`
            }
        } else tdProduct.textContent = `${product.food.product}`
        //creating product Quantity.
        const callories = document.createElement("td");
        callories.textContent = `${Math.round(product.food.nutrients.ENERC_KCAL)}`
        //creating product measurement label.
        const fat = document.createElement("td");
        fat.textContent = `${Math.round(product.food.nutrients.FAT)}`

        const carbs = document.createElement("td");
        carbs.textContent = `${Math.round(product.food.nutrients.CHOCDF)}`
        // tdInput.appendChild(input)
        row.appendChild(tdProduct);
        row.appendChild(carbs);
        row.appendChild(callories);
        row.appendChild(fat);
        body.appendChild(row);
        table.appendChild(body);
    }
}