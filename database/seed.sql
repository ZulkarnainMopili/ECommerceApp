USE ecommerce;

-- Data awal untuk tabel Produk
INSERT INTO Produk (nama_produk, deskripsi, harga, stok) VALUES
('Produk A', 'Deskripsi produk A', 100000.00, 10),
('Produk B', 'Deskripsi produk B', 200000.00, 5),
('Produk C', 'Deskripsi produk C', 150000.00, 20);

-- Data awal untuk tabel Pengguna
INSERT INTO Pengguna (nama_pengguna, email, kata_sandi, alamat) VALUES
('Pengguna Satu', 'pengguna1@example.com', 'password1', 'Alamat Pengguna Satu'),
('Pengguna Dua', 'pengguna2@example.com', 'password2', 'Alamat Pengguna Dua'),
('Pengguna Tiga', 'pengguna3@example.com', 'password3', 'Alamat Pengguna Tiga');

-- Data awal untuk tabel Pesanan
INSERT INTO Pesanan (id_pengguna, tanggal_pesanan, status) VALUES
(1, '2024-07-01 10:00:00', 'Pending'),
(2, '2024-07-01 11:00:00', 'Diproses'),
(3, '2024-07-01 12:00:00', 'Selesai');

-- Data awal untuk tabel Detail Pesanan
INSERT INTO DetailPesanan (id_pesanan, id_produk, jumlah, harga_satuan) VALUES
(1, 1, 2, 100000.00),
(1, 2, 1, 200000.00),
(2, 2, 2, 200000.00),
(3, 3, 3, 150000.00);
