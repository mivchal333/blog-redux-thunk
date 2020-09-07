import React from 'react';
import {connect} from 'react-redux';
import PostList from "./PostList";

const App = props => {
    return (
        <div className="ui container">
            <PostList/>
        </div>
    );
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(App);
