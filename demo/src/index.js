import React, {Component} from 'react';
import {render} from 'react-dom';
import Heatmap from '../../src';

class Demo extends Component {
    render() {
        return (
            <div>
                <h1>react-grid-heatmap Demo</h1>
                <Heatmap
                    Dot={(props) => <rect {...props}/>}
                    height={70 + 7} width={520 + 52}
                    gutterSize={1}
                    size={{cols: 52, rows: 7}}
                    //hLabels={[]} vLabels={[]}
                    grid={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}/>
            </div>
        );
    }
}

render(<Demo/>, document.querySelector('#demo'));
