// PATRON DE DISEÑO VISITOR

/*
* Consideremos la posibilidad de que alguien visite Dubai. Solo se necesita una forma (es decir, una visa) para ingresar
* a Dubai. Después de su llegada, puede venir y visitar cualquier lugar en Dubai por su cuenta sin tener que pedir
* permiso o tener que caminar, solo tiene que hacer saber el lugar y puede visitarlo.
*
* El patrón de visitante te permite hacer eso, te ayuda a agregar lugares de visita para que alguien pueda
* visitar todo lo que pueda sin tener que hacer ningún trabajo de piernas.
*
*
* En otras palabras el patron de diseño visitante nos permite agregar más operaciones a los objetos sin tener que modificarlos.
* */


/* EJEMPLO DEL PATRON DE DISEÑO
*
* Tomemos un ejemplo de una simulación de un zoológico donde tenemos diferentes tipos de animales y tenemos que hacer
* que hagan un sonido.
*
* */


// Implementacion de las clases de animales

class Monkey {
    shout() {
        console.log('Ooh oo aa aa!')
    }

    accept(operation) {
        operation.visitMonkey(this)
    }
}

class Lion {
    roar() {
        console.log('Roaaar!')
    }

    accept(operation) {
        operation.visitLion(this)
    }
}

class Dolphin {
    speak() {
        console.log('Tuut tuttu tuutt!')
    }

    accept(operation) {
        operation.visitDolphin(this)
    }
}

// Implementacion del patron de diseño VISITOR

const speak = {
    visitMonkey(monkey){
        monkey.shout()
    },
    visitLion(lion){
        lion.roar()
    },
    visitDolphin(dolphin){
        dolphin.speak()
    }
}

// Uso del patron de diseño

const monkey = new Monkey()
const lion = new Lion()
const dolphin = new Dolphin()

monkey.accept(speak)    // Ooh oo aa aa!
lion.accept(speak)      // Roaaar!
dolphin.accept(speak)   // Tuut tutt tuutt!

console.log("--------------------")


/*
* Se pordia haber hecho simplemente teniendo una jerarquía de herencia para los animales, pero luego tendríamos que
* modificar los animales cada vez que tengamos que agregar nuevas acciones. Pero ahora no tendremos que cambiarlos.
*
* Por ejemplo, digamos que se nos pide que agreguemos el comportamiento de salto a los animales, simplemente podemos
* agregarlo creando un nuevo visitante, es decir:
* */

const jump = {
    visitMonkey(monkey) {
        console.log('Jumped 20 feet high! on to the tree!')
    },
    visitLion(lion) {
        console.log('Jumped 7 feet! Back on the ground!')
    },
    visitDolphin(dolphin) {
        console.log('Walked on water a little and disappeared')
    }
}

// Uso del patron de diseño

console.log("MONKEY")
monkey.accept(speak)   // Ooh oo aa aa!
monkey.accept(jump)    // Jumped 20 feet high! on to the tree!

console.log("--------------------")

console.log("LION")
lion.accept(speak)     // Roaaar!
lion.accept(jump)      // Jumped 7 feet! Back on the ground!

console.log("--------------------")

console.log("DOLPHIN")
dolphin.accept(speak)  // Tuut tutt tuutt!
dolphin.accept(jump)   // Walked on water a little and disappeared

console.log("--------------------")