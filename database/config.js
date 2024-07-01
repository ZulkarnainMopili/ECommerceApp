const mysql = require('mysql2');

const config = {
    host: 'localhost',    // Ganti dengan host database Anda
    user: 'root',         // Ganti dengan user database Anda
    password: 'password', // Ganti dengan password database Anda
    database: 'ecommerce' // Nama database yang telah dibuat
};

const connection = mysql.createConnection(config);

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');
});

module.exports = connection;
