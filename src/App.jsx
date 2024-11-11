import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [totalStrength, setTotalStrength]=useState(0)
const [totalAgility, setTotalAgility]=useState(0)
const [team, setTeam]= useState([]);
const [money,setMoney]= useState(100);
const[zombieFighters, setZombieFighters]=useState([
  {
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://via.placeholder.com/150/92c952',
  },
  {
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://via.placeholder.com/150/771796',
  },
  {
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://via.placeholder.com/150/24f355',
  },
  {
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/d32776',
  },
  {
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://via.placeholder.com/150/1ee8a4',
  },
  {
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://via.placeholder.com/150/66b7d2',
  },
  {
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://via.placeholder.com/150/56acb2',
  },
  {
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://via.placeholder.com/150/8985dc',
  },
  {
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://via.placeholder.com/150/392537',
  },
  {
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/602b9e',
  },
]);

const sumOfStrength= (team)=>{
  return team.reduce((acc,fighter)=> acc + fighter.strength, 0)
}
const sumOfAgility= (team)=>{
  return team.reduce((acc,fighter)=> acc + fighter.agility, 0)
}
const handleAddFighter = (fighter)=>{
if(money >= fighter.price){
  const newTeam = [...team, fighter]
  setTeam(newTeam);
  const updatedZombieFighter = zombieFighters.filter((zombieFighter)=> zombieFighter !== fighter)//takes out the one you clicked on
  setZombieFighters(updatedZombieFighter)
  setMoney(money - fighter.price);
  setTotalStrength(sumOfStrength(newTeam))
  setTotalAgility(sumOfAgility(newTeam))



}

else{
  console.log("Not enough money!")
}


}

const handleRemoveFighter = (fighter)=>{
  
  const indexOfRemovedFighter = team.findIndex((element)=> element=== fighter) ;
if(indexOfRemovedFighter !== -1){
  const newTeam= [...team]//removing fighter
  newTeam.splice(indexOfRemovedFighter,1)//removes fighter
  setTeam(newTeam)
  const updatedZombieFighters = [...zombieFighters, fighter]
  setZombieFighters(updatedZombieFighters)
  setMoney(money + fighter.price);
  setTotalStrength(sumOfStrength(newTeam))
  setTotalAgility(sumOfAgility(newTeam))
}
  
  


}



  return (
    <>
     <h2>Money: {money} </h2> 
     <h2>Total Strength: {totalStrength}</h2>
     <h2>Total Agility: {totalAgility} </h2>
      {zombieFighters.map((zombieFighter, index)=> (
        <ul key={index}>
          <li >
            <img src={zombieFighter.img}></img>
            <p>Name: {zombieFighter.name}</p>
            <p>Price: {zombieFighter.price}</p>
            <p>Strength: {zombieFighter.strength}</p>
            <p>Agility: {zombieFighter.agility}</p>
            <button onClick={()=>handleAddFighter(zombieFighter)}>Add</button>
          </li>

        </ul>
      )

      )}
      <h2>Your Team!</h2>

       {team.length > 0 ?  (
          team.map((t, index)=>(
            <ul key={index}>
              <li >
                <img src={t.img}></img>
                <p>Name: {t.name}</p>
                <p>Price: {t.price}</p>
                <p>Strength: {t.strength}</p>
                <p>Agility: {t.agility}</p>
                <button onClick={()=>handleRemoveFighter(t)}>Remove</button>

              </li>
            </ul>
          )))
        : (<li>Pick some team members!</li>) }
      

     

      
    </>
  )
}

export default App
