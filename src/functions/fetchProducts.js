// selector: ({id}) => id === 1
export function addRowtoTable(table, products, selector) {
    const filteredProducts = selector !== undefined ? products.filter(selector) : products
    const body = table.getElementsByTagName('tbody')[0]
    body.innerHtml = ""
    for (const product of filteredProducts) {
        const row = document.createElement("tr")
        //....
    }
}