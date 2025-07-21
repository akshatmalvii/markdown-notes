"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetStatus, setResetStatus] = useState(null); // 'success', 'error', null
  const [error, setError] = useState(null);

  const { login, signup, resetPasswordEmail } = useAuth();
  const router = useRouter();

  const cantAuth = !email.includes("@") || password.length < 6;

  async function handleAuthUser() {
    // check if email is legit and password is acceptable
    if (cantAuth) {
      return;
    }
    setIsAuthenticating(true);

    try {
      if (isRegister) {
        // then we need to register a user
        await signup(email, password);
      } else {
        // otherwise they're wanting to login
        await login(email, password);
      }
      // so if we get here with no error, then we've authenticated, so push to notes page
      router.push("/notes");
    } catch (err) {
      console.log(err.message);
      // challenge for you - add an error state that is conditionally rendered if there is an error and shows the error message
    } finally {
      setIsAuthenticating(false);
    }
  }

  async function handlePasswordReset() {
    if (!resetEmail.includes("@")) {
      setResetStatus("error");
      setError("Please enter a valid email address");
      return;
    }

    try {
      await resetPasswordEmail(resetEmail);
      setResetStatus("success");
      setError(null);
    } catch (err) {
      console.log(err.message);
      setResetStatus("error");
      setError(err.message);
    }
  }
  return (
    <>
      <div className="login-container">
        <h1 className="text-gradient">MDNOTES</h1>
        <h2>Organized note taking made easy</h2>
        <p>
          Build your very own archinve of easily navigated and indexed
          information and notes.
        </p>
        <div className="full-line"></div>
        <h6>{isRegister ? "Create an account" : "Log in"}</h6>
        <div>
          <p>Email</p>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            placeholder="Enter your email address"
          />
        </div>
        <div>
          <p>Password</p>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="*******"
          />
        </div>
        <button
          onClick={handleAuthUser}
          disabled={cantAuth || isAuthenticating}
          className="submit-btn"
        >
          <h6>{isAuthenticating ? "Submitting..." : "Submit"}</h6>
        </button>
        <div className="secondary-btns-container">
          <button
            onClick={() => {
              setIsRegister(!isRegister);
            }}
            className="card-button-secondary"
          >
            <small>{isRegister ? "Log in" : "Sign up"}</small>
          </button>
          <button
            onClick={() => {
              setShowResetModal(true);
              setResetEmail(email); // Pre-fill with the email they entered
              setError(null);
            }}
            className="card-button-secondary"
          >
            <small>Forgot password?</small>
          </button>
        </div>
        <div className="full-line"></div>
        <footer>
          <a
            target="_blank"
            href="https://github.com/akshatmalvii/markdown-notes"
          >
            <h6>@akshatmalvii</h6>
            <i className="fa-brands fa-github"></i> {/* font awsome */}
          </a>
        </footer>
      </div>
      {/* Password Reset Modal */}
      {showResetModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Reset Password</h3>
            <p>Enter your email to receive a password reset link</p>

            <input
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              type="email"
              placeholder="Your email address"
            />

            {resetStatus === "success" && (
              <div className="modal-status success">
                Password reset email sent! Check your inbox.
              </div>
            )}
            {resetStatus === "error" && error && (
              <div className="modal-status error">{error}</div>
            )}

            <div className="modal-buttons">
              <button
                onClick={() => {
                  setShowResetModal(false);
                  setResetStatus(null);
                  setError(null);
                }}
                className="card-button-secondary"
              >
                Cancel
              </button>
              <button
                onClick={handlePasswordReset}
                className="submit-btn"
                disabled={!resetEmail.includes("@")}
              >
                Send Reset Link
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
