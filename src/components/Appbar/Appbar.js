import { Header, Nav, NavItem } from './Appbar.jsx'
import {BsStack, BsWalletFill, BsBriefcaseFill,BsChatLeftTextFill,BsPersonLinesFill} from 'react-icons/bs'
// import { Outlet } from 'react-router-dom'

//обьекты меню
const navItems = [
    { href: 'dashboard', text: 'Dashboard', icon: BsStack },
    { href: 'sales', text: 'Sales', icon: BsWalletFill },
    { href: 'reports', text: 'Reports', icon: BsBriefcaseFill },
    { href: 'feedback', text: 'Feedback', icon: BsChatLeftTextFill },
    { href: 'customers', text: 'Customers', icon: BsPersonLinesFill },
]

export const AppBar = () => {
    return (
        <Header>
            <Nav>
                {navItems.map(({ href, text, icon:Icon }) => <NavItem to={href} key={href}>
                    <Icon size="16"/>
                    {text}
                    </NavItem>)}
            </Nav>
        </Header>
    )
}