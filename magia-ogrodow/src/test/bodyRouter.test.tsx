import renderer from 'react-test-renderer'

import BodyRouter from '../components/bodyrouter';

test('BodyRouter renders correctly', () => {
  const bodyRouter = renderer.create(<BodyRouter />).toJSON();
  expect(bodyRouter).toMatchSnapshot();
});