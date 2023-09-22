import { Formik, Form, Field } from 'formik';
import { NumericFormat } from 'react-number-format';
import * as Yup from 'yup';
import {
  BtnsWprap,
  FormContainer,
  MileageSelect,
  ModelSelect,
  PriceSelect,
} from './SerchForm.styled';
import Select, { components } from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars } from '../../redux/cars/carsSelectors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { setFilter } from '../../redux/filter/filterSlice';
import {
  selectMileageFrom,
  selectMileageTo,
  selectModels,
  selectPrice,
} from '../../redux/filter/filterSelectors';
import { useState } from 'react';
import { modelOptions, priceOptions } from './utils/utils';

const VALUE_PREFIX = 'To ';
const VALUE_SUFFIX = '$';

const DropdownIndicator = props => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <FontAwesomeIcon
          icon={props.selectProps.menuIsOpen ? faChevronUp : faChevronDown}
        />
      </components.DropdownIndicator>
    )
  );
};

export const SerchForm = () => {
  const [fromValue, serFromValue] = useState();
  const [toValue, setToValue] = useState();

  const carsAll = useSelector(selectCars);
  const dispatch = useDispatch();
  const models = modelOptions(carsAll);
  const prices = priceOptions(carsAll);

  const defaultModels = useSelector(selectModels);
  const defaultPrice = useSelector(selectPrice);
  const defaultMileageFrom = useSelector(selectMileageFrom);
  const defaultMileageTo = useSelector(selectMileageTo);

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
        model: defaultModels || [],
        price: defaultPrice || null,
        mileageFrom: defaultMileageFrom || null,
        mileageTo: defaultMileageTo || null,
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
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          setFieldValue,
          handleBlur,
          handleSubmit,
          handleReset,
          isValid,
          resetForm,
        } = props;
        return (
          <FormContainer>
            <Form onSubmit={handleSubmit}>
              <ModelSelect htmlFor="model">
                Car brand
                <Field
                  as={Select}
                  isClearable
                  isMulti
                  defaultValue={defaultModels}
                  name="model"
                  placeholder="Enter the text"
                  onChange={val => {
                    setFieldValue('model', val);
                  }}
                  components={{
                    IndicatorSeparator: () => null,
                    DropdownIndicator,
                  }}
                  styles={{
                    placeholder: base => ({
                      ...base,
                      color: '#121417',
                    }),
                  }}
                  options={models}
                />
                {touched.model && errors.model ? <b>{errors.model}</b> : null}
              </ModelSelect>
              <PriceSelect>
                Price/ 1 hour
                <Field
                  as={Select}
                  name="price"
                  placeholder="To $"
                  isClearable
                  defaultValue={defaultPrice}
                  styles={{
                    placeholder: base => ({
                      ...base,
                      color: '#121417',
                    }),
                  }}
                  components={{
                    SingleValue: ({ children, ...props }) => {
                      return (
                        <components.SingleValue {...props}>
                          {VALUE_PREFIX + children + VALUE_SUFFIX}
                        </components.SingleValue>
                      );
                    },
                    IndicatorSeparator: () => null,
                    DropdownIndicator,
                  }}
                  onChange={val => setFieldValue('price', val)}
                  options={prices}
                />
                {touched.price && errors.price ? <b>{errors.price}</b> : null}
              </PriceSelect>
              <MileageSelect>
                Сar mileage / km
                <span>
                  <Field
                    as={NumericFormat}
                    prefix={'From '}
                    placeholder={'From '}
                    thousandSeparator=","
                    name="mileageFrom"
                    value={fromValue}
                    onChange={values => {
                      const newValue = values.target.value
                        ? Number(
                            values.target.value
                              .split(' ')[1]
                              .split(',')
                              .join('')
                          )
                        : null;
                      setFieldValue('mileageFrom', newValue);
                      serFromValue(newValue);
                    }}
                  />
                  <Field
                    as={NumericFormat}
                    prefix={'To '}
                    placeholder={'To '}
                    thousandSeparator=","
                    name="mileageTo"
                    value={toValue}
                    onChange={values => {
                      const newValue = values.target.value
                        ? Number(
                            values.target.value
                              .split(' ')[1]
                              .split(',')
                              .join('')
                          )
                        : null;

                      setFieldValue('mileageTo', newValue);
                      setToValue(newValue);
                    }}
                  />
                </span>
                {touched.mileageFrom && errors.mileageFrom ? (
                  <b>{errors.mileageFrom}</b>
                ) : null}
                {touched.mileageTo && errors.mileageTo ? (
                  <b>{errors.mileageTo}</b>
                ) : null}
              </MileageSelect>
              <BtnsWprap>
                <button type="submit" disabled={!dirty || !isValid}>
                  Search
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const payload = {
                      model: [],
                      price: '',
                      mileageFrom: 0,
                      mileageTo: 0,
                    };
                    resetForm();
                    serFromValue('');
                    setToValue('');
                    dispatch(setFilter(payload));
                  }}
                >
                  Reset results
                </button>
              </BtnsWprap>
            </Form>
          </FormContainer>
        );
      }}
    </Formik>
  );
};
