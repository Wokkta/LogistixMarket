import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <article>
      <h1>Sorry, your page is not found</h1>
      <span>Check your gateway </span>
      <div>
        <Link to="/">Go to main page</Link>
      </div>
    </article>
  );
}

export default NotFound;
