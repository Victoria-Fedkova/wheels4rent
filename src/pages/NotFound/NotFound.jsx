import cars from '../../assets/pngegg.png';

export default function NotFound() {
  return (
    <div>
      <h1>404 Page not found</h1>
      <img src={cars} alt="Page not found" />
    </div>
  );
}
