// Simulasi database pesanan
let orders = [];

// Fungsi untuk menambahkan pesanan baru
function addOrder(order) {
    orders.push(order);
}

// Fungsi untuk menghapus pesanan berdasarkan ID
function deleteOrder(orderId) {
    orders = orders.filter(order => order.id !== orderId);
}

// Fungsi untuk menampilkan semua pesanan
function getAllOrders() {
    return orders;
}

// Contoh penggunaan:
// Menambahkan beberapa pesanan
addOrder({ id: 1, product: 'T-shirt', quantity: 2 });
addOrder({ id: 2, product: 'Jeans', quantity: 1 });
addOrder({ id: 3, product: 'Shoes', quantity: 3 });

// Menampilkan semua pesanan
console.log("Semua Pesanan:");
console.log(getAllOrders());

// Menghapus pesanan dengan ID 2
deleteOrder(2);

// Menampilkan pesanan setelah penghapusan
console.log("\nPesanan setelah penghapusan ID 2:");
console.log(getAllOrders());

