import { useState } from 'react';
import Slider from 'react-input-slider';
import { useDispatch, useSelector } from 'react-redux';
import { selectLikes } from '../../../redux/likes/likesSelectors';
import { setFilter } from '../../../redux/filter/filterSlice';
import { SliderForm } from '../SideBar.styled';

const priceOptions = cars => {
  const prices = [...new Set(cars.map(item => item.rentalPrice.slice(1)))];
  const min = Math.min(...prices);
  const max = Math.max(...prices);

  return [min, max];
};

export const SideBarSlider = () => {
  const likes = useSelector(selectLikes);
  const dispatch = useDispatch();
  const [state, setState] = useState({ x: 0 });
  const prices = priceOptions(likes);
  return (
    <SliderForm>
      <h3>PRICE</h3>
      <Slider
        axis="x"
        xmin={prices[0]}
        xmax={prices[1]}
        x={state.x}
        onChange={({ x }) => setState(state => ({ ...state, x }))}
        onDragEnd={e => {
          const x = Math.round(e.clientX);
          dispatch(setFilter({ price: x }));
        }}
      />
      <p>{`Max. $ ${state.x}`}</p>
    </SliderForm>
  );
};
