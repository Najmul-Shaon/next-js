import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div>
      <h1>404||Not found</h1>
      <Link href="/" className="btn btn-primary">
        Go Back To Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
