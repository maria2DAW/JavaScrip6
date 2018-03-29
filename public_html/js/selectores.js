//Me devuelve un array con todos los elementos de la etiqueta buscada3
document.getElementsByTagName('li'); 
document.getElementsByTagName('li').length;
document.getElementsByTagName('li')[3];

//Me devuelve un array con todos los elementos de la clase buscada
document.getElementsByClassName('course-list');
document.getElementsByClassName('course-list').length;

//Me devuelve un elemento con el id buscado
document.getElementById("li1");

//Me devuelve un array con todos los elementos con el name buscado
document.getElementsByName("input");
document.getElementsByName("input").length;
document.getElementsByName("input")[0];

//Estos métodos trabajan con navegadores modernos (cuidado con IE8 o inferior):

//Me devuelve un array con todos los elementos con el selector buscado.
//Si es un id, me devulelve el elemento que tenga dicho id.
//Si busco por clase, etiqueta o atributo, me devuelve el primer elemento del documento HTML.
document.querySelectorAll('claseLi');
document.querySelectorAll('li');
document.querySelectorAll('[href]');
document.querySelectorAll('#li2');
document.querySelectorAll('#li2')[0];

//Me devuelve un elemento con el selector buscado
document.querySelector('#li2');
document.querySelector('#li2').lengh; //Daría 'undefined' porque no es un array
document.querySelector('li');