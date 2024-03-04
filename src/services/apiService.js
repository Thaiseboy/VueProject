// Services/apiService.js

// Importeer de Axios-bibliotheek voor het uitvoeren van HTTP-verzoeken
import axios from 'axios';

// Definieer de URL van de API waar inspectiegegevens worden opgehaald
const apiUrl = 'data/rapportages.JSON';

// Functie om inspectiegegevens op te halen via een HTTP GET-verzoek
export const fetchInspections = () => {
  // Retourneer een nieuwe Promise om asynchrone verwerking mogelijk te maken
  return new Promise((resolve, reject) => {
    // Voer een HTTP GET-verzoek uit naar de opgegeven API-URL
    axios.get(apiUrl)
      .then(response => {
        // Controleer of de respons een geldige gegevensindeling heeft
        if (response.data) {
          // Resolveer de Promise met de ontvangen inspectiegegevens
          resolve(response.data);
        } else {
          // Toon een foutmelding als de respons een ongeldige indeling heeft
          console.error('Ongeldige responsindeling:', response);
          reject('Ongeldige responsindeling');
        }
      })
      .catch(error => {
        // Toon een foutmelding als er een fout optreedt bij het ophalen van inspectiegegevens
        console.error('Fout bij het ophalen van inspectiegegevens:', error);
        reject(error);
      });
  });
};
