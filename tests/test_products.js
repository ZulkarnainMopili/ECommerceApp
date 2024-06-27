// test_products.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Sesuaikan dengan path ke aplikasi utama
const expect = chai.expect;

chai.use(chaiHttp);

describe('Product API Tests', function() {
    describe('GET /products', function() {
        it('should return all products', function(done) {
            chai.request(app)
                .get('/products')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('array');
                    res.body.forEach(product => {
                        expect(product).to.have.property('id');
                        expect(product).to.have.property('name');
                        expect(product).to.have.property('price');
                        expect(product).to.have.property('category');
                    });
                    done();
                });
        });
    });

    describe('GET /products/:id', function() {
        it('should return a single product by id', function(done) {
            const productId = 'product1'; // Sesuaikan dengan ID produk yang ada di database
            chai.request(app)
                .get(/products/${productId})
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.property('id').eql(productId);
                    expect(res.body).to.have.property('name');
                    expect(res.body).to.have.property('price');
                    expect(res.body).to.have.property('category');
                    done();
                });
        });

        it('should return 404 if product not found', function(done) {
            const invalidProductId = 'nonexistentProduct';
            chai.request(app)
                .get(/products/${invalidProductId})
                .end(function(err, res) {
                    expect(res).to.have.status(404);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.property('error');
                    expect(res.body.error).to.include('Product not found');
                    done();
                });
        });
    });

    describe('POST /products', function() {
        it('should create a new product', function(done) {
            const newProduct = {
                name: 'New Product',
                price: 99.99,
                category: 'Electronics'
            };
            chai.request(app)
                .post('/products')
                .send(newProduct)
                .end(function(err, res) {
                    expect(res).to.have.status(201);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.property('id');
                    expect(res.body).to.have.property('name').eql(newProduct.name);
                    expect(res.body).to.have.property('price').eql(newProduct.price);
                    expect(res.body).to.have.property('category').eql(newProduct.category);
                    done();
                });
        });

        it('should not create a product without a name', function(done) {
            const newProduct = {
                price: 99.99,
                category: 'Electronics'
            };
            chai.request(app)
                .post('/products')
                .send(newProduct)
                .end(function(err, res) {
                    expect(res).to.have.status(400);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.property('error');
                    expect(res.body.error).to.include('Name is required');
                    done();
                });
        });
    });

    // Tambahkan lebih banyak test sesuai kebutuhan
});
