const fs = require('fs');

const categories = ['Edible', 'Stationary', 'Sports', 'Electronics', 'LifeStyle', 'Others'];
let no_of_shops = 10;
let no_of_items = 20;
let image = 'https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80';

let items = [];

// Generate no_of_items items from each shop and push them to items array

for (let i = 0; i < no_of_shops; i++) {
    for (let j = 0; j < no_of_items; j++) {
        let item = {
            item_id: j,
            shop_id: i,
            name: `Item ${j}`,
            price: Math.floor(Math.random() * 1000),
            category: categories[Math.floor(Math.random() * categories.length)],
            image: image,
            description : "This is a sample description for the item." + j + " of shop " + i,
            quantity: Math.floor(Math.random() * 100),
        }
        items.push(item);
    }
}

// Write the items array to Items.json file
fs.writeFileSync('Items.json', JSON.stringify(items));



