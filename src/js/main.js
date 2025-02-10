import { getItems, createItem, updateItem, deleteItem } from "./api.js";
import "../components/cardComponent.js";

const card= document.getElementById("card");


// Cargar ítems al inicio
document.addEventListener("DOMContentLoaded", loadItems);

async function loadItems() {
  itemList.innerHTML = ""; // Limpiar lista
  const items = await getItems();
  items.forEach((item) => addItemToDOM(item));
}

// Agregar ítem al DOM
function addItemToDOM(superh) {
  const itemElement = document.createElement("item-component");
  itemElement.setAttribute("data-id", superh.id);
  itemElement.setAttribute("data-name", superh.name);
  itemElement.setAttribute("data-origen", superh.origen)

  itemElement.addEventListener("edit-item", (e) => {
    const { id, name, description } = e.detail;
    inputId.value = id;
    inputName.value = name;
    inputDescription.value = description;
  });

  itemElement.addEventListener("delete-item", async (e) => {
    const { id } = e.detail;
    await deleteItem(id);
    loadItems();
  });

  itemList.appendChild(itemElement);
}

