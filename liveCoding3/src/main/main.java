package main;

import java.util.Scanner;

// Oswald resolvio el ejercicio, entendio y comento el codigo
// que realizo en tiempo y formas

public class main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese el número de mangos: ");
        int mangos = scanner.nextInt();

        System.out.print("Ingrese el número de naranjas: ");
        int naranjas = scanner.nextInt();

        MangosNaranjas cajas = new MangosNaranjas(mangos, naranjas);
        cajas.imprimir();

        scanner.close();
    }
}
