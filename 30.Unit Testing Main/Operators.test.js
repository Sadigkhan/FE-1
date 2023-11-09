// const (sum,chixma) = require('./Operators');
const { sum, chixma,devide,multiply} = require('./Operators');

describe("Sum function:", () => {
    test('adds 1 + 2 to be 3', () => {
        expect(sum(1, 2)).toBe(3);

    });
    test("adds 1 + 2 to be close to 3", () => {
        expect(sum(1, 2)).toEqual(3);
    })

    test("adds 0.1 + 0.2 to equal 0.3", () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    })
    test("adds 0.1 + 0.2 to be less than 0.3", () => {
        expect(sum(0.1, 0.2)).toBeLessThanOrEqual(0.5);
    })
    test ("5+2>cemi 6 dan boyuk olacaq" , ()=>{
        expect (sum(5,2)).toBeGreaterThan(6)
    })
    test("tereflerden birinin herf olmasi",()=>{
        expect(()=>sum("a",1)).toThrow(new Error('tereflerden hec biri string ola bilmez'))
        }) 

})

describe("Chixma function:", () => {
    test("3 den 2 chixdiqda result 1 olacaq" ,()=>{
        expect(chixma(3,2)).toBe(1)
    })

    test("5 - 2 deyerin 3 den boyuk ve ya beraber olacaq",()=>{
        expect(chixma(5,2)).toBeGreaterThanOrEqual(3)
    })

    test("1-2<4", ()=>{
        expect(chixma(1,2)).toBeLessThan(4)
    })
    test("tereflerden birinin herf olmasi",()=>{
        expect(()=>chixma("a",1)).toThrow(new Error('tereflerden hec biri string ola bilmez'))
        })
})

describe("Devide function:",()=>{
    test('should return error when divide 1 / 0', () => {
        expect(() => devide(1, 0)).toThrow(new Error('Cannot divide by zero')); //when we use toThrow we need
                                                                                // to pass instance of Error class
    });


})

describe('multiply function with only positive numbers',()=>{
    test("should return error when one of the operands is zore or negative number",()=>{
        expect(()=>multiply(-1,0)).toThrow(new Error('one of the operand cannot be negative number or zero'))

    })

    test("tereflerden birinin herf olmasi",()=>{
    expect(()=>multiply("a",1)).toThrow(new Error('tereflerden hec biri string ola bilmez'))
    })
})
