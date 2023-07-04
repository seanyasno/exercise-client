import React from 'react';
import {Box} from '@mui/material';
import HashLoader from 'react-spinners/HashLoader';

export const LoadingFullPage: React.FC = () => {
    return (
        <Box sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <HashLoader/>
        </Box>
    );
}
