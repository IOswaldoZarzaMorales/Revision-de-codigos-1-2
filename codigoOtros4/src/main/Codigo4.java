// Calificacion 4/5
//Ana Karen Morales Ramos
//Oswaldo Ivan Zarza Morales
package main;
import java.util.Scanner; // Necesitas importar la clase Scanner

public class Codigo4 {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in); // Necesitas proporcionar System.in como argumento al constructor de Scanner

        System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
        String j1 = s.nextLine();

        System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): ");
        Scanner s2 = new Scanner(System.in); // Debes crear un nuevo Scanner para el jugador 2
        String j2 = s2.nextLine();

        if (j1.equals(j2)) { // Utiliza equals() para comparar cadenas en lugar de ==
            System.out.println("Empate");
        } else {
            int g = 2;
            switch (j1) {
                case "piedra":
                    if (j2.equals("tijeras")) {
                        g = 1;
                    }
                    break; // Debes añadir un break para salir del switch después de una coincidencia

                case "papel":
                    if (j2.equals("piedra")) {
                        g = 1;
                    }
                    break;

                case "tijeras":
                    if (j2.equals("papel")) {
                        g = 1;
                    }
                    break;

                default:
                    break; // Agrega un break para el caso por defecto
            }
            System.out.println("Gana el jugador " + g);
        }
    }
}
