import React from "react";
import Counter from "../Counter";
import { render , fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

let getByTestId;

beforeEach(()=>{
    const component = render(<Counter/>)
    getByTestId = component.getByTestId
})


test("header renders correct text",()=>{
    
    const headerEl = getByTestId("header")

    expect(headerEl.textContent).toBe("My Counter")

})


test("counter initially start with text of 0",()=>{
    
    const counterEl = getByTestId("counter")

    expect(counterEl.textContent).toBe("0")

})


test("input contains initail value of 1",()=>{
    
    const inputEl = getByTestId("input") 

    expect(inputEl.value).toBe("1")
})


test("add button renders with +",()=>{
    
    const addBtn = getByTestId("add-btn") 

    expect(addBtn.textContent).toBe("+")
})

test("add button renders with -",()=>{
    
    const substractBtn = getByTestId("substract-btn") 

    expect(substractBtn.textContent).toBe("-")
})


test("change value of input works correctly",()=>{
    
    const inputEl = getByTestId("input") 
    expect(inputEl.value).toBe("1")

    fireEvent.change(inputEl, {
        target:{
            value: "5"
        }
    })

    expect(inputEl.value).toBe("5")
})


test("click on plus btn adds 1 to counter",()=>{
    
    const addBtnEl = getByTestId('add-btn')
    const counterEl = getByTestId('counter')

    expect(counterEl.textContent).toBe("0")
    fireEvent.click(addBtnEl)
    expect(counterEl.textContent).toBe("1")
})

test("click on sutstract btn sutstracts 1 to counter",()=>{
    
    const substractBtnEl = getByTestId('substract-btn')
    const counterEl = getByTestId('counter')

    expect(counterEl.textContent).toBe("0")
    fireEvent.click(substractBtnEl)
    expect(counterEl.textContent).toBe("-1")
})


test("changing input value then clicking on add btn works",()=>{
    
    const addBtnEl = getByTestId('add-btn')
    const counterEl = getByTestId('counter')
    const inputEl = getByTestId('input')

    fireEvent.change(inputEl,{
        target:{
            value: '5'
        }
    })

    expect(counterEl.textContent).toBe("0")
    fireEvent.click(addBtnEl)
    expect(counterEl.textContent).toBe("5")
})


test("changing input value then clicking on substract btn works",()=>{
    
    const substractBtnEl = getByTestId('substract-btn')
    const counterEl = getByTestId('counter')
    const inputEl = getByTestId('input')

    fireEvent.change(inputEl,{
        target:{
            value: '5'
        }
    })

    expect(counterEl.textContent).toBe("0")
    fireEvent.click(substractBtnEl)
    expect(counterEl.textContent).toBe("-5")
})


test("adding and then substracting leads to the correct counter number",()=>{
    
    const addBtnEl = getByTestId('add-btn')
    const substractBtnEl = getByTestId('substract-btn')
    const counterEl = getByTestId('counter')
    const inputEl = getByTestId('input')  

    fireEvent.change(inputEl,{
        target:{
            value: "10"
        }
    })

    fireEvent.click(addBtnEl)
    fireEvent.click(addBtnEl)
    fireEvent.click(addBtnEl)
    fireEvent.click(addBtnEl)
    fireEvent.click(substractBtnEl)
    fireEvent.click(substractBtnEl)

    expect(counterEl.textContent).toBe("20")


    fireEvent.change(inputEl,{
        target:{
            value: "5"
        }
    })

    fireEvent.click(addBtnEl)
    fireEvent.click(substractBtnEl)
    fireEvent.click(substractBtnEl)

    expect(counterEl.textContent).toBe("15")

})



test("counter contains correct className",()=>{
    
    const addBtnEl = getByTestId('add-btn')
    const substractBtnEl = getByTestId('substract-btn')
    const counterEl = getByTestId('counter')
    const inputEl = getByTestId('input')  

    expect(counterEl.className).toBe("")

    fireEvent.change(inputEl,{
        target:{
            value: "50"
        }
    })

    fireEvent.click(addBtnEl)//50

    expect(counterEl.className).toBe("")

    fireEvent.click(addBtnEl)//100
    expect(counterEl.className).toBe("green")

    fireEvent.click(addBtnEl)//150
    expect(counterEl.className).toBe("green")

    fireEvent.click(substractBtnEl)//100
    fireEvent.click(substractBtnEl)//50
    expect(counterEl.className).toBe("")

    fireEvent.click(substractBtnEl)//0
    fireEvent.click(substractBtnEl)//-50
    fireEvent.click(substractBtnEl)//-100
    fireEvent.click(substractBtnEl)//-150
    expect(counterEl.className).toBe("red")

})

