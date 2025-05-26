const multiply = require('./script.js')

describe("premier scénario de test", () => {
    it("Vrai = vrai ?", () => {
        expect(true).toBe(true)
    })

    it("La multiplication est bonne ?", () => {
        expect(multiply(10,5)).toBe(50)
    })

    it("La multiplication est bonne 2 ?", () => {
        expect(multiply(10,5)).not.toBe(150)
    })
})