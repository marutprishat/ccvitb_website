import { type } from "os";
import React from "react";
import { Tweet } from 'react-tweet';

type Props = {

}
const Twitter: React.FC<Props> = () =>
(
    <div>
        <Tweet id="1721596740024078340" />
    </div>
);

export default Twitter;