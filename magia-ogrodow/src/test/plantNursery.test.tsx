import renderer from 'react-test-renderer'

import PlantNursery from '../components/plantNursery';

test('PlantNursery renders correctly', () => {
  const plantNursery = renderer.create(<PlantNursery />).toJSON();
  expect(plantNursery).toMatchSnapshot();
});

