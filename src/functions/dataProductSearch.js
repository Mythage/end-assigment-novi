export async function dataProductSearch(arr) {


    //getting the tabel elements from the html page.
    const tbl = document.getElementById('productTabelList');
    const tblBody = document.getElementById("tbody");
    tblBody.innerHTML = "";
    arr.map((item,) => {

        // creating a tabel row
        const row = document.createElement("tr");
        row.innerHTML += `<input  id="${ item.food.foodId }" name="product" class="radio" type="radio"/>`
        //creating product label.
        const tdProduct = document.createElement("td");
        if (item.food.label.length > 10) {
            tdProduct.textContent = `${item.food.label.split(',', 1)}`
        } else tdProduct.textContent = `${item.food.label}`

        //creating product Quantity.
        const tdQuantity = document.createElement("td");
        tdQuantity.textContent = `${Math.round(item.measures[0].weight)}`
        //creating product measurement label.
        const tdMaesurementLabel = document.createElement("td");
        tdMaesurementLabel.textContent = 'Gram'
        //creating a checkbox for selecting input row to calculator.

        row.appendChild(tdProduct);
        row.appendChild(tdQuantity);
        row.appendChild(tdMaesurementLabel);
        tblBody.appendChild(row);
        tbl.appendChild(tblBody);


    })

    console.log(arr)
}
