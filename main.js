'use strict';

export function sum( a, b, c ) {
    return a + b + c;
};

export function tirage() {
    return Math.floor( ( 1 + Math.random() * 10 ) %  6 );
};

export function  average( arr = [ ] ) {
    let sum = 0;
        arr.forEach( item => (
            sum += item
        ) )
    return (
        sum / arr.length
    );
};

export function  average_global() {
    let sum = 0;
        Array.from( arguments ).forEach( item => (
            sum += item
        ) )
    return (
        sum / arguments.length
    );
};

export function fact( n ) {
    if ( n < 0 ) 
        throw new Error( 'The number shall be greater then 0' );
    return n <= 1 ? 1 : n * fact( n - 1 );  
};

export const isEmail  = email => (
    typeof email === 'string' &&
    /^[a-z0-9]{1,}[a-z0-9_.\-]*[a-z0-9]{1,}@[a-z0-9]{1,}[a-z0-9_\-]*[a-z0-9]{0,1}\.[a-z][a-z0-9]{1,8}$/i.test( 
        email 
    )
);

export const isValidPassword =  ( password ) => (
    typeof password === 'string' && 
    password.length >= 6 && 
    /[A-Z]/g.test( password ) && 
    /[.,;?]/g.test( password )
);

export default {};
