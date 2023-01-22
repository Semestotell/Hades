import { Box, Head, List, NavItem } from './Sales.jsx';
import { Outlet } from 'react-router-dom';

const navItems = [
    { href: 'analytics', text: 'Analytics' },
    { href: 'invoices', text: 'Invoices' },
    { href: 'deposites', text: 'Deposites' },
]

export const Sales = () => {
    return (
        <Box>
            <Head>
                <List>
                    {navItems.map(({ href, text }) =>
                        <NavItem to={href} key={href}>{text}</NavItem>
                    )}
                </List>
            </Head>
            <Outlet />
        </Box>
    )
}