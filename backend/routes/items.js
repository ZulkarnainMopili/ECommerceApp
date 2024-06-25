// items.js

// Sample data for items in the eCommerce application
const items = [
    {
        id: 1,
        name: 'Laptop',
        description: 'A high performance laptop',
        price: 1500,
        quantity: 10,
        imageUrl: 'images/laptop.jpg',
        category: 'Electronics'
    },
    {
        id: 2,
        name: 'Smartphone',
        description: 'Latest model smartphone',
        price: 800,
        quantity: 20,
        imageUrl: 'images/smartphone.jpg',
        category: 'Electronics'
    },
    {
        id: 3,
        name: 'Headphones',
        description: 'Noise cancelling headphones',
        price: 200,
        quantity: 30,
        imageUrl: 'images/headphones.jpg',
        category: 'Accessories'
    },
    {
        id: 4,
        name: 'Running Shoes',
        description: 'Comfortable running shoes',
        price: 120,
        quantity: 50,
        imageUrl: 'images/shoes.jpg',
        category: 'Fashion'
    }
];

// Function to get all items
function getAllItems() {
    return items;
}

// Function to get an item by ID
function getItemById(id) {
    return items.find(item => item.id === id);
}

// Function to add a new item
function addItem(newItem) {
    const nextId = items.length ? items[items.length - 1].id + 1 : 1;
    newItem.id = nextId;
    items.push(newItem);
    return newItem;
}

// Function to update an item by ID
function updateItem(id, updatedItem) {
    const itemIndex = items.findIndex(item => item.id === id);
    if (itemIndex === -1) {
        return null;
    }
    items[itemIndex] = { ...items[itemIndex], ...updatedItem };
    return items[itemIndex];
}

// Function to delete an item by ID
function deleteItem(id) {
    const itemIndex = items.findIndex(item => item.id === id);
    if (itemIndex === -1) {
        return null;
    }
    const deletedItem = items.splice(itemIndex, 1);
    return deletedItem[0];
}

// Exporting functions
module.exports = {
    getAllItems,
    getItemById,
    addItem,
    updateItem,
    deleteItem
};
