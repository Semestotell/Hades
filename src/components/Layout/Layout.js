import { AppBar } from 'components/Appbar/Appbar.js'
import { Outlet } from 'react-router-dom'
import { Box } from './Layout.jsx'

export const Layout = () => {
    return (
        <Box>
            <AppBar />
            <Outlet />
        </Box>
    )
}