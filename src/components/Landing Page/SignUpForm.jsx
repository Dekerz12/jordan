import { useForm } from "react-hook-form";
import { useSignUp } from "../../auth/useSignUp";
import useModal from "../../context/useModal";
function SignUpForm() {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const { loginModal } = useModal();

  const { signUpMutation } = useSignUp();

  const onSubmit = (data) => {
    const user = {
      ...data,
      avatar: `https://ui-avatars.com/api/?name=${data.first_name}+${data.last_name}`,
    };

    signUpMutation(user);
  };

  return (
    <div className="flex flex-col w-full p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign up</h1>
        <p className="text-sm dark:text-gray-400">Create an account</p>
      </div>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
        data-bitwarden-watching="1"
      >
        {(errors.email ||
          errors.first_name ||
          errors.last_name ||
          errors.password) &&
          errors.password?.type !== "pattern" && (
            <span className="text-xs text-red-500">
              All inputs are required
            </span>
          )}
        {errors.password?.type === "pattern" && (
          <span className="text-xs text-red-500">
            Minimum eight characters, at least one letter and one number
          </span>
        )}
        <div className="space-y-4">
          <div className="flex gap-4">
            <div>
              <label htmlFor="first_name" className="block mb-2 text-sm">
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="First Name"
                autoComplete="off"
                {...register("first_name", { required: true })}
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <label htmlFor="last_name" className="block mb-2 text-sm">
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Last Name"
                autoComplete="off"
                {...register("last_name", { required: true })}
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
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
              <label htmlFor="password" className="text-sm">
                Password
              </label>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              {...register("password", {
                required: true,
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              })}
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold text-white bg-blue-500 rounded-md"
            >
              Sign Up
            </button>
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-400">
            Already have an account{" "}
            <span
              className="cursor-pointer hover:underline dark:text-violet-400"
              onClick={() => {
                loginModal();
              }}
            >
              Sign In
            </span>
            .
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
