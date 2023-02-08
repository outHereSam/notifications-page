import { useState } from "react";

import Header from "./components/Header";
import Notifications from "./components/Notifications";

function App() {
  const [notifications, setNotifications] = useState(3);

  return (
    <div className="App">
      <Header
        notifications={notifications}
        resetNotifs={() => setNotifications(0)}
      />
      <Notifications notifications={notifications} />
    </div>
  );
}

export default App;
