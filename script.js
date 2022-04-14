import { isValidPassword, isEmail } from './main.js';

( function ( wn ) {

    'use strict';

    wn.addEventListener( 'load', () => {
        const 
            form = document.getElementsByTagName( 'form' )[ 0 ];
        if ( form && form instanceof HTMLFormElement ) {
            const 
                addError = ( field ) => (
                    ( field instanceof HTMLInputElement ) && 
                    field.parentElement.classList.add( 'error' )
                ),
                removeError = ( field ) => (
                    ( field instanceof HTMLInputElement ) && 
                    field.parentElement.classList.contains( 'error' ) &&
                    field.parentElement.classList.remove( 'error' )
                ),
                verifyForm = ( item ) => {
                    const check = item => {
                        switch( item.type ) {
                            case 'password': 
                                    ( !isValidPassword( item.value ) && !addError( item ) ) || removeError( item );
                                break;
                            
                            case 'email': 
                                    ( !isEmail( item.value ) && !addError( item ) ) || removeError( item );
                                break;
                            
                            default:
                                    ( ( !item.value || ( item.value && item.value.length < 3  ) || !/^[a-z]{3,}(-[a-z]{3,})?$/.test( item.value ) ) && !addError( item ) ) || removeError( item );
                                break;
                        }
                    };
                    
                    ( item && !check( item ) ) || ( function () {
                        for ( const item of Array.from( form.elements ) ) 
                            ( item.type != 'submit' ) && check( item );
                    } )();
                };
                    form.addEventListener( 'submit', ( e ) => (
                        !e.preventDefault() && verifyForm()
                    ) );
            return Array.from( form.elements ).forEach( item => (
                item.addEventListener( 'input', () => (
                    verifyForm( item )
                ) )
            ) );
        }
    } );
} )( window );