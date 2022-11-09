import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Nav from "./routes/nav/nav.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        {/*using index=true is when show the local:3000 the nest route will show the same time */}
        <Route index={true} element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
