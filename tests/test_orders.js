const request = require('supertest');
const app = require('../backend/server'); // sesuaikan path ke file server.js

describe('Orders API', () => {
    it('should create a new order', (done) => {
        const newOrder = { productId: '12345', quantity: 2 };
        request(app)
            .post('/api/orders')
            .send(newOrder)
            .expect(201)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });

    it('should fetch an order by ID', (done) => {
        const orderId = '67890'; // sesuaikan dengan ID pesanan yang valid
        request(app)
            .get(/api/orders/${orderId})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });

    it('should update an existing order', (done) => {
        const orderId = '67890'; // sesuaikan dengan ID pesanan yang valid
        const updatedOrder = { quantity: 3 };
        request(app)
            .put(/api/orders/${orderId})
            .send(updatedOrder)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });

    it('should delete an order', (done) => {
        const orderId = '67890'; // sesuaikan dengan ID pesanan yang valid
        request(app)
            .delete(/api/orders/${orderId})
            .expect(204)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });
});
