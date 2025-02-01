const ServiceDetails = ({ params }) => {
  const data = [
    {
      id: 1,
      image: "https://i.ibb.co.com/sJ6wXBZ/a.jpg",
      title: "Modern Living Room",
      details:
        "A beautifully designed modern living room with natural light and minimalist furniture.",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/sJ6wXBZ/a.jpg",
      title: "Healthy Organic Food",
      details:
        "Fresh and organic vegetables and fruits arranged in a basket, promoting a healthy lifestyle.",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/sJ6wXBZ/a.jpg",
      title: "Cozy Barn House",
      details:
        "A stylish barn house surrounded by lush greenery, combining rustic charm with modern elegance.",
    },
    {
      id: 4,
      image: "https://i.ibb.co.com/sJ6wXBZ/a.jpg",
      title: "Technology Conference 2025",
      details:
        "An upcoming tech conference featuring industry leaders discussing AI, blockchain, and future innovations.",
    },
    {
      id: 5,
      image: "https://i.ibb.co.com/sJ6wXBZ/a.jpg",
      title: "Mountain Adventure",
      details:
        "A breathtaking view of a mountain peak with hikers enjoying the sunrise from the summit.",
    },
  ];
  const id = params.id;

  const singledata = data.find((d) => d.id == id);
  if (singledata) {
    return (
      <div>
        <h3>Service details</h3>
        <p>{id}</p>
        <img src={singledata?.image} alt="" />
      </div>
    );
  } else {
    return (
      <>
        <p>Serivce not found</p>
      </>
    );
  }
};

export default ServiceDetails;
