/**
 * Created by amena on 25/05/2017.
 */

const expect = require('chai').expect;
const platzom = require('..').default;

describe('#platzom', function(){
    it('Si la palabra termina en "ar", se le quitan esos dos caracteres al final', function(){
        const translation = platzom("Programar");
        expect(translation).to.equal("program");
    })

    it('Si la palabra inicia con Z, se le añade "pe" al final', function(){
        const translation = platzom("Zorro");
        expect(translation).to.equal("zorrope");
    })

    it('Si la palabra traducida tiene 10 o mas letras, se debe partir a la mitad y unir con un guión del medio', function(){
        const translation = platzom("abecedario");
        expect(translation).to.equal("abece-dario");
    })

    it('Por último, si la palabra original es un palíndromo, ninguna regla anteriror cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas', function(){
        const translation = platzom("sometemos");
        expect(translation).to.equal("SoMeTeMoS");
    })
})
