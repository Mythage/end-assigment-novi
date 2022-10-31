
export function addRowtoTable(table, products, selector) {
    const filteredProducts = selector !== undefined ? products.filter(selector) : products
    const body = table.getElementsByTagName('tbody')[0]
    body.innerHtml = ""
    for (const product of filteredProducts) {
        const row = document.createElement("tr")
        row.innerHTML += `<input  value="${ product.foodId }" name="product" class="radio" type="radio"/>`

        //creating product label.
        const tdProduct = document.createElement("td");
        if (product.product.length > 10) {
            tdProduct.textContent = `${product.product.split(',', 1)}`
            if (product.product.length > 25){
                tdProduct.textContent = `${product.product.slice(0,25) + '...'}`
            }
        } else tdProduct.textContent = `${product.product}`
        //creating product Quantity.
        const tdQuantity = document.createElement("td");
        tdQuantity.textContent = `${Math.round(product.quantity)}`
        //creating product measurement label.
        const tdMaesurementLabel = document.createElement("td");
        tdMaesurementLabel.textContent = 'Gram'

        row.appendChild(tdProduct);
        row.appendChild(tdQuantity);
        row.appendChild(tdMaesurementLabel);
        body.appendChild(row);
        table.appendChild(body);
    }
}