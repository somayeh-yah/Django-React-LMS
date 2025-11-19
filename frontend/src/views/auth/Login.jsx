import apiInstance from "../../utils/axios";
import { login } from "../../utils/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import BaseHeader from "../base-components/BaseHeader";
import BaseFooter from "../base-components/BaseFooter";
import AuthCTA from "../../components/auth/AuthCTA";
import Input from "../../components/input/Input";
import { useAlert } from "../../utils/AlertContext";

export default function Login() {
  const navigate = useNavigate();
  //get showAlert from Context
  const { showAlert } = useAlert();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = async (submittedValues) => {
    const { email, password } = submittedValues;
    const { data, error } = await login(email, password);
    console.log("data", data);
    console.log("error", error);

    if (error) {
      showAlert("error", {
        text: "Login failed, please try again!",
      });
      navigate("/");
    } else {
      // Visa success-alert
      showAlert("success", {
        title: "You are loggd in!",
        text: "Your account is up to set!",
      });
    }
    console.log(formData);
  };

  return (
    <>
      <BaseHeader />
      <section
        className="container d-flex flex-column vh-100 "
        style={{ marginTop: "150px" }}
      >
        <div className="row align-items-center justify-content-center g-0 h-lg-100 py-8">
          <div className="col-lg-5 col-md-8 py-8 py-xl-0">
            <div className="card shadow">
              <div className="card-body p-6">
                {/* Auth header */}
                <AuthCTA />
                {/* Form */}
                <form
                  className="needs-validation"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                >
                  {/* Email */}

                  <div className="mb-3">
                    <Input
                      {...register("email", {
                        required:
                          "Please enter a valid email address, it must include @",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          message:
                            "Please enter a valid email address, it must include @",
                        },
                        minLength: {
                          value: 10,
                          message: "Minimum 10 charachters",
                        },
                        maxLength: {
                          value: 30,
                          message: "Maximum 30 charachters",
                        },
                      })}
                      type="email"
                      placeholder="johndoe@gmail.com"
                    />
                    {errors.email && (
                      <p className="is-invalid " role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  {/* Password */}

                  <div className="m-0">
                    <Input
                      {...register("password", {
                        required: "Please, enter a valid password.",
                        minLength: {
                          value: 8,
                          message: "Minimum 8 charachters.",
                        },
                        maxLength: {
                          value: 30,
                          message: "Maximum 30 charachters.",
                        },
                      })}
                      type="password"
                      placeholder="**************"
                    />
                    {errors.password && (
                      <p className="is-invalid ">{errors.password.message}</p>
                    )}
                    <Link to="#" className="forgot-link text-nowrap ms-2">
                      Forgot password?
                    </Link>
                  </div>
                  {/* Checkbox */}
                  <div className="d-flex justify-content-between mb-1 p-0 mt-4">
                    <div className="form-check d-flex align-items-center p-0 ">
                      <Input
                        {...register("remember", {
                          required: true,
                        })}
                        id="remember"
                        type="checkbox"
                      />
                      <Link to="#" className="form-link text-nowrap ">
                        Remember me
                      </Link>
                    </div>
                  </div>
                  <div>
                    {/* button */}
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-primary w-100 py-2 rounded-4"
                      >
                        {isSubmitting ? "Loading..." : ""}
                        Sign in <i className="fas fa-sign-in-alt"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BaseFooter />
    </>
  );
}
