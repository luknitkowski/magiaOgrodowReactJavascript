import renderer from 'react-test-renderer'

import SideBar from '../components/sidebar';

test('SideBar renders correctly', () => {
  const sidebar = renderer.create(<SideBar />).toJSON();
  expect(sidebar).toMatchSnapshot();
});

