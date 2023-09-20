import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { selectCars } from '../../redux/cars/carsSelectors';
import { setFilter } from '../../redux/filter/filterSlice';

const priceOptions = cars => {
  let options = [];
  const prices = [...new Set(cars.map(item => item.rentalPrice.slice(1)))];
  const min = Math.min(...prices);
  const max = Math.max(...prices);

  const start = Math.round(min / 10) * 10;
  const end = Math.round(max / 10) * 10;

  for (let i = start; i <= end; i += 10) {
    options.push({ value: i, label: `${i}` });
  }
  return options;
};

const modelOptions = cars => {
  const models = [...new Set(cars.map(item => item.make))];
  return models.map(item => ({
    value: item,
    label: `${item}`,
  }));
};

export const SideBarForm = () => {
  const carsAll = useSelector(selectCars);
  const dispatch = useDispatch();
  const models = modelOptions(carsAll);
  const prices = priceOptions(carsAll);

  const handleSubmit = values => {
    const payload = {
      model:
        values.model.length > 0
          ? [...new Set(values.model.map(item => item.value))]
          : [],
      price: values.price ? values.price.value : null,
      mileageFrom: values.mileageFrom,
      mileageTo: values.mileageTo,
    };

    dispatch(setFilter(payload));
  };

  return (
    <Formik
      initialValues={{
        model: [],
        price: null,
        mileageFrom: null,
        mileageTo: null,
      }}
      validationSchema={Yup.object().shape({
        model: Yup.array().of(
          Yup.object().shape({ value: Yup.string(), label: Yup.string() })
        ),
        price: Yup.object()
          .shape({ value: Yup.string(), label: Yup.string() })
          .nullable(),
        mileageFrom: Yup.number().nullable(),
        mileageTo: Yup.number().moreThan(Yup.ref('mileageFrom')).nullable(),
      })}
      onSubmit={values => {
        handleSubmit(values);
      }}
    >
      {props => {
        // const {
        //   values,
        //   touched,
        //   errors,
        //   dirty,
        //   isSubmitting,
        //   handleChange,
        //   setFieldValue,
        //   handleBlur,
        //   handleSubmit,
        //   handleReset,
        //   isValid,
        // } = props;
        return <Form onSubmit={handleSubmit}></Form>;
      }}
    </Formik>
  );
};
