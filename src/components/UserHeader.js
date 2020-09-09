import React, {Component} from 'react';
import {fetchUser} from "../actions";
import {connect} from "react-redux";

class UserHeader extends Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }

    render() {
        const user = this.props.users.find(user => user.id === this.props.userId);
        if (!user) {
            return <div>Loading</div>
        }
        return (
            <div>
                {user.name}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.users
})
export default connect(mapStateToProps, {fetchUser})(UserHeader);