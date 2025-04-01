import { PLAYER, STATUS } from '../../constants';
import { FieldLayout } from './field-layout';
import { checkWin, checkEmptyCell } from '../../utils';
import { setCurrentPlayer, setField, setStatus } from '../../actions';
import { connect } from 'react-redux';
import { Component } from 'react';
import PropTypes from 'prop-types';

class FieldContainer extends Component {

	handleCellClick = (cellIndex) => {
		const { status, currentPlayer, field, dispatch } = this.props;

		if (
			status === STATUS.WIN ||
			status === STATUS.DRAW ||
			field[cellIndex] !== PLAYER.NOBODY
		) {
			return;
		}

		// Создаем новое состояние поля
		const newField = [...field];
		newField[cellIndex] = currentPlayer;

		// Обновляем поле
		dispatch(setField(newField));

		// Проверяем, есть ли победитель
		if (checkWin(newField, currentPlayer)) {
			dispatch(setStatus(STATUS.WIN));
		} else if (checkEmptyCell(newField)) {
			// Переключаем игрока, если есть пустые ячейки
			const newCurrentPlayer =
				currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS;
			dispatch(setCurrentPlayer(newCurrentPlayer));
		} else {
			// Если нет пустых ячеек, объявляем ничью
			dispatch(setStatus(STATUS.DRAW));
		}
	};

	render() {
		const { field } = this.props;

		return <FieldLayout field={field} handleCellClick={this.handleCellClick} />;
	}
};

// Привязка состояния Redux к props
const mapStateToProps = (state) => ({
	status: state.status,
	currentPlayer: state.currentPlayer,
	field: state.field,
});

// Привязка диспатча Redux к props
const mapDispatchToProps = (dispatch) => ({
	dispatch,
});

// Подключение компонента к Redux
export const Field = connect(mapStateToProps, mapDispatchToProps)(FieldContainer);


FieldContainer.propTypes = {
	status: PropTypes.oneOf(Object.values(STATUS)).isRequired,
	currentPlayer: PropTypes.oneOf(Object.values(PLAYER)).isRequired,
	field: PropTypes.arrayOf(PropTypes.oneOf(Object.values(PLAYER))).isRequired,
	dispatch: PropTypes.func.isRequired,
};
