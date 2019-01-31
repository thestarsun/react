import React, { Component } from 'react';
import { getDataFromAPI, deleteUserByID, showMore } from '../actions'
import { connect } from 'react-redux'
import User from '../components/User';
const UserContainer = class extends Component {

	componentDidMount () {
		const {dispatch, state} = this.props;
		getDataFromAPI(dispatch, state, "INITIAL_DATA");
	};

	render () {
		const {users} = this.props.state;
		const userList = users.length && users.map((user) => {
				return (
					<User user={user} key={user.id} onDeleteUserAction = {this.onDeleteUserAction.bind(this, user.id)} />
				)
			});

		return (
			<div className="bg-dark text-white px-5 text-center">
				<h3 className="py-4">Github users </h3>
				<div>
					{userList}
				</div>
				<div>
					<button type="button" className="btn btn-primary my-4" onClick={this.onShowMore}>Show more</button>
				</div>
			</div>
		)
	};

	onDeleteUserAction = (id) => {
		const {dispatch, state} = this.props;
		deleteUserByID(dispatch, state, id);
	};

	onShowMore = () => {
		const {dispatch, state} = this.props;
		showMore(dispatch, state);
	}
};

const mapStateToProps = (state) => {
	return {
		state: state
	}
};

export default connect(mapStateToProps)(UserContainer);