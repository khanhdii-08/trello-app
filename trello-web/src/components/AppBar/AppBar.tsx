import Box from '@mui/material/Box'
import AppsIcon from '@mui/icons-material/Apps'
import ModeSelect from '~/components/ModeSelect'
// import { ReactComponent as LogoReact } from '~/assets/react.svg'
// import SvgIcon from '@mui/material/SvgIcon'

const AppBar = () => {
  return (
    <Box sx={{ width: '100%', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box>
        <AppsIcon sx={{ color: 'primary.main' }} />
        {/* <SvgIcon component={LogoReact} inheritViewBox /> */}
      </Box>
      <Box>
        <ModeSelect />
      </Box>
    </Box>
  )
}
export default AppBar
