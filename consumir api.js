import fetch from "node-fetch";
import open from "open";



async function mostrarGatito() {
    try {
        const res = await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await res.json();

        const urlGato = data[0].url;
        console.log("URL del gatito:", urlGato);

        // Abre la imagen en el navegador predeterminado
        await open(urlGato);
    } catch (err) {
        console.error("Error al obtener gatito:", err);
    }
}

mostrarGatito();