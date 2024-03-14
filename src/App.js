import { Routes, Route } from "react-router-dom";

// Components
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigatioin.component";
import Authentication from "./routes/authentication/authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
