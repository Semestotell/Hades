import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Box = styled.div`
    border-bottom: 1px solid black;
    height: 40px;
    width: 100%;
`;
export const Head = styled.header`
    height: 40px;
`;
export const List = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 40px;
`;
export const NavItem = styled(NavLink)`
    padding: 5px;
    color: #000000;
    text-decoration: none;
    border-radius: 4px;

    &.active{
        background-color: blue;
        color: salmon;
    }
    :hover:not(.active),
    :focus-visible:not(.active){
        color: salmon;
    }
`;
