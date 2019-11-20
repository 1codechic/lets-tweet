import React from "react";
import ReactDOM from "react-dom";
import './index.css';

function Tweet() {
    return (
        <div className="tweet">
            <Avatar />
            <div className="content">
                <Author /> <Time />
                <Message />
            <div className="buttons">
                <ReplyButton />
                <RetweetButton />
                <LikeButton />
                <MoreOptions />
            </div>
            </div>
            
        </div>
    );
}

function Avatar() {
    return (
        <img src="https://www.gravatar.com/avatar/nothing" className="avatar" alt="avatar" />
    );
}

function Message() {
    return (
        <div className="meessage">
            This is a tweet message.
        </div>
    )
}

function Author() {
    return (
        <span className="author">
        <span className="name">Tiffany McElrath</span>
        <span className="handle">@1codechic</span>
        </span>
    );
}

const Time = () => (
    <span className="time">3h ago</span>
);

const ReplyButton = () => (
    <i className="fa fa-reply reply-button" />
);

const RetweetButton = () => (
    <i className="fa fa-retweet retweet-button" />
)

const LikeButton = () => (
    <i className="fa fa-heart like-button" />
)

const MoreOptions = () => (
    <i className="fa fa-ellipsis-h more-options-button" />
)

ReactDOM.render(<Tweet/>, document.querySelector('#root'));