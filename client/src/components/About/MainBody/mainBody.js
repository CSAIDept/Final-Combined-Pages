import React from 'react';
import Tile from './Tile';

class DisplayTiles extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        return (
            <div className="grid-container">
                <Tile />
            </div>
        );
    }
}

export default DisplayTiles;
           
           
           
           