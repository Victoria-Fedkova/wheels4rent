import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../../redux/filter/filterSlice';
import { selectLikes } from '../../../redux/likes/likesSelectors';
import { selectModels } from '../../../redux/filter/filterSelectors';
import { CheckboxForm } from '../SideBar.styled';

const modelOptions = cars => {
  return [...new Set(cars.map(item => item.make))];
};

export const SideBarForm = () => {
  const likes = useSelector(selectLikes);
  const dispatch = useDispatch();
  const models = modelOptions(likes);
  console.log('models', models);
  const filters = useSelector(selectModels);
  // const handleSubmit = values => {
  //   const payload = {
  //     model: values.model.length > 0 ? [...new Set(values.model)] : [],
  //     price: values.price ? values.price.checkedType : null,
  //     mileageFrom: 0,
  //     mileageTo: 0,
  //   };

  //   dispatch(setFilter(payload));
  // };

  return (
    <div>
      <CheckboxForm>
        <h3 id="checkbox-group-Type">TYPE</h3>
        <div role="group" aria-labelledby="checkbox-group-Type">
          {models.map(item => {
            return (
              <label key={item}>
                <input
                  type="checkbox"
                  name="checkedType"
                  value={filters.includes(item)}
                  onChange={() => {
                    if (filters.includes(item)) {
                      dispatch(
                        setFilter({
                          model: [...filters.filter(name => name !== item)],
                        })
                      );
                    } else {
                      dispatch(setFilter({ model: [...filters, item] }));
                    }
                  }}
                />
                {item.toUpperCase()}
              </label>
            );
          })}
        </div>
      </CheckboxForm>
      {/* )}
      </Formik> */}
    </div>
  );
};
