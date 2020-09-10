import React, {Component} from 'react';
import {connect} from "react-redux";

class UserHeader extends Component {
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
export default connect(mapStateToProps)(UserHeader);