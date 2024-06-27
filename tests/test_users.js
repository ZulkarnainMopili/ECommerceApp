// test_users.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Sesuaikan dengan path ke aplikasi utama
const expect = chai.expect;

chai.use(chaiHttp);

describe('User API Tests', function() {
    describe('GET /users', function() {
        it('should return all users', function(done) {
            chai.request(app)
                .get('/users')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('array');
                    res.body.forEach(user => {
                        expect(user).to.have.property('id');
                        expect(user).to.have.property('username');
                        expect(user).to.have.property('email');
                    });
                    done();
                });
        });
    });

    describe('GET /users/:id', function() {
        it('should return a single user by id', function(done) {
            const userId = 'user123'; // Sesuaikan dengan ID pengguna yang ada di database
            chai.request(app)
                .get(/users/${userId})
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.property('id').eql(userId);
                    expect(res.body).to.have.property('username');
                    expect(res.body).to.have.property('email');
                    done();
                });
        });

        it('should return 404 if user not found', function(done) {
            const invalidUserId = 'nonexistentUser';
            chai.request(app)
                .get(/users/${invalidUserId})
                .end(function(err, res) {
                    expect(res).to.have.status(404);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.property('error');
                    expect(res.body.error).to.include('User not found');
                    done();
                });
        });
    });

    describe('POST /users', function() {
        it('should create a new user', function(done) {
            const newUser = {
                username: 'newuser',
                email: 'newuser@example.com',
                password: 'securepassword123'
            };
            chai.request(app)
                .post('/users')
                .send(newUser)
                .end(function(err, res) {
                    expect(res).to.have.status(201);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.property('id');
                    expect(res.body).to.have.property('username').eql(newUser.username);
                    expect(res.body).to.have.property('email').eql(newUser.email);
                    done();
                });
        });

        it('should not create a user without a username', function(done) {
            const newUser = {
                email: 'newuser@example.com',
                password: 'securepassword123'
            };
            chai.request(app)
                .post('/users')
                .send(newUser)
                .end(function(err, res) {
                    expect(res).to.have.status(400);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.property('error');
                    expect(res.body.error).to.include('Username is required');
                    done();
                });
        });

        it('should not create a user with an existing email', function(done) {
            const existingUserEmail = 'existinguser@example.com'; // Sesuaikan dengan email yang sudah ada di database
            const newUser = {
                username: 'anotheruser',
                email: existingUserEmail,
                password: 'securepassword123'
            };
            chai.request(app)
                .post('/users')
                .send(newUser)
                .end(function(err, res) {
                    expect(res).to.have.status(409);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.property('error');
                    expect(res.body.error).to.include('Email already exists');
                    done();
                });
        });
    });

    // Tambahkan lebih banyak test sesuai kebutuhan
});
