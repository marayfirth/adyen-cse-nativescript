var AdyenCseNativescript = require("nativescript-adyen-cse-nativescript").AdyenCseNativescript;
var adyenCseNativescript = new AdyenCseNativescript();

describe("greet function", function() {
    it("exists", function() {
        expect(adyenCseNativescript.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(adyenCseNativescript.greet()).toEqual("Hello, NS");
    });
});