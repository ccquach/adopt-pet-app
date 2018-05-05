import PropTypes from 'prop-types';
import { petPropCollections } from './constants';

const { GENDERS, COLORS } = petPropCollections;

export let petPropTypes = PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    gender: PropTypes.oneOf(GENDERS),
    breed: PropTypes.string,
    color: PropTypes.oneOf(COLORS),
    img: PropTypes.string,
  }).isRequired;