import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from "../actions";

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                Post List
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
    {
        fetchPosts
    }
)(PostList);