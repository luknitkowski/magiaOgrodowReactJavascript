import renderer from 'react-test-renderer'
import { HashRouter } from "react-router-dom";

import BodyRouter from '../components/bodyrouter';

test('BodyRouter renders correctly', () => {
  const bodyRouter = renderer.create(<HashRouter><BodyRouter /></HashRouter>).toJSON();
  expect(bodyRouter).toMatchSnapshot();
});