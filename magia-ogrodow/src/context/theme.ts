import ThemeType from './themeType'

type ThemeWithModesType = {
  lightMode: ThemeType,
  darkMode: ThemeType
}

const Theme: ThemeWithModesType = {
  lightMode: {
    body: 'white',
    text: '#363537',
    lightColorGradient: '#adebc5',
    darkColorGradient: '#5CDB95',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
    toggleBorder: '#FFF',
    primary: "red"
  },
  darkMode: {
    body: '#363537',
    text: '#FAFAFA',
    lightColorGradient: 'black',
    darkColorGradient: '#363537',
    gradient: 'linear-gradient(#091236, #1E215D)',
    toggleBorder: '#6B8096',
    primary: "red"
  }
};

export default Theme;