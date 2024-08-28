export async function getAllRecipes(req, res) {
    try {
      const recipes = await req.db.collection("recipes").find({}).toArray();
      res.status(200).json(recipes);
    } catch (error) {
      res.status(500).json({ message: "Error fetching recipes", error });
    }
  }
  
  export async function createRecipe(req, res) {
    try {
      const { title, description, preparation, ingredients, nutritionalValues } =
        req.body;
  
      if (!title || !description) {
        return res
          .status(400)
          .json({ message: "Title and description are required" });
      }
  
      // Crear el objeto de la receta con la 
      const newRecipe = {
        title,
        description,
        preparation: {
          ingredients, 
          cooking,
          total,
        },
        ingredients: ingredients 
          .split(",")
          .map((ingredient) => ingredient.trim()), // Convertir a una lista de ingredientes
        nutritionalValues: {
          calories,
          carbohydrates,
          protein,
          fat,
        },
      };

      const result = await req.db.collection("recipes").insertOne(newRecipe);
  
      // Retorna el objeto creado junto con el ID insertado
      res.status(201).json({
        _id: result.insertedId,
        ...newRecipe,
      });
    } catch (error) {
      console.error("Error creating recipe:", error);
      res.status(500).json({ message: "Error creating recipe", error });
    }
  }
  
  export async function updateRecipe(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;
  
      const result = await req.db
        .collection("recipes")
        .updateOne({ _id: new ObjectId(id) }, { $set: updateData });
  
      if (result.matchedCount === 0) {
        return res.status(404).json({ message: "Recipe not found" });
      }
  
      res.status(200).json({ message: "Recipe updated successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error updating recipe", error });
    }
  }
  
  export async function deleteRecipe(req, res) {
    try {
      const { id } = req.params;
      const result = await req.db
        .collection("recipes")
        .deleteOne({ _id: new ObjectId(id) });
  
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: "Recipe not found" });
      }
  
      res.status(200).json({ message: "Recipe deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting recipe", error });
    }
  }
  