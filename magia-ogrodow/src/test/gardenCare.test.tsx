import renderer from 'react-test-renderer'

import GardenCare from '../components/gardenCare';

test('GardenCare renders correctly', () => {
  const gardenCare = renderer.create(<GardenCare />).toJSON();
  expect(gardenCare).toMatchSnapshot();
});

