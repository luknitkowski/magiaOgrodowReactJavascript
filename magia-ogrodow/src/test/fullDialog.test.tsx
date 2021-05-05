import renderer from 'react-test-renderer'
import { render, screen, fireEvent  } from '@testing-library/react'
import EnzymeToJson from 'enzyme-to-json';
import Enzyme,{ mount } from 'enzyme'; 
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import FullDialog from '../components/fullDialog';

Enzyme.configure({ adapter: new Adapter() });

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
    const fullDialog = mount(<FullDialog dialogConfig={testProps.dialogConfig} closeFullDialog={testProps.closeFullDialog} />);
    expect(EnzymeToJson(fullDialog)).toMatchSnapshot();
});