import { Switch, withStyles } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

const ThemeSwitch = withStyles({
	switchBase: {
		color: grey[300],
		'&$checked': {
			color: grey[500],
		},
		'&$checked + $track': {
			backgroundColor: grey[500],
		},
	},
	checked: {},
	track: {},
})(Switch)

export default ThemeSwitch
