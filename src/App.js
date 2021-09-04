import { useEffect, useState } from 'react'
import axios from 'axios'
import { Container } from '@material-ui/core'
import './App.css'
import { Header, Definitions, ThemeSwitch } from './components'

function App() {
	const [word, setWord] = useState('')
	const [meanings, setMeanings] = useState([])
	const [language, setLanguage] = useState('en') // english language by default
	const [lightMode, setLightMode] = useState(false)

	const dictionaryAPI = async () => {
		try {
			const data = await axios.get(
				`https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`
			)
			setMeanings(data.data)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		dictionaryAPI()
	}, [word, language])

	return (
		<div
			className="App"
			style={{
				height: '100vh',
				backgroundColor: lightMode ? '#fff' : '#282c34',
				color: lightMode ? 'black' : 'white',
				transition: 'all 1.0s linear',
			}}
		>
			<Container
				maxWidth="md"
				style={{
					display: 'flex',
					flexDirection: 'column',
					height: '100vh',
					justifyContent: 'space-evenly',
				}}
			>
				<div
					style={{
						position: 'absolute',
						top: 0,
						right: 15,
						padding: 10,
					}}
				>
					<span>{lightMode ? 'Dark' : 'Light'} Mode</span>
					<ThemeSwitch
						checked={lightMode}
						onChange={() => setLightMode(!lightMode)}
					/>
				</div>
				<Header
					language={language}
					setLanguage={setLanguage}
					word={word}
					setWord={setWord}
					meanings={meanings}
					setMeanings={setMeanings}
					lightMode={lightMode}
				/>
				{meanings && (
					<Definitions
						word={word}
						meanings={meanings}
						setMeanings={setMeanings}
						language={language}
						lightMode={lightMode}
					/>
				)}
			</Container>
		</div>
	)
}

export default App
