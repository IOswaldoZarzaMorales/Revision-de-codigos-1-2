//Calificacion 4/5
//Oswald Zarza Morales, compañero de equipo. Avanzado entendio el algoritmo y los errores al resolver. 
//Uriel cardoso ortiz Competente trate de resolver el ejercicio y ayudar.

package main;

import java.util.Scanner;//Importamos un scanner 

public class CodigoDeOtros5 {	
	public static void main(String[] args) {
        Scanner s = new Scanner(System.in); //Agregamos el System.in para que nuestros Scanner guerde 
        System.out.print("Introduzca un número: ");
        String ni = s.nextLine();
        int c = Integer.parseInt(ni);//Agregamos parseInt para convertir el String en un valor de tipo int-entero
        
        int afo = 0;
        int noAfo = 0;

        while (c > 0) {
            int digito = c % 10;
            if (digito == 3 || digito == 7 || digito == 8 || digito == 9) { //Se eliminan las comillas para que se itere de manera correcta 
                afo++;
            } else {
                noAfo++;
            }
            c /= 10;//se reemplaza ni por c para que siga la iteracion del ciclo
        }

        if (afo > noAfo) {
            System.out.println("El " + ni + " es un número afortunado.");//Se concateno ni en luga de c para que devolviera el valor de tipo String
        } else {
            System.out.println("El " + ni + " no es un número afortunado.");
        }
   }
}