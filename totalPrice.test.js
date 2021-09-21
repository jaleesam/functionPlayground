const rewire = require("rewire")
const totalPrice = rewire("./totalPrice")
const totalCost = totalPrice.__get__("totalCost")
const buyAcces = totalPrice.__get__("buyAcces")
const buyMultiPhones = totalPrice.__get__("buyMultiPhones")
// @ponicode
describe("totalCost", () => {
    test("0", () => {
        let callFunction = () => {
            totalCost()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("buyAcces", () => {
    test("0", () => {
        let callFunction = () => {
            buyAcces()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("buyMultiPhones", () => {
    test("0", () => {
        let callFunction = () => {
            buyMultiPhones()
        }
    
        expect(callFunction).not.toThrow()
    })
})
