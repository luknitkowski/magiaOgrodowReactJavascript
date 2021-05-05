import renderer from 'react-test-renderer'

import Gardening from '../components/gardening';

test('Gardening renders correctly', () => {
  const gardening = renderer.create(<Gardening />).toJSON();
  expect(gardening).toMatchSnapshot();
});

