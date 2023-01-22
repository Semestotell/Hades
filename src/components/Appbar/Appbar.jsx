import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 15px;
    border-right: 1px solid black;
`;

export const Header = styled.header`
    
`;

export const NavItem = styled(NavLink)`
    display: flex;
    align-items: center;
    border-radius: 4px;
    text-decoration: none;
    padding: 10px;
    gap: 10px 10px;
    color: #000000;

    &.active{
        background-color: #06b8ff;
        color:#fff;
    }

    :hover:not(.active),
    :focus-visible:not(.active){
        color: #06b8ff;
    }
`;

