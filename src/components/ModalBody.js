import React, {Component, PropTypes} from 'react';
import {Modal} from 'react-bootstrap';

export default class ModalBody extends Component {
	render() {
		return (
			<Modal.Body>
				<img src={this.props.image} alt="242x200"/>
				<p className="margin-modal">
					{this.props.description}
				</p>
				<h3>Comics</h3>
				<li className='list-item'>
					{this.props.comics.available ?
						this.props.comics.items.map((comic, i) => <ul className='list-group-item' key={i}>{comic.name}</ul>)
						: <p>There are no comics available for {this.props.name}</p>
					}
				</li>
				<h3>Series</h3>
				<li className='list-item'>
					{this.props.series.available ?
						this.props.series.items.map((serie, i) => <ul className='list-group-item' key={i}>{serie.name}</ul>)
						: <p>{this.props.name} doesn't appear in any series</p>
					}
				</li>
				<a className="btn btn-default margin-modal" href={this.props.marvel}>TO MARVEL</a>
			</Modal.Body>
		);
	}
};

ModalBody.propTypes = {
	name: PropTypes.string,
	image: PropTypes.string,
	description: PropTypes.string,
	marvel: PropTypes.string,
	comics: PropTypes.object,
	series: PropTypes.object
}