import Image from "next/image";
import { Clock, Flame } from "lucide-react";

interface Recipe {
  id: number;
  title: string;
  image: string;
  macros: string;
  timing: string;
  category: "Fat Loss" | "Muscle Building";
  ingredients: string[];
  preparation: string[];
  tips?: string;
  calories?: string;
  protein?: string;
  carbs?: string;
  fats?: string;
}

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Recipe Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${
            recipe.category === "Fat Loss" 
              ? "bg-gradient-to-r from-orange-500 to-red-600" 
              : "bg-gradient-to-r from-orange-600 to-red-700"
          }`}>
            {recipe.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-3">{recipe.title}</h3>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="size-4" />
            <span>{recipe.timing}</span>
          </div>
          <div className="flex items-center gap-1">
            <Flame className="size-4" />
            <span>{recipe.macros}</span>
          </div>
        </div>

        {/* Macro Breakdown */}
        {(recipe.calories || recipe.protein || recipe.carbs || recipe.fats) && (
          <div className="grid grid-cols-2 gap-2 mb-4 p-3 bg-gray-50 rounded-lg">
            {recipe.calories && (
              <div className="text-sm">
                <span className="text-gray-500">Calories:</span>
                <span className="ml-1 font-medium">{recipe.calories}</span>
              </div>
            )}
            {recipe.protein && (
              <div className="text-sm">
                <span className="text-gray-500">Protein:</span>
                <span className="ml-1 font-medium">{recipe.protein}</span>
              </div>
            )}
            {recipe.carbs && (
              <div className="text-sm">
                <span className="text-gray-500">Carbs:</span>
                <span className="ml-1 font-medium">{recipe.carbs}</span>
              </div>
            )}
            {recipe.fats && (
              <div className="text-sm">
                <span className="text-gray-500">Fats:</span>
                <span className="ml-1 font-medium">{recipe.fats}</span>
              </div>
            )}
          </div>
        )}

        {/* Ingredients */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Ingredients:</h4>
          <ul className="space-y-1">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        {/* Preparation */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">How to Prepare:</h4>
          <ol className="space-y-2">
            {recipe.preparation.map((step, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <span className="font-semibold text-orange-600 mr-2 min-w-[20px]">
                  {index + 1}.
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Tips */}
        {recipe.tips && (
          <div className="mt-4 p-3 bg-amber-50 border-l-4 border-amber-400 rounded">
            <p className="text-sm">
              <span className="font-semibold text-amber-800">💡 Pro Tip: </span>
              <span className="text-amber-900">{recipe.tips}</span>
            </p>
          </div>
        )}
      </div>
    </article>
  );
}
