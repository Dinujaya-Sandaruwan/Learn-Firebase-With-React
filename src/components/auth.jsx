import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
	createUserWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";

const Auth = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// console.log(auth?.currentUser?.email);
	// console.log(auth?.currentUser?.photoURL);

	const signIn = async () => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			setEmail("");
			setPassword("");
		} catch (err) {
			console.error(err);
		}
	};

	const signInWithGoogle = async () => {
		try {
			await signInWithPopup(auth, googleProvider);
		} catch (err) {
			console.error(err);
		}
	};
	const logOut = async () => {
		try {
			signOut(auth);
		} catch (err) {
			console.error(err);
		}
	};
	return (
		<>
			<div className="mb-3">
				<label htmlFor="exampleInputEmail1" className="form-label">
					Email address
				</label>
				<input
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<div id="emailHelp" className="form-text">
					We'll never share your email with anyone else.
				</div>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleInputPassword1" className="form-label">
					Password
				</label>
				<input
					type="password"
					className="form-control"
					id="exampleInputPassword1"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>

			<button className="btn btn-primary" onClick={signIn}>
				Submit
			</button>
			<button className="btn btn-warning" onClick={signInWithGoogle}>
				Sign in with Google
			</button>
			<button className="btn btn-danger" onClick={logOut}>
				Logout
			</button>
		</>
	);
};

export default Auth;
