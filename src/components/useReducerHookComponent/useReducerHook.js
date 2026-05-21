import React, {useReducer, userReducer} from "react";
import { Typography, Button } from "@mui/material"; 
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import './useReducerCounter.css';
import { red } from "@mui/material/colors";

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
}


function UseReducerHook() {
    const [count, dispatch] = useReducer(reducer, 0);
    const increment = () => {
        dispatch({ type: 'increment' });
    };
    const decrement = () => {
        dispatch({ type: 'decrement' });
    };
    return (
        <div className="counter-container">
            <Typography variant="h5" className="counter-title">
                Count: {count}
            </Typography>
            <div className="button-group">
                <Button variant="contained" disableRipple color="primary" onClick={increment}>
                    <AddIcon />
                </Button>
                <Button variant="contained" color="secondary" onClick={decrement}>
                    <RemoveIcon />
                </Button>
            </div>
        </div>
    );
}