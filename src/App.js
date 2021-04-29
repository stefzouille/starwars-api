import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container, Dimmer, Loader } from 'semantic-ui-react'
import Home from './components/Home'
import People from './components/People'
import Planets from './components/Planets'


function App() {
  const [ setPeople] = useState([])
  const [ setPlanets] = useState([])
  //const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/?1')
      let data = await res.json()
      setPeople(data.results)
      setLoading(false)
      console.log(data)
    }
    
     async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/people/?1')
      let data = await res.json()
      setPlanets(data.results)
      setLoading(false)
    }
    fetchPeople()
    fetchPlanets()
    
  }, [])
//console.log('data', people)
// console.log('people', people)
// console.log('planets', planets)

  return (
    <>
      <Router>
        <Navbar />
        <Container>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted>loading</Loader>
            </Dimmer>
          ) : (
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/people'>
                <People  data={people}/>
              </Route>
              <Route exact path='/planets'>
                <Planets data={planets}/>
              </Route>
          </Switch>
          )}
          
        </Container>
     </Router>
    </>
  );
}

export default App;
