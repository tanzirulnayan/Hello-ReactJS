import React, {Component} from 'react';
import Ninjas from "./Ninjas";

class App extends Component {
    state = {
        ninjas: [
            {name: 'Nayan', age: 23, belt: 'Black', id: 1},
            {name: 'Paola', age: 20, belt: 'Pink', id: 2},
            {name: 'Alissa', age: 19, belt: 'Green', id: 3}
        ]
    };

    render() {
        return (
            <div className="App">
                <h1> My First React App!</h1>
                <p>Welcome :)</p>
                <Ninjas ninjas={ this.state.ninjas }/>
            </div>
        );
    }
}

export default App;
