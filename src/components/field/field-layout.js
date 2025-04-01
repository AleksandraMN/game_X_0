import PropTypes from 'prop-types';
import { PLAYER, PLAYER_SIGN } from '../../constants';
import { Component } from 'react';

export class FieldLayout extends Component {

	render() {
		const { field, handleCellClick } = this.props;

		const styleField = "field flex flex-wrap my-5 mx-0";
		const styleCell = "cell";

		return (
			<div className={styleField} >
				{field.map((cellPlayer, index) => (
					<button
						key={index}
						className={styleCell}
						onClick={() => handleCellClick(index)}
					>
						{PLAYER_SIGN[cellPlayer]}
					</button>
				))}
			</div>
		);
	}
};

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOBODY, PLAYER.NOUGHT])),
	handleCellClick: PropTypes.func,
};
