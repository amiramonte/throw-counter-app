import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Buttons from './buttons';

export default function Counter() {

    const [count, setCount] = useState(0);

    const countIncrease = () => {
        setCount((count + 1));
    };

    const countDecrease = () => {
        if (count > 0) {
            setCount((count - 1));
        }
    };

    const countReset = () => {
        setCount((0));
    };

    return (
    <div>
        <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
                <p>{count}</p>
                <Buttons countIncrease = {countIncrease} countDecrease = {countDecrease} countReset = {countReset}/>
            </Stack>
        </Box>
    </div>
    )
}
