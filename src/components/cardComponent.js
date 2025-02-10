
const API_URL = 'http://localhost:3000/superh'
class CardComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.loadCards();
        this.render();
    }

 

    render() {
        const id = this.getAttribute("data-id");
        const name = this.getAttribute("data-name");
        const origen = this.getAttribute("data-origen");
        const poderes = this.getAttribute("data-poderes");
        const habilidades = this.getAttribute("data-habilidades");
        const historia = this.getAttribute("data-historia");
        const imagen = this.getAttribute("data-imagen");
        const apariciones = this.getAttribute("data-apariciones");

        this.shadowRoot.innerHTML = `
        <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #1c2030 !important;
            margin: 0;
            padding: 0;
            box-sizing: content-box;
          }
         .card-custom{
          text-align: center;
          background-color: #081338 !important;
          margin: 5px;
          color: rgb(241, 216, 183) !important;
          box-shadow: 2px 2px 5px 2px rgb(12, 11, 11);
         }
        
         .btn-custom{
          background-color: #555558a1 !important;
          color: rgb(255, 136, 24) !important;
         }
      </style>
            <div class="container-md"> 
                <div class="row">
                    <div class="col-md-4">
                        <div class="card card-custom" style="width: 20rem;">
                            <img src="${imagen}" class="card-img-top" alt="${name}">
                            <div class="card-body">
                                <h5 class="card-title">${name}</h5>
                                <p class="card-text">${historia}</p>
                                <p class="card-text">Origen: ${origen}</p>
                                <p class="card-text">Poderes: ${poderes}</p>
                                <p class="card-text">Habilidades: ${habilidades}</p>
                                <p class="card-text">Apariciones: ${apariciones}</p>
                            </div>
                            <div>
                                <button class="edit">Editar</button>
                                <button class="delete">Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.shadowRoot.querySelector(".edit").addEventListener("click", () => {
            this.dispatchEvent(
                new CustomEvent("edit-item", { detail: { id, name, historia } })
            );
        });

        this.shadowRoot.querySelector(".delete").addEventListener("click", () => {
            this.dispatchEvent(new CustomEvent("delete-item", { detail: { id } }));
        });
    }


}

customElements.define("card-component", CardComponent);