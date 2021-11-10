const adder_fn=require('../code');

test('adder_fn should return 0',()=>{
    expect(adder_fn("")).toBe(0)
    expect(adder_fn(`1,2`,"\n")).toBe(0)
    expect(adder_fn(`2,,,,,,,3,,,,5,,6,,,7`,"\n")).toBe(0)
})

test('adder_fn should return 1',()=>{
    expect(adder_fn("1")).toBe(1)
})

test('adder_fn should return 3',()=>{
    expect(adder_fn("1,2")).toBe(3)
})

test('adder_fn should return 6',()=>{
    expect(adder_fn("1,2@3")).toBe(6)
})

test('adder_fn should return 0.1',()=>{
    expect(adder_fn("0.1")).toBe(0.1)
})

test('adder_fn should return Exception',()=>{
    expect(adder_fn("0.1,-2,9,-3",",")).toBe("negatives not allowed : -2,-3")
})

test('adder_fn should return 12',()=>{
    expect(adder_fn("[[[6//\n{]]]]]]//////6","{")).toBe(12)
})



