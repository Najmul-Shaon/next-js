const ServiceDetails = ({ params }) => {
  const id = params.id;
  return (
    <div>
      <h3>Service details</h3>
      <p>{id}</p>
    </div>
  );
};

export default ServiceDetails;
