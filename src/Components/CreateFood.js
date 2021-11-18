import React from 'react'
import { foodPlates } from '../Foods'
import FoodBox from './FoodBox';

const CreateFood = (props) => {
  const [nameText, setNameText] = React.useState('');
  const [caloriesText, setCaloriesText] = React.useState('');
  const [imageText, setImageText] = React.useState('');

  const createNewFood = () => {
    const newFood = {
      name: nameText,
      calories: caloriesText,
      image: imageText,
    };

    //Pass this newly created TODO up to Main
    props.addFood(newFood);
  };

  return (
    <div className='create-food'>
      <h2>Create Food</h2>
      <input
        placeholder='Name'
        value={nameText}
        onChange={(e) => setNameText(e.target.value)}
      />
      <input
        placeholder='Calories'
        value={caloriesText}
        onChange={(e) => setCaloriesText(e.target.value)}
      />
      <input
        placeholder='Image'
        value={imageText}
        onChange={(e) => setImageText(e.target.value)}
      />
      <button onClick={createNewFood}>Add</button>
    </div>
  );
};

export default CreateFood;