export function addProductsToTable(table, products, selector) {
    const filteredProducts = selector !== undefined ? products.filter(selector) : products
    console.log(products)
    const tbody = table.getElementsByTagName('tbody')[0]
    tbody.innerHTML = ""
    for (const product of filteredProducts) {
        const row = document.createElement("tr")
        const input  = document.createElement("input")
        input.setAttribute('value', product.foodId )
        input.setAttribute('name', 'product')
        input.setAttribute('type', 'radio')

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

        const tdInput = document.createElement("td");
        tdInput.appendChild(input)
        row.appendChild(tdInput);
        row.appendChild(tdProduct);
        row.appendChild(tdQuantity);
        row.appendChild(tdMaesurementLabel);
        tbody.appendChild(row);
        table.appendChild(tbody);
    }
}