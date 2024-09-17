import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Link, Navigate } from "react-router-dom";
import SplashImage from "../../assets/signUp.svg";

// check password validity
// const numbers = /[0-9]/
// const upperCase = /[A-Z]/
// const lowerCase = /[a-z]/
// const nonAlphanumeric = /[^0-9A-Za-z]/

// const strongPassword = (password) =>
//     [numbers, upperCase, lowerCase, nonAlphanumeric].every((rex) => rex.test(password))
//         && password.length >= 8
//         && password.length <= 32

const Signup = () => {
  // const userRef = useRef(); //sets focus on user input when the Signup loads
  // const errRef = useRef();  //sets focus on when there is an error

  // //useState user input field focus and validation
  // const [user, setUser] = useState('') //checks the state of the user input
  // const [validName, setValidName] = useState(false) //checks if the username is valid base on the rules
  // const [userFocus, setUserFocus] = useState(false) //sets sate to focus on user input

  // const [pwd, setPwd] = useState('') //checks the state of the password input
  // const [validPwd, setValidPwd] = useState(false) //checks if the password is valid base on the rules
  // const [pwdFocus, setPwdFocus] = useState(false) //sets sate to focus on password input

  // const [matchPwd, setMatchPwd] = useState('') //checks the state of the matching password input
  // const [validMatch, setValidMatch] = useState(false) //checks if the passwords are matching
  // const [matchPwdFocus, setMatchPwdFocus] = useState(false) //sets sate to focus on matching password input

  // //error handling states
  // const [errorMessage, setErrorMessage] = useState('')
  // const [successMessage, setSuccessMessage] = useState(false)

  // //useEffect to focus on the user input on first pageload
  // useEffect( )

  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      const response = await signup({
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });
      if (
        response.message ===
        "Registration successful, please verify your email."
      ) {
        Navigate("/email-sent?fromRegistration=true");
      }
    } catch (err) {
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <div className="font-sans  min-h-screen flex items-center justify-center bg-slate-200">
      <div className="container mx-auto">
        {/* <div className=" text-start">
          <Link to="/"
            className="w-1/3 px-4 py-2 bg-amber-300 text-black border rounded-full hover:bg-slate-200 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Home</Link>
          
        </div> */}

        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              className="w-full h-auto bg-gray-100 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{
                backgroundImage: `url(${SplashImage})`,
              }}
            ></div>

            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center font-light">Register</h3>
              {error && <p className="text-red-500 text-center">{error}</p>}
              <form
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                onSubmit={handleSubmit}
              >
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm  text-gray-700"
                      htmlFor="firstname"
                    >
                      First Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-xs leading-tight text-gray-700 border rounded  appearance-none focus:outline-none focus:shadow-outline"
                      id="firstname"
                      type="text"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm  text-gray-700"
                      htmlFor="lastname"
                    >
                      Last Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-xs leading-tight text-gray-700 border rounded  appearance-none focus:outline-none focus:shadow-outline"
                      id="lastname"
                      type="text"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm  text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-xs leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm  text-gray-700"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-xs leading-tight text-gray-700 border rounded  appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="password"
                      required
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm  text-gray-700"
                      htmlFor="confirmPassword"
                    >
                      Confirm Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-xs leading-tight text-gray-700 border rounded  appearance-none focus:outline-none focus:shadow-outline"
                      id="confirmPassword"
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="re-enter password"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2  text-black border rounded-full hover:bg-slate-200 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Register Account
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <Link
                    to="/requestpasswordreset"
                    className="inline-block text-sm text-black align-baseline hover:text-blue-800"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="text-center">
                  <Link
                    to="/Login"
                    className="inline-block text-sm text-black align-baseline hover:text-blue-800"
                  >
                    Already have an account? Login!
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
