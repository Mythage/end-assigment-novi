export default async function dataProductSearch(arr){

    console.log(arr.length)
    //creating a <tbody> element
    const tbl = document.getElementById('productTabelList');
    tbl.innerHTML = "";
const tblBody = document.createElement("tbody");
arr.map((item) =>{

    // creating a tabel row
        const row = document.createElement("tr");
//creating pruduct label.
        const tdProduct = document.createElement("td");
        if (item.food.label.length > 10){
            tdProduct.textContent = `${item.food.label.split(',', 1)}`
        } else tdProduct.textContent = `${item.food.label}`
    //creating pruduct Quantity.
        const tdQuantity = document.createElement("td");
        tdQuantity.textContent = `${Math.round(item.measures[0].weight)}`
    //creating pruduct masurmetn label.
        const tdMesurementLable = document.createElement("td");
        tdMesurementLable.textContent = 'Gram'
    //creating a checkbox for selecting input row to calculator.
        const tdCheckbox = document.createElement('input');
        tdCheckbox.setAttribute('type', 'checkbox');
        tdCheckbox.setAttribute('value', '')

    row.appendChild(tdProduct);
    row.appendChild(tdQuantity);
    row.appendChild(tdMesurementLable);
    row.appendChild(tdCheckbox);
    tblBody.appendChild(row);
    tbl.appendChild(tblBody);
})

}