export async function retrieveProducts() {
    // extract
    const response = await axios.get(`${URI}${ENDPOINT}`, {
        params: {
            app_id: process.env.APP_ID,
            app_key: process.env.API_KEY

        }
    })
    // transform
    return response.data.hints.map(({ food, measures }, i) => ({
        id: i,
        product: food.label,
        quantity: measures[0].weight,
        measurement: 'gram'
    }))
}

// selector: ({id}) => id === 1
export function addRowtoTable(table, products, selector) {
    const filteredProducts = selector !== undefined ? products.filter(selector) : products
    const body = table.getElementsByTagName('tbody')[0]
    body.innerHtml = ""
    for (const product of filteredProducts) {
        const row = document.createElement("tr")
    }
}