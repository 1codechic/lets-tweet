import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import './index.css';

function Tweet({ tweet }) {
    return (
        <div className="tweet">
            <Avatar hash={tweet.gravatar}/>
            <div className="content">
                <Author author={tweet.author}/> <Time time={tweet.time}/>
                <Message text={tweet.message} />
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

function Avatar({ hash }) {
    const url = `https://www.gravatar.com/avatar/${hash}`
    return (
        <img src= {url} className="avatar" alt="avatar" />
    );
}

function Message( {text}) {
    return (
        <div className="meessage">
            {text}
        </div>
    )
}

function Author({author}) {
    const {name, handle} = author;
    return (
        <span className="author">
        <span className="name">Tiffany McElrath</span>
        <span className="handle">@1codechic</span>
        </span>
    );
}

const Time =({time}) => {
    const timeString = moment(time).fromNow();
    return (
        <span className="time">
            {timeString}
        </span>
    );
};

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

const testTweet = {
    message: "Learning about props in React",
    gravatar: "xyz",
    author: {
        handle: "1codechic",
        name: "Tiffany McElrath"
    },
    likes: 2,
    retweets: 0,
    timestamp: "2019-11-19 15:30:23"
};

ReactDOM.render(<Tweet tweet={testTweet}/>, document.querySelector('#root'));