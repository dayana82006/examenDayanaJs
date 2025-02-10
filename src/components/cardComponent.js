class CardComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
  
     
      this.shadowRoot.innerHTML = `
        <style>
          .card {text-align: center;
            width: auto;
            background-color: #081338 !important;
            margin: 5px;
            color: rgb(241, 216, 183) !important;
            box-shadow: 2px 2px 5px 2px rgb(12, 11, 11);
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            background-color: #081338 !important;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 16px;
            margin: 8px;
            text-align: center;
          }
          .card h5 {
            font-size: 1.2rem;
            margin: 8px 0;
          }
          .card p {
            font-size: 1rem;
            margin: 8px 0;
          }
          .card button {
            background-color: #9892CF;
            color: #fff;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            margin: 4px;
          }
          .card button:hover {
            background-color: #0056b3;
          }
        </style>
        <div class="card">
          <h5 class="card-title"></h5>
          <p class="card-text"></p>
          <button class="edit-btn">Editar</button>
          <button class="delete-btn">Eliminar</button>
        </div>
      `;
    }
  
    static get observedAttributes() {
      return ["data-id", "data-name", "data-origen"];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === "data-name") {
        this.shadowRoot.querySelector(".card-title").textContent = newValue;
      }
      if (name === "data-origen") {
        this.shadowRoot.querySelector(".card-text").textContent = newValue;
      }
    }
  
    connectedCallback() {
      const id = this.getAttribute("data-id");
  
      this.shadowRoot.querySelector(".delete-btn").addEventListener("click", () => {
        this.dispatchEvent(new CustomEvent("delete-card", { detail: { id }, bubbles: true }));
      });
  
      this.shadowRoot.querySelector(".edit-btn").addEventListener("click", () => {
        const name = this.getAttribute("data-name");
        const origen = this.getAttribute("data-origen");
        this.dispatchEvent(
          new CustomEvent("edit-card", { detail: { id, name, origen }, bubbles: true })
        );
      });
    }
  }
  
  customElements.define("card-component", CardComponent);
  