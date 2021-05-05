import renderer from 'react-test-renderer'

import AboutUs from '../components/aboutUs';

test('AboutUs renders correctly', () => {
  const aboutUs = renderer.create(<AboutUs />).toJSON();
  expect(aboutUs).toMatchSnapshot();
});

