import ThemeType from './themeType'

const Theme: ThemeType = {
  lightMode: {
    color: "red",
    body: 'white',
    text: '#363537',
    toggleBorder: '#FFF',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
  },
  darkMode: {
    color: "blue",
    body: '#363537',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    gradient: 'linear-gradient(#091236, #1E215D)',
  }
};

export default Theme;