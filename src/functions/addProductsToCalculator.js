export function addProductsToCalculator(table, products, selector) {
    const filteredProducts = selector !== undefined ? products.filter(selector) : products
    console.log(products)
    console.log(products.food.nutrients)
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
        const calories = document.createElement("td");
        calories.textContent = `${Math.round(product.food.nutrients.ENERC_KCAL)}`;
        calories.setAttribute( 'value', `${Math.round(product.food.nutrients.ENERC_KCAL)}`);
        calories.setAttribute('name', 'calories');
        //creating product measurement label.
        const fat = document.createElement("td");
        fat.textContent = `${Math.round(product.food.nutrients.FAT) }`
        fat.setAttribute( 'value', `${Math.round(product.food.nutrients.FAT)}`);
        fat.setAttribute('name', 'fat');

        const carbs = document.createElement("td");
        carbs.textContent = `${Math.round(product.food.nutrients.CHOCDF) }`
        carbs.setAttribute( 'value', `${Math.round(product.food.nutrients.CHOCDF)}`);
        carbs.setAttribute('name', 'carbs');
        // tdInput.appendChild(input)
        row.appendChild(tdProduct);
        row.appendChild(calories);
        row.appendChild(fat);
        row.appendChild(carbs);
        body.appendChild(row);
        table.appendChild(body);
    }
   // let calories = products.food.nutrients;
   //     // [0].food.nutrients.ENERC_KCAL
   //  console.log(calories)
}