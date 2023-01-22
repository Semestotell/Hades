import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Box = styled.div`
    display: flex;
    `;
export const Side = styled.aside`
    display: flex;
    flex-direction: column;
    border-right: 1px solid black
`;
export const NavItem = styled(NavLink)`
    
`;