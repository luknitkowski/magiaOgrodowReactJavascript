import renderer from 'react-test-renderer'

import Contact from '../components/contact';

test('Contact renders correctly', () => {
  const contact = renderer.create(<Contact />).toJSON();
  expect(contact).toMatchSnapshot();
});