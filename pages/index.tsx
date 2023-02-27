import * as React from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { userService } from "services";
import { Url } from "next/dist/shared/lib/router/router";

function Login() {
  const router = useRouter();

  React.useEffect(() => {
    // redirect to home if already logged in
    if (userService.userValue) {
      router.push("/");
    }
  }, []);

  // form validation rules
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, setError, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit({ username, password }: any) {
    return userService
      .login(username, password)
      .then(() => {
        // get return url from query parameters or default to '/'
        const returnUrl: string[] | string = router.query.returnUrl || "/";
        router.push(returnUrl as Url);
      })
      .catch((error: { message: any }) => {
        setError("apiError", { message: error.message || error });
      });
  }

  const userError: string = errors.username?.message as string;
  const passwordError: string = errors.password?.message as string;
  const errorMessage = errors.apiError?.message as string;

  return (
    <div className="col-md-6 offset-md-3 mt-5">
      <div className="alert alert-info">
        Username: test
        <br />
        Password: test
      </div>
      <div className="card">
        <h4 className="card-header">Login</h4>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                {...register("username")}
                className={`form-control ${
                  errors.username ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{userError}</div>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                {...register("password")}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{passwordError}</div>
            </div>
            <button
              disabled={formState.isSubmitting}
              className="btn btn-primary"
            >
              {formState.isSubmitting && (
                <span className="spinner-border spinner-border-sm mr-1"></span>
              )}
              Login
            </button>
            {errors.apiError && (
              <div className="alert alert-danger mt-3 mb-0">{errorMessage}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
