import { useLoaderData, Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import Wrapper from '../assets/wrappers/CocktailPage';
import ErrorWrapper from '../assets/wrappers/ErrorPage';
import sth from '../assets/sth-wrong.svg';
import beverage from '../assets/beverage.svg';
import wine from '../assets/beer.svg';
import { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa6';
import { PiWineLight } from 'react-icons/pi';
import { useQuery } from '@tanstack/react-query';

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const singleCocktailQuery = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(singleCocktailQuery(id));
    return { id };
  };

const Cocktail = () => {
  const { id } = useLoaderData();
  const [isChecked, setIsChecked] = useState({});

  const { data } = useQuery(singleCocktailQuery(id));
  if (!data) return <Navigate to='/' />;

  useEffect(() => {
    const savedState = localStorage.getItem('ingredients');
    if (savedState) {
      setIsChecked(JSON.parse(savedState));
    }
  }, []);

  const toggle = (id) => {
    setIsChecked((prevState) => {
      const updatedState = {
        ...prevState,
        [id]: !prevState[id],
      };
      localStorage.setItem('ingredients', JSON.stringify(updatedState));
      return updatedState;
    });
    console.log(isChecked);
  };

  if (!data) {
    return (
      <ErrorWrapper style={{ padding: '0 2rem 25rem 2rem' }}>
        <img src={sth} alt='something went wrong' className='img' />
        <h3>Ohh!</h3>
        <p>We can't seem to find a page you're looking for.</p>
        <Link to='/' className='btn'>
          home page
        </Link>
      </ErrorWrapper>
    );
  }

  const singleDrink = data.drinks[0];
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  const ingredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith('strIngredient') && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key]);

  const measures = Object.keys(singleDrink)
    .filter((key) => key.startsWith('strMeasure') && singleDrink[key] !== null)
    .map((key) => singleDrink[key]);

  let paired = [];

  for (let i = 0; i < ingredients.length; i++) {
    const pair = [`${measures[i]} - `, ingredients[i]];
    paired.push(pair);
  }

  return (
    <Wrapper>
      <header>
        {info === 'Alcoholic' ? (
          <img src={wine} alt='alcoholic' className='icon' />
        ) : (
          <img src={beverage} alt='non-alcoholic' className='icon' />
        )}
        <h2 style={{ fontWeight: 700, color: 'var(--primary-500)' }}>{name}</h2>
      </header>
      <hr />
      <div className='drink'>
        <img src={image} alt={name} className='img' />
        <div className='drink-info'>
          <div className='drink'>
            <span className='drink-data'>category:</span>
            <p>{category}</p>
          </div>
          <div className='drink'>
            <span className='drink-data'>info:</span>
            <p> {info}</p>
          </div>
          <div className='drink'>
            <span className='drink-data'>glass:</span>
            <p>{glass}</p>
          </div>
          <div className='drink'>
            <span className='drink-data'>ingredients:</span>
            <ul>
              {paired.map((ingredient, index) => {
                return (
                  <li key={ingredient} className='ing'>
                    {isChecked[ingredient] && (
                      <label htmlFor={ingredient}>
                        <PiWineLight
                          style={{
                            zIndex: 5,
                            color: 'var(--primary-700)',
                            width: '1.5rem',
                            height: '1.5rem',
                            padding: '2px',
                          }}
                        />
                      </label>
                    )}

                    <input
                      type='checkbox'
                      id={ingredient}
                      checked={isChecked[ingredient] || false}
                      value={isChecked}
                      onChange={() => toggle(ingredient)}
                    />

                    {ingredient}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='drink'>
            <span className='drink-data'>instructions:</span>
            <p>{instructions}</p>
          </div>
        </div>
      </div>
      <hr />
      <header style={{ justifyContent: 'center' }}>
        <Link to='/' className='btn'>
          back home
        </Link>
      </header>
    </Wrapper>
  );
};
export default Cocktail;
