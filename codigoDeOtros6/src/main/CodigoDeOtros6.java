//Calificacion 4/5
//Uriel Cardoso Ortiz --> Encontro errores de sintaxix y ayudo a la solucion de este jercicio
//Oswaldo Ivan Zarza Morales --> Colaboro para la mejora ortografica dada la retroalimentacion entre ambos
package main;
public class CodigoDeOtros6 {
  
    public static void main(String[] args) {
        int[] n = new int[20];

        for (int i = 0; i < 20; i++) {
            n[i] = (int)(Math.random() * 381) + 20;
            System.out.print(n[i] + " ");
        }

        System.out.println("\n¿Qué números quiere resaltar? ");
        System.out.print("(1 – los múltiplos de 5, 2 – los múltiplos de 7): ");
        int opcion = Integer.parseInt(System.console().readLine());

        int multiplo = (opcion == 1) ? 5 : 7;

        for (int e : n) {
            if (e % multiplo == 0) {
                System.out.print("[" + e + "] ");
            } else {
                System.out.print(e + " ");
            }
        }
    }
}