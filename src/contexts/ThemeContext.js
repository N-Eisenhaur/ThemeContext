import React, { Component, createContext } from 'react';//adding Component here inside {} allows importing along with export default

export const ThemeContext = createContext();//first creates the context then this can be used with the use context hook in other pages

class ThemeContextProvider extends Component {
  state = {//this is shared data to different commponents 
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },//the properties of light are sytax, ui and bg
    dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
  }
  toggleTheme= () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });//is true then turn false if not vice versa
  }
  render() { 
    return (
      
      
      /*this commponent will have the state from above
        {this.props.children} refers to ThemeContextProvider which wraps around the children tags inside app.js

toggleTheme: this.toggleTheme adds a property called toggle theme this. refers to ThemeContext.Provider and toggletheme  refers to function above
giving us access to toggletheme and everything in the value={{}} in any component that uses this themecontext 



*/

      <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
 
export default ThemeContextProvider;
