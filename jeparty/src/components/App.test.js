import React from 'react';
import {shallow} from 'enzyme';
import {App }from './App';
import {categories} from '../data/fixtures';

const props = {categories}
describe('App',()=>{
    const app = shallow(<App {...props}/>)

    it('Should render title', ()=>{
        expect(app.find('h2').at(0).text().trim()).toEqual('Jeopardy!')
    })

    it('Should have 3 Link items',()=>{

        expect(app.find('Link').length).toEqual(3)
    })
    it('Should have titlels matching',()=>{

        app.find('Link h4').forEach((link,index)=>{
            // links should match props text
            expect(link.text()).toEqual(props.categories[index].title)
        })
    })

})