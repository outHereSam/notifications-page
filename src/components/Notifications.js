import mark from "../assets/images/avatar-mark-webber.webp";
import angela from "../assets/images/avatar-angela-gray.webp";
import jacob from "../assets/images/avatar-jacob-thompson.webp";
import rizky from "../assets/images/avatar-rizky-hasanuddin.webp";
import kimberly from "../assets/images/avatar-kimberly-smith.webp";
import chess from "../assets/images/image-chess.webp";
import nathan from "../assets/images/avatar-nathan-peterson.webp";
import anna from "../assets/images/avatar-anna-kim.webp";

const Notifications = () => {
  return (
    <div className="notifs-section">
      {/* Mark Webber */}
      <div className="notification unread">
        <img src={mark} alt="Mark Webber" />

        <div className="info">
          <p>
            <span className="name">Mark Webber</span> reacted to your recent
            post <span className="post">My first tournament today!</span>{" "}
            <span className="unread-dot"></span>
          </p>
          <p className="timestamp">1m ago</p>
        </div>
      </div>

      {/* Andela Gray */}
      <div className="notification unread">
        <img src={angela} alt="Angela Gray" />

        <div className="info">
          <p>
            <span className="name">Angela Gray</span> followed you{" "}
            <span className="unread-dot"></span>
          </p>
          <p className="timestamp">5m ago</p>
        </div>
      </div>

      {/* Jacob Thompson */}
      <div className="notification unread">
        <img src={jacob} alt="Jacob Thompson" />

        <div className="info">
          <p>
            <span className="name">Jacob Thompson</span> has joined your group{" "}
            <span className="group">Chess Club</span>
            <span className="unread-dot"></span>
          </p>
          <p className="timestamp">1 day ago</p>
        </div>
      </div>

      {/* Rizky Hasanuddin */}
      <div className="notification">
        <img src={rizky} alt="Rizky Hasanuddin" />

        <div className="info">
          <p>
            <span className="name">Rizky Hasanuddin</span> sent you a private
            message
          </p>
          <p className="timestamp">5 days ago</p>
          <div className="message">
            Hello, thanks for setting up the Chess Club. I've been a member for
            a few weeks now and I'm already having lots of fun and improving my
            game.
          </div>
        </div>
      </div>

      {/* Kimberly Smith */}
      <div className="notification">
        <img src={kimberly} alt="Kimberly Smith" />

        <div className="info">
          <p>
            <span className="name">Kimberly Smith</span> commented on your
            picture message
          </p>
          <p className="timestamp">1 week ago</p>
        </div>

        <img className="commented-image" src={chess} alt="chess" />
      </div>

      {/* Nathan Peterson */}
      <div className="notification">
        <img src={nathan} alt="Nathan Peterson" />

        <div className="info">
          <p>
            <span className="name">Nathan Peterson</span> reacted to your recent
            post{" "}
            <span className="post">
              5 end-game strategies to increase your win rate
            </span>
          </p>
          <p className="timestamp">2 weeks ago</p>
        </div>
      </div>

      {/* Anna Kim */}
      <div className="notification">
        <img src={anna} alt="Anna Kim" />

        <div className="info">
          <p>
            <span className="name">Anna Kim</span> left the group{" "}
            <span className="group">Chess Club</span>
          </p>
          <p className="timestamp">2 weeks ago</p>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
