import { Route, Routes } from "react-router-dom";
import Footer from "./common/components/Footer";
import Header from "./common/components/Header";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import  Profile  from "./pages/Profile";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<SignIn />} />

        <Route
          path="/home"
          element={
            <>
              {" "}
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/profile"
          element={
            <>
              <Header />
              <Profile />
              <Footer />
            </>
          }
        />
        <Route path="/dashboard" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
