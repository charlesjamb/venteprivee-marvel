import React, {Component, PropTypes} from 'react';
import {Button, Modal} from 'react-bootstrap';

export default class ModalBody extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Modal.Header closeButton>
					<Modal.Title>{this.props.name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<img src={this.props.image} alt="242x200"/>
					<p>
						Lorem ipsum
					</p>
				</Modal.Body>
			</div>
		);
	}
}