import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const HeaderContainer = styled.div`
  width: 100vw;
  display: flex;
  padding: 1rem 0rem 1rem;
  margin-bottom: 2rem;

  background-color: #0C1A26;
  box-shadow: 0px 0px 8px 5px gray;
  label{
    font-size: 25px;
    color: #BDF24B;
    display: flex;
    align-items: center;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NavLinkContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const NavbarLink = styled(NavLink)`
  &:hover,
  &:focus {
    color: ${(props) => props.theme.primary};
    font-weight: 700;
  }
  &.active {
    color: ${(props) => props.theme.primary};
  }
`;