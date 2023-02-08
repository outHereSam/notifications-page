export default function Header({ notifications, resetNotifs }) {
  return (
    <header>
      <div className="header-container">
        <h1>
          Notifications{" "}
          <span
            style={{ display: notifications === 0 ? "none" : "inline-block" }}
            class="notif-number">
            {notifications}
          </span>
        </h1>
        <button onClick={resetNotifs}>Mark all as read</button>
      </div>
    </header>
  );
}
