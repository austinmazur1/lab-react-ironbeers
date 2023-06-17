import { useEffect, useState } from "react"
import BeerCard from "../components/BeerCard"
import Header from "../components/Header"

const AllBeers = () => {
  const [beers, setBeers] = useState([])

  useEffect(() => {
    const getBeers = async () => {
      const res = await fetch ("https://ih-beers-api2.herokuapp.com/beers")
      const data = await res.json();
      console.log(data)
      setBeers(data)
    }
    getBeers();
  }, [])


  return (
    <div>
      <Header />
      <BeerCard beers={beers}/>
    </div>
  )
}

export default AllBeers
