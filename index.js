import axios from "axios";
import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {

        const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        res.render("index.ejs", { 
            drink: result.data.drinks[0].strDrink,
            img: result.data.drinks[0].strDrinkThumb,
            instructions: result.data.drinks[0].strInstructions,
            ingredients: [result.data.drinks[0].strIngredient1, result.data.drinks[0].strIngredient2, result.data.drinks[0].strIngredient3, result.data.drinks[0].strIngredient4, result.data.drinks[0].strIngredient5, result.data.drinks[0].strIngredient6, result.data.drinks[0].strIngredient7, result.data.drinks[0].strIngredient8, result.data.drinks[0].strIngredient9, result.data.drinks[0].strIngredient10],
        });
    } catch (error) {
        console.error("Error fetching drink:", error.message);
        res.render("index.ejs",);
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
