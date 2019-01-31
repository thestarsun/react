import axios from 'axios';

const getDataFromAPI = (dispatch, state, actionType) => {
	const gitAPI = axios.create({
		headers: {'Authorization': 'token 075a92f730f92abed8897d4d655212f209a20cc9'}
	});
	//curl -H "Authorization: token 363531ac48bb92b1603bae688cbcb5c15b67188d"  'https://api.github.com/users?since=135&per_page=2&page=2'
	gitAPI.get(`https://api.github.com/users?per_page=${state.limit}&since=${state.page}`)
	.then((response)=>{
		dispatch({
			type: actionType,
			users:response.data
		});
	}, (error) => {
		console.log(error);
	});
};

const deleteUserByID = (dispatch, state, id) => {
	dispatch({
		type: "DELETE",
		userId: id
	});
};

const showMore = (dispatch, state) => {
	getDataFromAPI(dispatch, state, "SHOW_MORE");
};

export {getDataFromAPI, deleteUserByID , showMore};