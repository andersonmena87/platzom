#Platzom

Platzom es un idioma inventado para el curso de fundamentos de de javascript de platzi.

## Descripción del idioma

-Si la palabra termina en "ar", se le quitan esos dos caracteres al final

-Si la palabra inicia con Z, se le añade "pe" al final

-Si la palabra traducida tiene 10 o mas letras, se debe partir a la mitad y unir con un guión del medio

-Por último, si la palabra original es un palíndromo, ninguna regla anteriror cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas

## Instalación



```
npm install platzom
```

## Uso

```
import platzom form 'platzom'

platzom("Programar") // program
platzom("Zorro") // zorrope
platzom("Zarpar") // zarppe
platzom("abecedario") // abece-dario
platzom("sometemos") // SoMeTeMoS
```

## Créditos
- [Anderson Mena]

## Licencia

[MIT](https://opensource.org/licenses/MIT)

