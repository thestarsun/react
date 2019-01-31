const reducer = (state, action) => {
	switch (action.type) {
		case 'INITIAL_DATA':
			console.log(state.page + state.limit);
			return {
				...state,
				page: state.page + state.limit * 2,
				users: action.users
			};
		case 'SHOW_MORE':
			console.log(state.page + state.limit);
			return {
				...state,
				page: state.page + state.limit * 2,
				users: [].concat(state.users, action.users)
			};
		case 'DELETE':
			return {
				...state,
				users: state.users.filter(user => user.id !== action.userId)
			};
		default:
			return state;
	}
};
export default reducer;
