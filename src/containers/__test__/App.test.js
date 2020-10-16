import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json' 

import {App} from '../App'


describe ( 'App', () => {
   
    it('it renders without crashing', () => {
        const props = {
            isFetching = false,
            dispatch = jest.fn(),
            selectedSubreddit: 'reactjs',
            posts: []
        }
        const wrapper = shallow(<App {...props}/>)
        expect( toJson(wrapper)).toMatchSnapShot()
    })

}) // describe>it>expect? test de snapshots