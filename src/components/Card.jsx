const Card = ({ img, title, description }) => {
  return (
    <div className="space-y-1 my-4">
      <img className="w-auto" src={img} alt="beer" />
      <h2 className="text-2xl font-normal">{title}</h2>
      <p className="font-extralight text-xs">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima ab
        eveniet vero laboriosam quae inventore omnis sapiente ratione ex vitae.
      </p>
    </div>
  );
};

export default Card;
