/**
 * Created by amena on 25/05/2017.
 */

 export default function platzom (str){
    let translation = str.toLocaleLowerCase();

    //Si la palabra termina en "ar", se le quitan esos dos caracteres al final;
    if(translation.endsWith("ar")){
        translation = translation.slice(0, -2);
    }

    //Si la palabra inicia con Z, se le añade "pe" al final
    if(translation.startsWith("z")){
        translation += "pe";
    }

    //Si la palabra traducida tiene 10 o mas letras,
    //Se debe partir a la mitad y unir con un guión del medio

    const length = translation.length;

    if(length >= 10){
        const firstHalf = translation.slice(0, Math.round(length / 2));
        const secondHalf = translation.slice(Math.round(length / 2));
        translation = `${firstHalf}-${secondHalf}`;
    }

    //Si la palabra original en un palindromo,
    //ninuguna regla anterior cuenta y se devuleve
    //la misma palabra intercalandolo mayúsculas y minusculas

    const reverse = (str) => str.split("").reverse().join("");
    const minMay = (str) => {
        const length = str.length;
        let translation = "";
        let capitalize = true;
        for(let i = 0; i < length; i++){
            const char = str.charAt(i);
            translation += capitalize ? char.toUpperCase() : char.toLowerCase();
            capitalize = !capitalize;
        }

        return translation;
    }


    if(str == reverse(str)){
        return minMay(str);
    }

    return translation;
}
