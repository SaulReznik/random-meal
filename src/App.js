import React from 'react';

import Header from './components/Header';
import AdditionalInfo from './components/AdditionalInfo';
import Instructions from './components/Instructions';
import VideoSection from './components/VideoSection';

import './App.css';

const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

const loading = <h1>Loading</h1>;

export default class App extends React.Component {
  state = {
    isLoading: true
  };

  //Getting our data and storing it in state
  getMeal = () => {
    fetch(URL)
      .then(res => res.json())
      .then(json => json.meals[0])
      .then(meal => {
        const {
          strMeal: name,
          strInstructions: instructions,
          strCategory: category,
          strArea: area,
          strMealThumb: image,
          strYoutube: video,
        } = meal;

        // Our number of ingredients and measures are equal
        // And each index of measures is the same for it's ingredient
        // So we can sort it in the object: ingredients as a keys and measures as a value
        const ingredients = {};

        for(let i = 1; i <= 20; i++){
          if(`${meal[`strIngredient${i}`]}`) {
            ingredients[`${meal[`strIngredient${i}`]}`] = `${meal[`strMeasure${i}`]}`
          }
        }

        this.setState({
          name,
          instructions,
          category,
          area,
          ingredients,
          image,
          video,
          isLoading: false
        })
      })
  }

  render() {
    const {
      name,
      instructions,
      category,
      area,
      image,
      ingredients,
      video,
      isLoading
    } = this.state;
    
    return (
      <div className="App">
        <Header 
          getMeal={this.getMeal} 
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
    );
  }
}

