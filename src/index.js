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
                <RetweetButton count={tweet.retweets}/>
                <LikeButton count={tweet.likes}/>
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

function getRetweetCount(count) {
    if(count > 0) {
        return (
            <span className="retweet-count">
                {count}
            </span>
        );
    } else {
        return null;
    }
}

const RetweetButton = ({count}) => (
    <span className="retweet-button">
    <i className="fa fa-retweet" />
    {getRetweetCount(count)}
    </span>
);

const LikeButton = ({count}) => (
    <span className="like-button">
    <i className="fa fa-heart" />
    {count > 0 && <span className="like-count">
        {count}
        </span>}
    </span>
);

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
    retweets: 3,
    timestamp: "2019-11-19 15:30:23"
};

ReactDOM.render(<Tweet tweet={testTweet}/>, document.querySelector('#root'));