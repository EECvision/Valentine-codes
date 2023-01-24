import { useEffect, useState } from "react";
import { auth } from "./firebaseConfig";
import { useDispatch } from "react-redux";
import { setAuthenticated, setUser } from "../src/Redux/loginSlice";

export const login = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const useFirebaseAuth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setIsLoading(true);
      if (user) {
        dispatch(setAuthenticated(true));
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
          })
        );
      } else {
        dispatch(setAuthenticated(false));
        dispatch(setUser(null));
      }
      setIsLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return { isLoading };
};
