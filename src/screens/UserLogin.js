import {useState} from 'react'
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Footer from '../components/footerComponents/Footer';
export default function UserLogin(){
  var min = 1;
  var max = 3;
  var rand =  min + (Math.random() * (max-min));
  //const useState = this.setState({ rand });
  const [isNum] = useState(rand);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="sm-none bg-amber-100 h-screen flex items-center">
          <div className="absolute top-5 left-5">
            <Link to="/">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </Link>
          </div>

          <div className="w-full flex justify-center">
            <div className="absolute z-10 top-16 left-0">
              <p className="font-bold mx-5 ">
                  <div className="block">
                    <span className="block rounded-t-lg m-0 pl-4 w-fit text-5xl lg:text-6xl text-amber-100 bg-blue-700">Buy,</span>
                    <span className="block m-0 px-4 w-fit text-5xl lg:text-6xl text-amber-100 bg-blue-700">Sell</span>
                    <span className="block rounded-b-lg rounded-r-lg m-0 p-1 w-fit text-5xl lg:text-6xl text-amber-100 bg-blue-700">& Rent</span>  
                    <span className="block text-blue-700 text-5xl lg:text-6xl">Quickly</span>
                    <span className="block text-blue-700 text-6xl lg:text-7xl">and Easily</span>
                  </div>  
              </p>
            </div>
            <LazyLoadImage
                src={`images/illustrations/${Math.round(isNum)}.png`}
                className="w-full md:max-w-lg xl:max-w-max max-h-fit m-auto object-center object-cover"
                effect="blur"
            />
          </div>
        </div>
        <div className="max-w-full m-auto flex items-center">
          <div  className="overflow-y-auto h-screen w-screen"> 
            <div className="h-fit my-5 sm:my-10 mx-5 md:mx-10 lg:mx-16">
              <div className="sm:hidden relative top-0 left-0 h-full">
                <Link to="/">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="block text-center">
                <p className="block text-5xl font-normal">Log in</p>
                <p className="block py-3 text-xs lg:text-lg font-light">Enter your credentials to access your account</p>
              </div>
              <div className="flex justify-center w-full">
                <button className="w-5/12 m-1  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Google
                </button> 
                <button className="w-5/12 m-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Facebook
                </button>
              </div>
              <div className="py-2 separator text-xs text-gray-400">OR</div>
              <form> 
                  <div className="mb-6">
                    <label for="email" className="block mb-2 text-md font-medium text-gray-700 ">Email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required=""/>
                  </div>
                  <div className="mb-6">
                    <div className="flex justify-between">
                      <label for="password" className="block mb-2 text-md font-medium text-gray-700 ">Password</label>
                      <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline text-sm">Forgot Password?</a>
                    </div> 
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required=""/>
                  </div>
                  <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
                    </div>
                    <div className="ml-3 text-sm">
                      <label for="remember" className="font-medium text-gray-700 ">Remember me</label>
                    </div>
                  </div> 
                  <button type="submit" className="m-auto w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Submit
                  </button>
              </form>
              <div className="py-5">
                <span className="font-medium text-gray-700 ">Don't have an account? <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline text-sm">Signup Here</a></span>
              </div>
              <Footer/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
