import { MealInfo } from "@types/mealClass";

async function fetchMeals() {
  try {
    const response = await fetch(
      "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals"
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    return data.map(
      (item) =>
        new MealInfo(
          item.id,
          item.meal,
          item.category,
          item.area,
          item.instructions,
          item.img,
          item.price
        )
    );
  } catch (error) {
    console.error("Error occurred while fetching data:", error.message);
    return [];
  }
}

export { fetchMeals };
