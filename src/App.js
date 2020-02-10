import React, { useState } from 'react';

import Header from './components/Header';
import AdditionalInfo from './components/AdditionalInfo';
import Instructions from './components/Instructions';
import VideoSection from './components/VideoSection';

import './App.css';

const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

const loading = <h1>Loading</h1>;

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('');
  const [instructions, setInstructions] = useState('');
  const [category, setCategory] = useState('');
  const [area, setArea] = useState('');
  const [image, setImage] = useState('');
  const [video, setVideo] = useState('');
  const [ingredients, setIngredients] = useState({});

  //Getting our data and storing it in state
  const getMeal = () => {
    fetch(URL)
      .then(res => res.json())
      .then(json => json.meals[0])
      .then(meal => {
        const {
          strMeal,
          strInstructions,
          strCategory,
          strArea,
          strMealThumb,
          strYoutube,
        } = meal;

        // Our number of ingredients and measures are equal
        // And each index of measures is the same for it's ingredient
        // So we can sort it in the object: ingredients as a keys and measures as a value
        const tempContainer = {};

        for (let i = 1; i <= 20; i++) {
          //filtering invalid values here
          if (!`${meal[`strIngredient${i}`]}` || 
              `${meal[`strIngredient${i}`]}` === ' ' || 
              `${meal[`strIngredient${i}`]}` === 'null' || 
              `${meal[`strMeasure${i}`]}` === 'null'){
            continue;
          }

          //If the measure is empty, then set it as 'at your look'
          //In other cases just add it to our state
          if (`${meal[`strMeasure${i}`]}` === '' || `${meal[`strMeasure${i}`]}` === ' '){
            tempContainer[`${meal[`strIngredient${i}`]}`] = `at your look`;
          } else {
            tempContainer[`${meal[`strIngredient${i}`]}`] = `${meal[`strMeasure${i}`]}`;
          }

        }

        setName(strMeal);
        setInstructions(strInstructions);
        setCategory(strCategory);
        setArea(strArea);
        setImage(strMealThumb);
        setVideo(strYoutube);
        setIngredients(tempContainer)
        setIsLoading(false);
      })
  }

  return (
    <div className="App">
      <Header 
        getMeal={getMeal} 
      />

      { 
      isLoading ? loading :
      <>
        <div id='columns-container'>
          <AdditionalInfo
            image={image}
            category={category}
            area={area}
            ingredients={ingredients}
          />
          <Instructions
            name={name}
            instructions={instructions}
          />
        </div>

        <VideoSection 
          video={video}
        />
      </>
      }
    </div>
  )
}

