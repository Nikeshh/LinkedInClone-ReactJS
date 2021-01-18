import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Post.css"

function Post({ name, description, message, photoUrl }) {
    return <div className="post">
        <div className="post__header">
            <Avatar />
            <div className="post__info">
                <h2>Nikeshh Baskaran</h2>
                <p></p>
            </div>
        </div>
        <div className="post__body">
            <p>Message comes here</p>
        </div>
    </div>;
}

export default Post;
