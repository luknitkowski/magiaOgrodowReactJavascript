import renderer from 'react-test-renderer'
import EnzymeToJson from 'enzyme-to-json';
import Enzyme,{ mount } from 'enzyme'; 
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import FullDialog from '../components/fullDialog';

const testProps = {
    dialogConfig: {
        isOpen: true,
        gardenToShow: 'first',
        listOfImages: [
            '/images/project-images/first/1-min.jpg',
            '/images/project-images/first/2-min.jpg',
            '/images/project-images/first/3-min.jpg',
            '/images/project-images/first/4-min.jpg',
            '/images/project-images/first/5-min.jpg',
            '/images/project-images/first/6-min.jpg',
            '/images/project-images/first/7-min.jpg',
            '/images/project-images/first/8-min.jpg',
            '/images/project-images/first/9-min.jpg'
        ]
    },
    closeFullDialog: () =>{return { isOpen: false, gardenToShow: '', listOfImages: [] }} 
}


test('FullDialog renders correctly', () => {
    Enzyme.configure({ adapter: new Adapter() });
    const fullDialog = mount(<FullDialog dialogConfig={testProps.dialogConfig} closeFullDialog={testProps.closeFullDialog} />);
    expect(EnzymeToJson(fullDialog)).toMatchSnapshot();
  {/* const fullDialog = renderer.create(<FullDialog dialogConfig={testProps.dialogConfig} closeFullDialog={testProps.closeFullDialog} />).toJSON();
  expect(fullDialog).toMatchSnapshot(); */}
});

