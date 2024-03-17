import { render , screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
import React,{Component} from 'react';


it('should load a button from Contact Component', () => {

    render(<Contact/>)
    const button = screen.getByRole("button");
    //Assertion
    expect(button).toBeInTheDocument();
  
})

test('should load a heading from contact component', () => {
    render(<Contact/>)
  
    const heading= screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})


test('should load all the inputs in contact page', () => {

    render(<Contact/>);
    const inputs= screen.getAllByRole('textbox');
  //  expect(inputs).toBeInTheDocument();
  //console.log('inputs',inputs.length)
    expect(inputs.length).toBe(2);

  
})
