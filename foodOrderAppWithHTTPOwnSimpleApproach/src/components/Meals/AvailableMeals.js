import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import useHttp from '../../hooks/use-http';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {

  const {
    isLoading,
    error,
    sendRequest
  } = useHttp();

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    sendRequest("https://react-http-e35a5-default-rtdb.europe-west1.firebasedatabase.app/meals.json", (data) => {
      
      const dataTransformed = Object.entries(data).map(object => {
        return {
          id: object[0],
          ...object[1]
        }
      })

      setMeals(dataTransformed);
    })
  }, [sendRequest]);

  const mealsList = meals.map((meal) => {
    return <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />;
  });

  const listOrError = error !== null ? <p>ERROR</p> : <ul>{mealsList}</ul>
  const loadingOrResult = isLoading ? <p>Loading Data ...</p> : listOrError

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{loadingOrResult}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
