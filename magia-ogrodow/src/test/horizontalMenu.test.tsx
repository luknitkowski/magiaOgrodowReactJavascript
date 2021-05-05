import renderer from 'react-test-renderer'

import HorizontalMenu from '../components/horizontalMenu';

test('HorizontalMenu renders correctly', () => {
  const horizontalMenu = renderer.mount(<HorizontalMenu />).toJSON();
  expect(horizontalMenu).toMatchSnapshot();
});

