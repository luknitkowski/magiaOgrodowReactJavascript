import renderer from 'react-test-renderer'

import imageAboutUsParallax from '../../images/dzialka.jpg';
import Parallax from '../components/parallax';

const propsParallax = {
    text: "", 
    image: imageAboutUsParallax
}

test('Parallax renders correctly', () => {
  const parallax = renderer.create(<Parallax {...propsParallax} />).toJSON();
  expect(parallax).toMatchSnapshot();
});

