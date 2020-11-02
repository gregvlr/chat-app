import React from "react";
import Contact from "./Components/Contact";
import ContactList from "./Components/ContactList";

function App() {
  return (
    <div className="App">
      <Contact
        avatar="https://randomuser.me/api/portraits/women/45.jpg"
        name="Christine Allen"
        online={true}
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/women/71.jpg"
        name="Tanya Watkins"
        online={false}
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/women/43.jpg"
        name="Lauren Moreno"
        online={true}
      />
      <ContactList />
    </div>
  );
}

export default App;
