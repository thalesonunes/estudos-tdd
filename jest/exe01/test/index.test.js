const lib = require("../index.js")

describe("concatenarString", () => {

    test("'a' com 'b' igual a 'ab'", () =>{
        expect(lib.concatenarString("a", "b")).toBe("ab");
    });
    
    test("'b' com 'd' igual a 'bd'", () =>{
        expect(lib.concatenarString("a", "b")).toBe("ab");
    });

});

describe("concatenarArrays", () => {

    // toBe para elementos idênticos (string, bolean, number)
    // obs.: verificar documentação - Using Matchers
    test('[1] com [2] igual a [1, 2]', () => {
        expect(lib.concatenarArrays([1], [2])).toEqual([1,2]);
    });

    test('[1] com [2] contem 2', () => {
        expect(lib.concatenarArrays([1], [2])).toContain(2);
    });

    // toEqual para elementos equivalentes (arrays ou objetos)
    // obs.: verificar documentação - Using Matchers
    test('[] com [] igual a []', () => {
        expect(lib.concatenarArrays([], [])).toEqual([]);
    });

});

