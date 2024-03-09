# Real Estate Care Inspectie Dashboard

Welkom bij het Real Estate Care Inspectie Dashboard project! Deze webapplicatie is gebouwd met Vue.js en dient als een dashboard voor het beheren van inspecties. Het bevat functies zoals het weergeven van een lijst met inspecties, het sorteren ervan op datum en het verstrekken van gedetailleerde informatie over elke inspectie.

## Aan de slag

### Vereisten

Zorg ervoor dat Node.js en npm geïnstalleerd zijn op je machine.

### Installatie

Clone de repository:
   git clone https://github.com/Thaiseboy/VueProject.git

### Projectstructuur

* components: Bevat Vue.js-componenten.
* services: Inclusief de API-service (apiService.js).
* models: Bevat het datamodel (InspectionModel.js).
* assets: Bevat assets die in het project worden gebruikt.

### Gebruik

Start de ontwikkelingsserver:
**npm run serve**
Bezoek **http://localhost:8080** in je browser om de applicatie te bekijken.

### API-service
De applicatie haalt inspectiegegevens op van een web API met behulp van Axios. De API-service bevindt zich in services/apiService.js.

### Datamodel
Het datamodel (models/InspectionModel.js) wordt gebruikt om inspectiegegevens te structureren en te vertegenwoordigen binnen de applicatie.

### Componenten
**HomePage.vue:** Hoofdcomponent dat de dashboardcomponenten integreert.
**DashBoard.vue:** Lay-out van het dashboard met een werkbalk en dynamische inhoud.
**InspectionList.vue:** Component voor het weergeven van een gesorteerde lijst met inspecties.
**ToolBar.vue:** Werkbalkcomponent voor het beheren van tabbladen.
**KopTekst.vue:** Component voor het weergeven van de applicatiekop.