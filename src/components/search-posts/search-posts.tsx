import React from 'react';
import {InputAdornment, TextField} from '@mui/material';
import {BsSearch} from 'react-icons/bs';

type Props = {
    search?: string;
    onSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchPosts: React.FC<Props> = (props) => {
    const {search, onSearch} = props;

    return (
        <TextField
            variant={'standard'}
            fullWidth
            placeholder={'Looking for something?'}
            value={search}
            onChange={onSearch}
            InputProps={{
                startAdornment: <InputAdornment position="start"><BsSearch/></InputAdornment>,
            }}
        />
    );
};
