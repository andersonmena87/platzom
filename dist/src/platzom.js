"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = platzom;
/**
 * Created by amena on 25/05/2017.
 */

function platzom(str) {
    var translation = str.toLocaleLowerCase();

    //Si la palabra termina en "ar", se le quitan esos dos caracteres al final;
    if (translation.endsWith("ar")) {
        translation = translation.slice(0, -2);
    }

    //Si la palabra inicia con Z, se le añade "pe" al final
    if (translation.startsWith("z")) {
        translation += "pe";
    }

    //Si la palabra traducida tiene 10 o mas letras,
    //Se debe partir a la mitad y unir con un guión del medio

    var length = translation.length;

    if (length >= 10) {
        var firstHalf = translation.slice(0, Math.round(length / 2));
        var secondHalf = translation.slice(Math.round(length / 2));
        translation = firstHalf + "-" + secondHalf;
    }

    //Si la palabra original en un palindromo,
    //ninuguna regla anterior cuenta y se devuleve
    //la misma palabra intercalandolo mayúsculas y minusculas

    var reverse = function reverse(str) {
        return str.split("").reverse().join("");
    };
    var minMay = function minMay(str) {
        var length = str.length;
        var translation = "";
        var capitalize = true;
        for (var i = 0; i < length; i++) {
            var char = str.charAt(i);
            translation += capitalize ? char.toUpperCase() : char.toLowerCase();
            capitalize = !capitalize;
        }

        return translation;
    };

    if (str == reverse(str)) {
        return minMay(str);
    }

    return translation;
}