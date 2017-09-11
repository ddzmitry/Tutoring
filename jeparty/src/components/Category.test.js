import React from 'react';
import {mount,shallow} from 'enzyme';
import {Category,LinkedCategory }from './Category';
import {categories, clues} from '../data/fixtures';
import {fakeServer} from 'sinon';

const props = {category : categories[0]}
describe('Category', () => {
        let server;
        beforeEach(() => {
            // creating a fake server with sinon
          server =fakeServer.create();
            // making a respond from server
            // 1) METHOD , 2) URL we are hirring 3) Expected Return is an array [serverstatus,contenttype, type(JSONstringify)]
            server.respondWith(
                'GET',
                `http://jservice.io/api/clues?category=${props.category.id}`,
            [200,{'Content-Type':'application/json'},JSON.stringify(clues)])


        });
        
        describe('when creating new category', () => {
            let category;

            // has parameter done to fwtch while we are getting the data here 
            beforeEach( done => {
            category = mount(<Category {...props} />)
            server.respond()
            
            // an then make server respond and then funush the call
            setTimeout(done)
            });

            it('logs a category',()=>{
               // console.log(category.debug())
            
            })
            it('initialize cluse in statre', ()=>{
                expect(category.state().clues).toEqual(clues);
            })
            it('renders category title', ()=>{
                expect(category.find('h2').text()).toEqual(props.category.title)
            })
            
            it('renders correct zmount of clues', () => {
                 expect(category.find('Clue').length).toEqual(clues.length)
            });
            
        })

        describe('LinkedCategory',()=>{
            const linkedcategory = shallow( <LinkedCategory/>)

            
            it('should render link to home', () => {
              //  console.log(linkedcategory.debug())

              expect(linkedcategory.find('Link h4').text().trim()).toEqual('Home')
            });

            it('creates a category component', () =>{
                expect(linkedcategory.find('Category').exists()).toBe(true)
            })
            
        })
});
