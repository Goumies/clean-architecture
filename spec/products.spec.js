
const { expect } = require("chai");
const { testUtils, queryApi } = require("./helpers");

describe("Products", () => {
    describe("POST /products", () => {
        describe("When product data is missing", () => {
            it("returns 400", async () => {
                const {statusCode} = await queryApi("POST", "/products", {body: {}});
                expect(statusCode).to.equal(400);
            });
        });
    });
});
