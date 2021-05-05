var assert = require('assert');
var mutantController = require('../controllers/mutant')

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

after(function () {
  process.exit(0);
})
/*
  * Test the /GET route
  */
describe('/GET stats', () => {
    it('it should GET counts', (done) => {
      chai.request(server)
          .get('/stats')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.include.keys(["count_mutant_dna", "count_human_dna", "ratio"]);
            done();
          });
    });
    describe('/POST mutants', () => {
      it('it should return 200', (done) => {
        const body = { dna: [
          "ATGCGA",
          "CAGTGC",
          "TTATGT",
          "AGAAGG",
          "CCCCTA",
          "TCACTG"
        ]}
        chai.request(server)
          .post('/mutant')
          .send(body)
          .end((err, res) => {
                res.should.have.status(200);
            done();
          });
      });
      it('it should return 200', (done) => {
        const body = { dna: [
          "AAAAGA",
          "CAGTGC",
          "TTATGT",
          "AGAAGG",
          "CCCCTA",
          "TCACTG"
        ]}
        chai.request(server)
          .post('/mutant')
          .send(body)
          .end((err, res) => {
                res.should.have.status(200);
            done();
          });
      });
      it('it should return 200', (done) => {
        const body = { dna: [
          "AATAGA",
          "AAGTGC",
          "ATATGT",
          "AGAAGG",
          "CCCCTA",
          "TCACTG"
        ]}
        chai.request(server)
          .post('/mutant')
          .send(body)
          .end((err, res) => {
                res.should.have.status(200);
            done();
          });
      });
      it('it should return 200', (done) => {
        const body = { dna: [
          "AATAGA",
          "ATGTAC",
          "CTAACC",
          "AGAAGG",
          "CCCCTG",
          "TCACTG"
        ]}
        chai.request(server)
          .post('/mutant')
          .send(body)
          .end((err, res) => {
                res.should.have.status(200);
            done();
          });
      });
      it('it should return 403', (done) => {
        const body = { dna: [
          "ATGCGA",
          "CGGTGC",
          "TTATGT",
          "AGAAGG",
          "CCTCTA",
          "TCACTG"
        ]}
        chai.request(server)
          .post('/mutant')
          .send(body)
          .end((err, res) => {
                res.should.have.status(403);
                //res.body.length.should.be.eql(3);
            done();
          });
      });
      it('it should return 403', (done) => {
        const body = { dna: [
          "ATGCGA",
          "CGGTGC",
          "TTATGT",
          "AGAAGG",
          "CCTCTA",
          "T"
        ]}
        chai.request(server)
          .post('/mutant')
          .send(body)
          .end((err, res) => {
                res.should.have.status(403);
                //res.body.length.should.be.eql(3);
            done();
          });
      });
  });
  
});

