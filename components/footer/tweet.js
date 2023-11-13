import React from "react";
import { Tweet } from 'react-tweet';

class Twitter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return( 
            <div>
                <Tweet id="1721596740024078340" className="w-10" />
            </div>
        )
    }
}

export default Twitter;