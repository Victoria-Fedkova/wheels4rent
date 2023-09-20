import { CarsGallary } from '../../components/CarsGallary/CarsGallary';
import { SerchForm } from '../../components/SerchForm/SerchForm';

export default function CarsPage() {
  return (
    <>
      <div>
        <h1>Find your best car rental with easy way</h1>
        <SerchForm />
      </div>
      <CarsGallary />
    </>
  );
}
