import { Link } from "react-router-dom";
import Logo from "../../assets/opinix-white.png";
import "../../styles/components/Navbar.css";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";

const Navbar = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [initial, setInitial] = useState("");
  const [email, setEmail] = useState("");

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setInitial(user.email.charAt(0).toUpperCase());
      setSignedIn(true);
      setEmail(user.email);
    }
  });

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Successfully signed out")
        setSignedIn(false);
      })
      .catch((error) => {
        console.log(error.code, error.message);
        toast.error("Error occured! Couldn't sign out")
      });
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-left-section">
          <Link to="/">
            <div>
              <img className="logo" src={Logo} alt="Logo" />
            </div>
          </Link>
        </div>
        <div className="nav-right-section">
          <div className="nav-links">
            <Link className="nav-link" to="/history">
              History
            </Link>
            <Link className="nav-link" to="/analyze">
              Analyze
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </div>
          
          <div className={signedIn ? "nav-show-icon" : "nav-hide-icon"}>
            {initial}
          </div>

          <div className="nav-email-popup">{email}</div>
          <div>
            {signedIn ? (
              <button className="nav-button-logout" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="nav-button-login"> Login </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
