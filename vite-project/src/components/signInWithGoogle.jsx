import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import { FcGoogle } from "react-icons/fc";
function SignInwithGoogle() {
  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      const user = result.user;
      if (result.user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          lastName: "",
        });
        toast.success("User logged in Successfully", {
          position: "top-center",
        });
        window.location.href = "/profile";
      }
    });
  }
  return (
    <div>
        <button className="bg-white border border-[#63C625] border-2 text-black font-bold py-3 px-4 rounded w-full mb-2 flex" onClick={googleLogin}>
            <FcGoogle className="text-blue w-7 h-7 ml-3 mr-6" />
            Sign in with Google
          </button>
      </div>
  );
}
export default SignInwithGoogle;