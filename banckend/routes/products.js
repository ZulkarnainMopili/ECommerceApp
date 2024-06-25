// Product.js

class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.reviews = []; // Contoh: Anda bisa menambahkan properti untuk menyimpan ulasan produk
    this.stock = 0; // Contoh: Properti untuk jumlah stok produk
  }

  // Metode untuk menambahkan ulasan produk
  addReview(review) {
    this.reviews.push(review);
  }

  // Metode untuk menampilkan harga produk dalam format mata uang
  getPriceFormatted() {
    return `Rp ${this.price.toLocaleString()}`
  }

  // Metode untuk menampilkan informasi produk secara lengkap
  getInfo() {
    return `${this.name}\n${this.getPriceFormatted()}\n${this.description}`;
  }

  // Metode untuk menampilkan ulasan produk
  getReviews() {
    if (this.reviews.length === 0) {
      return "Belum ada ulasan untuk produk ini.";
    } else {
      let reviewList = "Ulasan untuk produk ini:\n";
      this.reviews.forEach((review, index) => {
        reviewList += `${index + 1}. ${review}\n`;
      });
      return reviewList;
    }
  }

  // Metode untuk menambahkan stok produk
  addToStock(quantity) {
    this.stock += quantity;
  }

  // Metode untuk mengurangi stok produk
  reduceStock(quantity) {
    if (this.stock >= quantity) {
      this.stock -= quantity;
      return true;
    } else {
      return false; // Mengembalikan false jika stok tidak mencukupi
    }
  }
}

// Contoh penggunaan:
// Membuat objek produk baru
const product1 = new Product('Smartphone', 5000000, 'Smartphone dengan kamera 48MP dan layar AMOLED.');

// Menambah ulasan untuk produk
product1.addReview('Sangat bagus! Layarnya tajam dan warnanya vibrant.');

// Menambah stok
product1.addToStock(10);

// Mengurangi stok
const success = product1.reduceStock(3);
if (success) {
  console.log(`Stok berkurang menjadi ${product1.stock}`);
} else {
  console.log(`Stok tidak mencukupi`);
}

// Menampilkan informasi produk dan ulasannya
console.log

