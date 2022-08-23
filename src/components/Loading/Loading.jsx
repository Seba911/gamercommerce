import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './Loading.scss'

const Loading = () => {
    return (
        <Box className='loading'>
            <CircularProgress />
        </Box>
    )
}
export default Loading