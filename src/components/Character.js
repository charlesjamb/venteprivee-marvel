import React, {Component, PropTypes} from 'react';
import {Col, Thumbnail, Button, Modal} from 'react-bootstrap';
import ModalBody from './ModalBody';

export default class Character extends Component {
	
	constructor(props) {
		super(props);
		this._open = this._open.bind(this);
		this._close = this._close.bind(this);

		this.state = {
			showModal: false
		}
	}

	 _open() {
    this.setState({ showModal: true });
  }

  _close() {
    this.setState({ showModal: false });
  }

	render() {
		let character = this.props.character;
		let img = character.thumbnail.path + '.' + character.thumbnail.extension;

		return (
			<Col xs={12} sm={6} md={4}>
				<Thumbnail src={img} alt="242x200">
					<h2>{character.name}</h2>
					<Button bsStyle="default" bsSize="large" onClick={this._open}>MORE INFO</Button>
          <Modal show={this.state.showModal} onHide={this._close}>
          	<Modal.Header closeButton>
							<Modal.Title>{character.name}</Modal.Title>
						</Modal.Header>
            <ModalBody name={character.name} 
            					 image={img} 
            					 description={character.description}
            					 marvel={character.urls[0].url}
            					 comics={character.comics}
            					 series={character.series}/>
            <Modal.Footer>
              <Button bsStyle="default" bsSize="large" onClick={this._close}>CLOSE</Button>
            </Modal.Footer>
          </Modal>
				</Thumbnail>
			</Col>
		);
	}
};

Character.propTypes = {
	character: PropTypes.object
}