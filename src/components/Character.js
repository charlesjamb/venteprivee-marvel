import React, {Component} from 'react';
import {Col, Thumbnail, Button} from 'react-bootstrap';

export default class Character extends Component {
	render() {
		let character = this.props.character;
		return (
			<Col xs={12} sm={6} md={4}>
				<Thumbnail src={character.thumbnail.path + '.' + character.thumbnail.extension} alt="242x200">
					<h2>{character.name}</h2>
					<Button bsStyle="default" bsSize="large">More info</Button>
				</Thumbnail>
			</Col>
		);
	}
}