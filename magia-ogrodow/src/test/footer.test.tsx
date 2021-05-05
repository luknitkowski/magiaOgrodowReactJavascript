import renderer from 'react-test-renderer'

import Footer from '../components/footer';

test('Footer renders correctly', () => {
  const footer = renderer.create(<Footer />).toJSON();
  expect(footer).toMatchSnapshot();
});

