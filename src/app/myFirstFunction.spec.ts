import { addition } from "./myFirstFunction"

xdescribe('Test Addition',()=>{ //test suit describe all test cases

    it('testing addition function',()=>{ //single test case
        expect(addition(20,30)).toBe(50)
    })
})