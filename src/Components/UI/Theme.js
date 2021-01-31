import { createMuiTheme } from "@material-ui/core"



const DarkGray = 'hsl(0, 0%, 63%)'
const Black = 'hsl(0, 0%, 0%)'
const White = 'hsl(0, 0%, 100%)'
const VeryDarkGray = 'hsl(0, 0%, 27%)'


export default createMuiTheme({
    palette:{
        primary:{
            main: DarkGray
        },
        secondary: {
            main: Black
        },
        common:{
            darkGray: DarkGray,
            black: Black,
            white: White,
            VeryDarkGray: VeryDarkGray
        }
    }
})