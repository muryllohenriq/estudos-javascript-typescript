import { UseCaseCliente } from "./UseCaseCliente"

describe("Teste dos casos de uso do cliente", () => {
    const ucc: UseCaseCliente = new UseCaseCliente();
    
    test('Testando recuperar cliente', () => {
        expect(ucc.recuperarPeloId(1)).toBeDefined();
    });
    
    test('Recuperando cliente que não existe', () => {
        expect(ucc.recuperarPeloId(2)).toBe(null);
    })
})