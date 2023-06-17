const BeerCard = ({ beers }) => {
  return (
    <div>
      {beers.map((beer) => (
        <div key={beer._id} className="flex border border-black p-4 h-60">
          <div className="w-14 self-center">
            <img src={beer.image_url} alt={beer.name} className="h-1/2" />
          </div>
          <div className="flex flex-col justify-center gap-3 p-4">
            <h2 className="text-xl font-medium">{beer.name}</h2>
            <p className="text-gray-400 font-medium">{beer.tagline}</p>
            <p className="font-bold">{beer.contributed_by}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BeerCard;
