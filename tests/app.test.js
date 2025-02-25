const http = require("http");
const { app, server } = require("../src/index");

describe("Test de l'API Express", () => {
  beforeAll(() => {});

  afterAll(() => {
    server.close();
  });

  it("devrait répondre avec un statut 200 à la route /", (done) => {
    http.get(`http://localhost:${server.address().port}/`, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  it('devrait retourner "Hello World!" dans la réponse', (done) => {
    http.get(`http://localhost:${server.address().port}/`, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        expect(data).toBe("Hello World!");
        done();
      });
    });
  });
});
