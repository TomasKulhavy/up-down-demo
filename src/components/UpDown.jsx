import React from "react";
import "./UpDown.css";
import { Button, Progress } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const UpDownInner = props => {
    console.log(props);
    return <p>{props.children}</p>
}

const UpDown = ({value, setValue, ...rest}) => {
    return (
        <div className="updown">
            <Button size="sm" onClick={e => {setValue(value - 1);}}>-</Button>
            <span>{value}</span>
            <Button size="sm" onClick={e => {setValue(value + 1);}}>+</Button>
            <Progress value={Math.abs(value)} color={value < 0 ? "danger" : "success"} />
        </div>
    );
}

export default UpDown;