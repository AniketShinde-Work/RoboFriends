import React,{Component} from 'react';
import {robots} from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { render } from '@testing-library/react';


class App extends Component {
    constructor(){
        super()
        this.state={
            robots:robots,
            serachfield:''
        }
    }

onSearchChange(event){
    console.log(event.target.value);
}


    render(){
    return(
        <div className='tc'>
        <h1>RobotFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={this.state.robots} />
        </div>
        
    );
    }
}

export default App;