import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const User = class extends Component {
	render () {
		const {user, onDeleteUserAction} = this.props;
		return (
			<div className="media border rounded my-2 mx-auto p-2 position-relative bg-white text-dark" style={{width:'500px'}}>
				<img src={user.avatar_url} alt="user_profile_pic" className="mr-3 rounded-circle" style={{height:'60px'}}/>
				<div>{user.login}</div>
				<div className="position-absolute" style={{right:'20px'}}>
					<button type="button" className="close" aria-label="Close" onClick={onDeleteUserAction}>
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
			</div>
		)
	}
};

export default User;