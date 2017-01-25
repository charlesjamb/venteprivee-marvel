import React, {Component} from 'react';
import {Col, Thumbnail, Button} from 'react-bootstrap';

export default class Character extends Component {
	render() {
		let character = this.props.character;
		return (
			<Col xs={6} md={4}>
				<Thumbnail src={character.thumbnail.path} alt="242x200">
					<h2>{character.name}</h2>
					<p>
						<Button bsStyle="default">More info</Button>
					</p>
				</Thumbnail>
			</Col>
		);
	}
}