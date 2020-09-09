import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from "../actions";
import UserHeader from "./UserHeader";

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle icon user"/>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    </div>
                    <UserHeader userId={post.userId}/>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="ui divided list relaxed">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts
})

export default connect(
    mapStateToProps,
    {
        fetchPosts
    }
)(PostList);
