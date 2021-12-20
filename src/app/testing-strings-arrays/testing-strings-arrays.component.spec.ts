import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingStringsArraysComponent } from './testing-strings-arrays.component';

xdescribe('Testing Strings', ()=>{

  it('testing string using toBe matcher:',()=>{

    let myString ="siva hari"
    expect(myString).not.toBe("siva har")

  })

  it('testing string using toBe matcher:',()=>{

    let myString ="siva hari"
    expect(myString).toEqual("siva hari")

  })

  it('testing string using toBe matcher:',()=>{

    let myString ="siva hari"
    expect(myString).toContain("siva")

  })
  it('testing string using toBe matcher:',()=>{

    let myString ="siva hari 7"
    expect(myString).toMatch(/\d+/)

  })
})

xdescribe('Array test', ()=>{
  it('testing array using toEqual means Arrays should be equal',()=>{
    let x = [1,2,3]
    expect(x).toEqual([1,2,3])
  })

  it('testing array using toContains means Arrays should contain expected element ',()=>{
    let x = ['abc','efg','hij']
    expect(x).toContain('efg')
  })

})

describe('toe vs toEqual',()=>{
  it('testing with tobe :',()=>{ //toBe cant be work on objects so we have to use toEqual
    let a ={
      val:10
    }
    let b ={
      val:10
    }
    expect(a).toEqual(b)
  })
})
