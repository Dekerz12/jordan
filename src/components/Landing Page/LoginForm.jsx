import { useForm } from "react-hook-form";
import { useSignIn } from "../../auth/useSignIn";
import useModal from "../../context/useModal";
function LoginForm() {
  const registerModal = useModal((state) => state.registerModal);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const { signInMutation } = useSignIn();
  const onSubmit = (data) => {
    signInMutation(data);
  };
  // useEffect(() => {
  //   if (signInError)
  //     setError(
  //       "email",
  //       { type: "manual", message: "incorrect" },
  //       { shouldFocus: true }
  //     );
  // }, [signInError, setError]);
  return (
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign in</h1>
        <p className="text-sm dark:text-gray-400">
          Sign in to access your account
        </p>
      </div>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-12"
        data-bitwarden-watching="1"
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email
            </label>
            {errors.email && (
              <span className="text-xs text-red-500">
                {errors.email.type === "manual"
                  ? "Incorrect Username or Password"
                  : "This field is required"}
              </span>
            )}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              autoComplete="off"
              {...register("email", { required: true })}
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <div className="flex flex-col">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                {errors.password && (
                  <span className="text-xs text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <span
                className={`text-xs hover:underline dark:text-gray-400 cursor-pointer`}
              >
                Forgot password?
              </span>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              {...register("password", { required: true })}
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md bg-blue-500 text-white"
            >
              Sign in
            </button>
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-400">
            Already have an account{" "}
            <span
              className="hover:underline dark:text-violet-400 cursor-pointer"
              onClick={() => {
                registerModal();
              }}
            >
              Sign Up
            </span>
            .
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
