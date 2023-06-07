import React from "react";
import "./App.css";
import { useState } from "react";

const TwitterFollowCard = ({ userName = "unknown", children = "unknown",previousFollowing=false}) => {
  const [isFollowing, setisFollowing] = useState(previousFollowing);
  const handleClick = () => {
    setisFollowing(!isFollowing);
  };
  const text = isFollowing ? "Following" : "Follow";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          src={`https://unavatar.io/${userName}`}
          alt="avatar hades"
          className="tw-followCard-avatar"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName"> @{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Unfollow</span>
        </button>
      </aside>
    </article>
  );
};

export default TwitterFollowCard;
