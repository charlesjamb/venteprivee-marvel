import React, {Component, PropTypes} from 'react';
import {Modal} from 'react-bootstrap';

export default class ModalBody extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	componentDidMount() {
		console.log(this.props.comics);
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
						{this.props.description}
					</p>
					<h3>Comics</h3>
					<li className='list-item'>
						{this.props.comics.map(comic => <ul className='list-group-item'>{comic.name}</ul>)}
					</li>
					<h3>Series</h3>
					<li className='list-item'>
						{this.props.series.map(serie => <ul className='list-group-item'>{serie.name}</ul>)}
					</li>
					<a className="btn btn-default" href={this.props.marvel}>TO MARVEL</a>
				</Modal.Body>
			</div>
		);
	}
};

ModalBody.propTypes = {
	name: PropTypes.string,
	image: PropTypes.string,
	description: PropTypes.string,
	marvel: PropTypes.string,
	comics: PropTypes.array,
	series: PropTypes.array
}