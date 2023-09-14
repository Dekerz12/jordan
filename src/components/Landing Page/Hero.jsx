import { shoe1 } from "../../assets/images";
import Button from "../../ui/Button";
import useModal from "../../context/useModal";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Modal from "../../ui/Modal";
import { Toaster } from "react-hot-toast";
function Hero() {
  const { toggleModal, status } = useModal();
  return (
    <>
      <section className=" bg-gray-50 dark:bg-gray-900 dark:text-gray-50">
        <div className="container absolute inset-0 flex flex-col items-center justify-center p-6 m-auto pt-36 lg:pt-0 lg:flex-row lg:justify-around">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold sm:text-6xl">
              Customize <span className="dark:text-blue-500">Jordan </span>Shoes
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Want to make Jordan Shoes design your own?
              <br />
              Join Us Today!
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Button type={"primary"} onClick={toggleModal}>
                Get Started
              </Button>
            </div>
          </div>
          <div className="mt-8 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={shoe1}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 "
            />
          </div>
        </div>
      </section>
      <Toaster />
      <Modal element={status === "login" ? <LoginForm /> : <SignUpForm />} />
    </>
  );
}

export default Hero;
