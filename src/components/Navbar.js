import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);//themecontext is taken from themecontext.js
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);//shows weather logged in or out if true if logged in or out text is clicked
  const theme = isLightTheme ? light : dark;//is lighttheme true else dark
  return (
    //uses ui and syntax taken from themecontext
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={() => toggleAuth()}>
        { isAuthenticated ? 'Logged in' : 'Logged out' }
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
 
export default Navbar;