import soma from "./lib"

describe("Testando um montao de somas", () => {
    test("Soma simples", () => {
        expect(soma(1,2)).toBe(3);
    })
    test('Soma de soma', ()=> {
        expect(soma(soma(1,2),3)).toBe(6);
    })
    test('Soma de soma de soma', ()=> {
        expect(soma(soma(1,2), soma(3,4))).toBe(10);
    })
})