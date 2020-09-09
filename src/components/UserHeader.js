import React, {Component} from 'react';
import {fetchUser} from "../actions";
import {connect} from "react-redux";

class UserHeader extends Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }

    render() {
        if (!this.props.user) {
            return <div>Loading</div>
        }
        return (
            <div>
                {this.props.user.name}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    user: state.users.find(user => user.id === props.userId)
})
export default connect(mapStateToProps, {fetchUser})(UserHeader);