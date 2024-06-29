const request = require('supertest');
const app = require('../backend/server'); // sesuaikan path ke file server.js

describe('Products API', () => {
    it('should fetch all products', (done) => {
        request(app)
            .get('/api/products')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });

    it('should fetch a single product by ID', (done) => {
        const productId = '12345'; // sesuaikan dengan ID produk yang valid
        request(app)
            .get(`/api/products/${productId}`)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });

    it('should create a new product', (done) => {
        const newProduct = { name: 'Test Product', price: 99.99, description: 'This is a test product' };
        request(app)
            .post('/api/products')
            .send(newProduct)
            .expect(201)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });

    it('should update an existing product', (done) => {
        const productId = '12345'; // sesuaikan dengan ID produk yang valid
        const updatedProduct = { name: 'Updated Product', price: 89.99 };
        request(app)
            .put(`/api/products/${productId}`)
            .send(updatedProduct)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });

    it('should delete a product', (done) => {
        const productId = '12345'; // sesuaikan dengan ID produk yang valid
        request(app)
            .delete(`/api/products/${productId}`)
            .expect(204)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });
});
