import {describe, expect, test} from 'vitest';
import {add} from './math.helper'
import {subtract} from './math.helper'
import {multiply} from './math.helper'

test('Should add two positives numbers', () => {
    console.log('Hello everyone')
})

describe ('add', ()=> {
    test('Should add two positives numbers', () => {
        // 1. Arrange
        const a = 4;
        const b = 2;
    
        // 2. Act
        const result = add(a, b); 
    
        // 3. Assert
        expect(result).toBe(a + b);   
    }) 
});

describe ('subtract', ()=> {
    test('Should subtract two numbers', () => {
        const a = 9;
        const b = 6;
    
        const result = subtract(a, b); 
    
        expect(result).toBe(a - b);   
    }) 
});

describe ('multiply', ()=> {
    test('Should multiply two large numbers', () => {
        const a = 485;
        const b = 360;
    
        const result = multiply(a, b); 
    
        expect(result).toBe(174600);   
    }) 
});
