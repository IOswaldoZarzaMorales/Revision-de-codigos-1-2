package main;
//(4/5)
// Oswald resolvio el ejercicio, entendio y comento el codigo
// que realizo en tiempo y formas

public class MangosNaranjas {
    private int mangos;
    private int naranjas;

    public MangosNaranjas(int mangos, int naranjas) {
        this.mangos = mangos;
        this.naranjas = naranjas;
    }

    public void imprimir() {
        int minFrutas = Math.min(mangos, naranjas);
        int numCajas = 1;

        for (int i = 2; i <= minFrutas; i++) {
            if (mangos % i == 0 && naranjas % i == 0) {
                numCajas = i;
            }
        }

        int mangosPorCaja = mangos / numCajas;
        int naranjasPorCaja = naranjas / numCajas;

        System.out.println("El numero de cajas es: " + numCajas);
        System.out.println("El numero de mangos en una caja es: " + mangosPorCaja);
        System.out.println("El numero de naranjas en una caja es: " + naranjasPorCaja);
    }
}


