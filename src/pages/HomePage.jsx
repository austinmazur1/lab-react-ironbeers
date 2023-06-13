import beersImage from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";
import Card from "../components/Card";

const HomePage = () => {
  return (
    <div className="m-2 flex flex-col items-center">
      <Card title={"All Beers"} img={beersImage} />
      <Card title={"Random Beer"} img={randomBeer} />
      <Card title={"New Beer"} img={newBeer} />
    </div>
  );
};

export default HomePage;
