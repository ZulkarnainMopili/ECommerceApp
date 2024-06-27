// test_orders.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Sesuaikan dengan path ke aplikasi utama
const expect = chai.expect;

chai.use(chaiHttp);

describe('Order API Tests', function() {
    describe('POST /orders', function() {
        it('should create a new order', function(done) {
            chai.request(app)
                .post('/orders')
                .send({
                    userId: 'user123',
                    items: [
                        { productId: 'product1', quantity: 2 },
                        { productId: 'product2', quantity: 1 }
                    ],
                    total: 300
                })
                .end(function(err, res) {
                    expect(res).to.have.status(201);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.property('orderId');
                    expect(res.body).to.have.property('userId').eql('user123');
                    expect(res.body).to.have.property('items');
                    expect(res.body.items).to.be.an('array');
                    expect(res.body.items.length).to.eql(2);
                    done();
                });
        });

        it('should not create an order without userId', function(done) {
            chai.request(app)
                .post('/orders')
                .send({
                    items: [
                        { productId: 'product1', quantity: 2 }
                    ],
                    total: 100
                })
                .end(function(err, res) {
                    expect(res).to.have.status(400);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.property('error');
                    expect(res.body.error).to.include('UserId is required');
                    done();
                });
        });
    });

    // Tambahkan lebih banyak test sesuai kebutuhan
});
