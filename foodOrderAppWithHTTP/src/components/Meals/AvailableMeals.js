import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch('https://react-http-e35a5-default-rtdb.europe-west1.firebasedatabase.app/meals.json');

      if (!response.ok) {
        throw new Error('Something went wrong!')
      }

      const responseData = await response.json();
      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          ...responseData[key]
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    }
    fetchMeals().catch(err => {
      setIsLoading(false);
      setError(err);
    });


  }, [])

  if (isLoading) {
    return <section className={classes.MealsLoading}>
      <p>Loading...</p>
    </section>
  }

  if (error) {
    return <section className={classes.MealsError}>
      <p>Error...</p>
    </section>
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
