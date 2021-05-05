import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom';

import HorizontalMenu from '../components/horizontalMenu';

test('HorizontalMenu renders correctly', () => {
  const horizontalMenu = renderer.create(<Router><HorizontalMenu /></Router>).toJSON();
  expect(horizontalMenu).toMatchSnapshot();
});

