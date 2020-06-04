const user = (state = {}, action) => {
	switch (action.type) {
		case 'SET_USER':
			console.log("reducer reached!!", action);
			return {
				// ...state,
				name: action.name,
				_id: action._id,
				label: action.label
			}

		default:
			console.log('Default called');
			return state;
	}
}

export default user