const request = require('supertest');
const app = require('../backend/server'); // sesuaikan path ke file server.js

describe('Users API', () => {
    it('should create a new user', (done) => {
        const newUser = { username: 'testuser', password: 'password' };
        request(app)
            .post('/api/users')
            .send(newUser)
            .expect(201)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });

    it('should fetch a user by ID', (done) => {
        const userId = '12345'; // sesuaikan dengan ID pengguna yang valid
        request(app)
            .get(/api/users/${userId})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });

    it('should update an existing user', (done) => {
        const userId = '12345'; // sesuaikan dengan ID pengguna yang valid
        const updatedUser = { username: 'updateduser', password: 'newpassword' };
        request(app)
            .put(/api/users/${userId})
            .send(updatedUser)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });

    it('should delete a user', (done) => {
        const userId = '12345'; // sesuaikan dengan ID pengguna yang valid
        request(app)
            .delete(/api/users/${userId})
            .expect(204)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });
});
