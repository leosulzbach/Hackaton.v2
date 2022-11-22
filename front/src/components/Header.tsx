import {UserCircle } from "phosphor-react";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { HeaderContainer,
    ContentContainer,
    NavLinkContainer,
    NavbarLink } from "./Header.styles"

export function Header(){
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(["isDark"]);
  
    useEffect(() => {
      cookies.isDark && setIsDarkTheme(true);
    }, []);
  
    isDarkTheme ? setCookie("isDark", "true") : removeCookie("isDark");
    return(
        <>
        <HeaderContainer>
            <ContentContainer>
                <NavLinkContainer>
                    <label>CRIE Ingressos</label>
                </NavLinkContainer>
            </ContentContainer>
        </HeaderContainer>
        </>
    )
}

