//Calificacion 4/5
//Uriel Cardoso Ortiz --> Competente identifico las reglas y las mejores practicas para resolver el ejercicio 
//Oswaldo Ivan Zarza Morales --> Colaboro para la mejora ortografica dada la retroalimentacion entre ambos
package main;

public class LiveCoding4 {
    //Creamos un metodo para imprimir los numeros del 1 al 100 segun las reglas proporcionadas anteriormente
    public static void imprimir() {
        // A continuacion hicimos un Bucle para iterar del 1 al 100
        for (int i = 1; i <= 100; i++) {
            // Despues verificamos  si el número es múltiplo de 3 y de 5
            if (i % 3 == 0 && i % 5 == 0) {
                // Imprimimos "FizzBuzz" en lugar del número
                System.out.println("FizzBuzz");
            } else if (i % 3 == 0) {
                // Imprimimos "Fizz" en lugar del número si es múltiplo de 3
                System.out.println("Fizz");
            } else if (i % 5 == 0) {
                // Imprimimos "Buzz" en lugar del número si es múltiplo de 5
                System.out.println("Buzz");
            } else {
                // Imprimimos el número si no es múltiplo de 3 ni de 5
                System.out.println(i);
            }
        }
    }

    public static void main(String[] args) {
        // Aqui creamos un objeto de la clase LiveCoding4
        LiveCoding4 liveCoding4 = new LiveCoding4();
        // y por ultimo llamamos al método imprimir para ejecutar el programa
        liveCoding4.imprimir();
    }
}
