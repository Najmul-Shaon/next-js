import Link from "next/link";

const Service = () => {
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

  return (
    <div>
      <h3>Service page</h3>
      <div className="flex flex-wrap gap-6 justify-center">
        {data.map((item, index) => (
          <div className="card w-80 bg-base-100 shadow-xl">
            <Link href={`/service/${item?.id}`}>
              <figure>
                <img
                  src={item?.image}
                  alt={item?.title}
                  className="h-48 w-full object-cover"
                />
              </figure>
            </Link>
            <div className="card-body">
              <h2 className="card-title">{item?.title}</h2>
              <p>{item?.details}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
