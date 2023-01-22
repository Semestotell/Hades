import { Box, Side, NavItem } from './Invoices.jsx';
import { useState, useEffect } from 'react';
import { getInvoices } from 'components/fakeApi.js';
import { Outlet } from 'react-router-dom';

export const Invoices = () => {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        getInvoices().then(setInvoices)
    }, []);

    return (
        <Box>
            <Side>
                {invoices.map(({id}) => 
                    <NavItem to={`${id}`} key={id}>
                        {id}
                    </NavItem>
                )}
            </Side>
            <Outlet />
        </Box>
    )
}