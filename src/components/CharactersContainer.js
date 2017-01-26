import React, {Component} from 'react';
import {Grid, Row} from 'react-bootstrap';
import Character from './Character';
import {createHash} from 'crypto';
import axios from 'axios';

export default class CharactersContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			characters: []
		}
	}

	componentDidMount() {
		this._getCharacters();
	}

	_getCharacters() {
		let publicKey = '298bab46381a6daaaee19aa5c8cafea5';
		let privateKey = 'b0223681fced28de0fe97e6b9cd091dd36a5b71d';
		let currentTime = + new Date();
		let concatenatedString = currentTime + privateKey + publicKey;

		axios.get(`http://gateway.marvel.com:80/v1/public/characters`, {
			params: {
				"ts": + currentTime,
				"apikey": publicKey,
				"hash": createHash('md5').update(concatenatedString).digest('hex') 
			}
		})
		.then(result => {
			this.setState({
				characters: result.data.data.results
			});
		})
		.catch(err => {
			console.log(err.stack);
		})
	}

	render() {
		return (
			<Grid>
				<Row>
					{this.state.characters.map(character => <Character character={character} key={character.id}/>)}
				</Row>
			</Grid>
		);
	}
};