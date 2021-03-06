
import { NavContainer, NavInnerSection, StyledLink, NavBox, Logo, SearchInput, SearchButton,StyledSearchIcon } from './NavBar.Styles';
import logo from "../../Assets/Screenshot 2021-06-14 110717.png"
import { useState } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import {Link} from "react-router-dom"

const StyleObj={
    fontSize:20,
    color:"#FFF",
    fill:"#FFF",
    margin:"auto 0 auto 32px"
}

const NavBar = () => {
 const [value, setValue] = useState('');

    return (
        <NavContainer>
            <NavInnerSection>
                
                <NavBox>
                    <StyledLink to={"/"}>

                    <Logo src={logo} alt="Logo"/>

                    </StyledLink>
                
                
                </NavBox>
                <NavBox style={{background:"#FFF", borderRadius:6}}>
                    <SearchInput value={value} type="text" placeholder="Search" onChange={e=>{
                        setValue(e.target.value)
                    }}/>
                    <SearchButton>
                        <StyledSearchIcon/>
                        Search
                    </SearchButton>
                </NavBox>
                <NavBox>
                    <PersonIcon style={StyleObj} />
                    <BookmarkIcon style={StyleObj}/>
                    <ShoppingCartIcon style={StyleObj}/>
                </NavBox>
            </NavInnerSection>
        </NavContainer>
    );
}

export default NavBar;
