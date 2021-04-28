import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import './App.css';

function App() {
  const [people, setPeople] = useState([])
  const [planets, setPlanets] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/')
      let data = await res.json()
      setPeople(data.results)
    }
     async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/')
      let data = await res.json()
      setPlanets(data.results)
    }
    fetchPeople()
    fetchPlanets()

  }, [])
//console.log('data', people)
// console.log('people', people)
// console.log('planets', planets)

  return (
    <div className="App">
     <Navbar />
    </div>
  );
}

export default App;
