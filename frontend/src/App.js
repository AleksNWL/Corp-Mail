import React from "react";
import UserList from "./components/UserList";
import EmailForm from "./components/EmailForm";

function App() {
  return (
    <div>
      <h1>Corporate Email System</h1>
      <EmailForm />
      <UserList />
    </div>
  );
}

export default App;
