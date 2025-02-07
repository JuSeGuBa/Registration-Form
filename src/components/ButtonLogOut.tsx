import "../styles/buttonLogOut.css";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { TbLogin } from "react-icons/tb";

const LogOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/", { replace: true });
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      console.log("Session closed successfully");
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  return (
    <button className="LogOut" onClick={handleLogOut} title="Log Out">
      <TbLogin />
    </button>
  );
};

export default LogOut;
