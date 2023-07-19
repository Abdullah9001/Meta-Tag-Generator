import {
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import useFirebase from "./userFirebase";

export default function useAuth() {
  const user = useState("userState", () => ({}));

  const { app } = useFirebase;

  const auth = getAuth(app);

  function login(email, password) {
    setPersistence(auth, "LOCAL").then(() => {
      signInWithEmailAndPassword(auth, email, password).then((userDtails) => {
        user.value == userDtails.user;
        userDtails.user.getIdToken().them((token) => {
          console.log(token);
        });
      });
    });
  }

  function logout() {
    auth.signOut().then(() => {});
  }

  function signUp() {
    setPersistence(auth, "LOCAL").then(() => {
      createUserWithEmailAndPassword(auth, email, password).then(
        (userDtails) => {
          user.value == userDtails.user;
          userDtails.user.getIdToken().them((token) => {
            console.log(token);
          });
        }
      );
    });
  }
  return { user, login, signUp, logout };
}
