import {
	TextField,
	createTheme,
	ThemeProvider,
	MenuItem,
} from '@material-ui/core'
import React from 'react'
import './header.css'
import languages from '../../data/languages'

const Header = ({
	language,
	setLanguage,
	word,
	setWord,
	meanings,
	setMeanings,
	lightMode
}) => {
	const darkTheme = createTheme({
		palette: {
			primary: {
				main: lightMode ? "#000" : "#fff",
			  },
			  type: lightMode ? "light" : "dark",
		},
	})

	// to clear the word if you change the language
	// const handleChange = (e) => {
	// 	setLanguage(e.target.value)
	// 	setWord('')
	// 	setMeanings([])
	// }

	return (
		<div className="header">
			<span className="title">{word ? word : 'Word Hunt'}</span>
			<div className="inputs">
				<ThemeProvider theme={darkTheme}>
					<TextField
						className="search"
						label="Search a word"
						value={word}
						onChange={(e) => setWord(e.target.value)}
					/>
					<TextField
						select
						className="select"
						label="Language"
						value={language}
						onChange={(e) => setLanguage(e.target.value)}
					>
						{languages.map((option, idx) => (
							<MenuItem key={idx} value={option.label}>
								{option.value}
							</MenuItem>
						))}
					</TextField>
				</ThemeProvider>
			</div>
		</div>
	)
}

export default Header
