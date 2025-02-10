const API_URL = "http://localhost:3000/cards"; 
async function request(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function getcards() {
  return request(API_URL);
}

export async function createcard(card) {
  return request(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(card),
  });
}

export async function updatecard(id, card) {
  return request(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(card),
  });
}

export async function deletecard(id) {
  return request(`${API_URL}/${id}`, {
    method: "DELETE",
  });
}
