import React from 'react';
import {User} from '@/types';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {useRouter} from 'next/router';

const columns: GridColDef[] = [
    {
        field: 'fullName',
        headerName: 'Full Name',
        width: 200,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 200,
    },
    {
        field: 'address',
        headerName: 'Address',
        width: 300,
    },
];

type Props = {
    users: User[];
}

export const UsersTable: React.FC<Props> = (props) => {
    const {users} = props;
    const router = useRouter();

    return (
        <DataGrid
            rows={users}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: {page: 0, pageSize: 4},
                },
                sorting: {
                    sortModel: [{field: 'fullName', sort: 'asc'}],
                }
            }}
            onRowClick={(row) => {
                router.push(`/user/${row.id}`);
            }}
            sx={{
                maxWidth: '700px',
            }}
        />
    );
};
