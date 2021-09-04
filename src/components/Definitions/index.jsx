import React from 'react'
import './definitions.css'

function Definitions({ word, language, meanings, lightMode }) {
	console.log(meanings)

	const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1)
	return (
		<div className="meanings">
			{meanings[0] && word && language === 'en' && (
				<div
					className="singleMeaning"
					style={{
						backgroundColor: lightMode ? '#3b5360' : 'white',
						color: lightMode ? 'white' : 'black',
					}}
				>
					<strong> Word Origin:</strong>
					{capitalize(meanings[0].origin)}
				</div>
			)}
			{meanings[0] && word && language === 'en' && (
				<div>
					<audio
						src={
							meanings[0].phonetics[0] &&
							meanings[0].phonetics[0].audio
						}
						controls
						style={{
							backgroundColor: '#fff',
							borderRadius: 10,
							width: '100%',
						}}
					>
						Your browser does not support audio.
					</audio>
				</div>
			)}

			{word === '' ? (
				<span className="subTitle">Start by typing a word!</span>
			) : (
				meanings.map((meaning) =>
					meaning.meanings.map((item) =>
						item.definitions.map((def) => (
							<div
								className="singleMeaning"
								style={{
									backgroundColor: lightMode
										? '#3b5360'
										: 'white',
									color: lightMode ? 'white' : 'black',
								}}
							>
								<strong>{capitalize(def.definition)}</strong>
								<hr
									style={{
										backgroundColor: 'black',
										width: '100%',
									}}
								/>
								{def.example && (
									<span>
										<b>Example :</b> {def.example}
									</span>
								)}
								{def.synonyms.length !== 0 && (
									<span>
										<b>Synonyms :</b>{' '}
										{def.synonyms.map((s) => `${s}, `)}
									</span>
								)}
							</div>
						))
					)
				)
			)}
		</div>
	)
}

export default Definitions
