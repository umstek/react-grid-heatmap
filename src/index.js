import React, {Component} from 'react'

function dotSize(remainingSpace, dotCount, gutterSize) {
    // _$_._._._._
    return (remainingSpace - (dotCount) * gutterSize) / dotCount;
}

class Heatmap extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {Dot, hLabels, vLabels, gutterSize, size, height, width} = this.props;

        const dotHeight = dotSize(height, size.rows + !!hLabels, gutterSize);
        let startY = gutterSize;
        const dotWidth = dotSize(width, size.cols + !!vLabels, gutterSize);
        let startX = gutterSize;

        if (hLabels) {
            // add horizontal labels
            startY += gutterSize + dotHeight;
        }
        if (vLabels) {
            // add vertical labels
            startX += gutterSize + dotWidth;
        }

        return <svg height={height} width={width}>
            {
                this.props.grid.map((x, i, arr) =>
                    <Dot key={i} item={x} items={arr}
                         height={dotHeight} width={dotWidth}
                         x={startX + (Math.floor(i / size.rows) * (dotWidth + gutterSize))}
                         y={startY + (i % size.rows) * (dotHeight + gutterSize)}/>)
            }
        </svg>
    }
}

export default Heatmap;