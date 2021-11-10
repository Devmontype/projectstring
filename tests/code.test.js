const adder_fn=require('../code');

test('adder_fn should return 0',()=>{
    expect(adder_fn("")).toBe(0)
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