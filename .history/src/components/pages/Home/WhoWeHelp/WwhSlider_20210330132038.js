import React from 'react';
import Slider from 'infinite-react-carousel';

const WwhSlider = (props) => (
    <Slider dots >
        <div>
            <h3>a</h3>
{props.rows}
        </div>
        <div>
            <h3>b</h3>
        </div>
        <div>
            <h3>c</h3>
        </div>
    </Slider>
);

export default WwhSlider;