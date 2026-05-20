import React, {useState} from "react";
import { Typography, Button } from "@mui/material"; 
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import './useStateCounter.css';

function UseStateHook() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    return(
        <div className="counter-container">
            <Typography variant="h3" component="h1" className="counter-title">
                Count: {count}
            </Typography>
            <div className="button-group">
                <Button variant="contained" disableRipple onClick={increment}>
                    <AddIcon />
                    Increment
                </Button>
                <Button variant="contained" onClick={decrement}>
                    <RemoveIcon />
                    Decrement
                </Button>
            </div>
        </div>
    );
}
export default UseStateHook;