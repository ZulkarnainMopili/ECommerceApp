
CREATE DATABASE IF NOT EXISTS ecommerce;

USE ecommerce;

-- Tabel Produk
CREATE TABLE Produk (
    id_produk INT AUTO_INCREMENT PRIMARY KEY,
    nama_produk VARCHAR(255) NOT NULL,
    deskripsi TEXT,
    harga DECIMAL(10, 2) NOT NULL,
    stok INT NOT NULL
);

-- Tabel Pengguna
CREATE TABLE Pengguna (
    id_pengguna INT AUTO_INCREMENT PRIMARY KEY,
    nama_pengguna VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    kata_sandi VARCHAR(255) NOT NULL,
    alamat TEXT
);

-- Tabel Pesanan
CREATE TABLE Pesanan (
    id_pesanan INT AUTO_INCREMENT PRIMARY KEY,
    id_pengguna INT NOT NULL,
    tanggal_pesanan DATETIME DEFAULT CURRENT_TIMESTAMP,
    status ENUM('Pending', 'Diproses', 'Dikirim', 'Selesai', 'Dibatalkan') DEFAULT 'Pending',
    FOREIGN KEY (id_pengguna) REFERENCES Pengguna(id_pengguna)
);

-- Tabel Detail Pesanan
CREATE TABLE DetailPesanan (
    id_detail_pesanan INT AUTO_INCREMENT PRIMARY KEY,
    id_pesanan INT NOT NULL,
    id_produk INT NOT NULL,
    jumlah INT NOT NULL,
    harga_satuan DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (id_pesanan) REFERENCES Pesanan(id_pesanan),
    FOREIGN KEY (id_produk) REFERENCES Produk(id_produk)
);

-- Tambahan indeks untuk optimasi
CREATE INDEX idx_pesanan_pengguna ON Pesanan(id_pengguna);
CREATE INDEX idx_detail_pesanan_pesanan ON DetailPesanan(id_pesanan);
CREATE INDEX idx_detail_pesanan_produk ON DetailPesanan(id_produk);
