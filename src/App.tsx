import Navbar from "./components/layout/Navbar";
import logo from ".//assets//resized_logo_UQww2soKuUsjaOGNB38o.png";

import Login from "./pages/login";

function App() {
  return (
    <>
      <Navbar logoUrl={logo} />

      <Login />
    </>
  );
}

export default App;
