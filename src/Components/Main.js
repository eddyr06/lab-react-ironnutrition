import 'bulma/css/bulma.css';
import React, {useState} from 'react'
import {foodPlates} from '../Foods'
import '../App.css'
import FoodBox from './FoodBox'
import CreateFood from './CreateFood'; 



const Main = () => {
    const [foodsArr, setFoodArr] = useState(foodPlates)

    const addFood = (newFood) => {
        let newArr = [...foodsArr];
        console.log(newArr)
        newArr.concat(newFood);
        setFoodArr(newArr);
      };
    
    
    return (
        <div>
            <FoodBox name={foodPlates} />
            <CreateFood addFood={addFood}/>
        </div>
    )
}

export default Main;