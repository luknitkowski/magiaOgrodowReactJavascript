import renderer from 'react-test-renderer'

import Projects from '../components/projects';

test('Projects renders correctly', () => {
  const projects = renderer.create(<Projects />).toJSON();
  expect(projects).toMatchSnapshot();
});

