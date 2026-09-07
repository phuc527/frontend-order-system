const API_URL = "http://localhost:8000/api";

export async function searchProducts(keyword, category = "") {
  const params = new URLSearchParams();

  if (keyword) {
    params.append("q", keyword);
  }

  if (category) {
    params.append("category", category);
  }

  const response = await fetch(`${API_URL}/products/search?${params}`);

  if (!response.ok) {
    throw new Error("Failed to search products");
  }

  return response.json();
}
