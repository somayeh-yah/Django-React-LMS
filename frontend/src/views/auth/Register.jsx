import { useForm } from "react-hook-form";
import { register as registerUser } from "../../utils/auth";
import Input from "../../components/input/Input";
import AuthCTA from "../../components/auth/AuthCTA";
import { useAlert } from "../../utils/AlertContext";
import formImage from "../../assets/images/form-img.png";
import "../../App.css";
import { useNavigate, Link } from "react-router-dom";
import BaseHeader from "../base-components/BaseHeader";
import BaseFooter from "../base-components/BaseFooter";

function Register() {
  const navigate = useNavigate();
  //get showAlert from Context
  const { showAlert } = useAlert();
  // we use useForm from react-hook-form library, for simplify validations and manage and send form data
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitting, errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      password2: "",
    },
  });

  const onSubmit = async (submittedValues) => {
    const { fullName, email, password, password2 } = submittedValues;
    await registerUser(fullName, email, password, password2);
    if (errors) {
      showAlert("error", {
        text: "user with this email already exists. Please try again.",
      });
    } else {
      // Visa fel-alert

      showAlert("success", {
        title: "Registration successful!",
        text: "Your account has been set up!",
      });
      navigate("/");
    }
  };
  return (
    <>
      <BaseHeader />
      <div className="py-15 lg:py-40 flex justify-center w-full h-full">
        <div className="mx-auto w-full lg:px-20">
          <div className="flex flex-col w-full lg:flex-row lg:w-full bg-light rounded-sm shadow-sm mx-auto overflow-hidden">
            {/* IMAGE BACKGROUND */}
            <div
              className="w-full min-h-[350px] lg:min-h-full lg:w-1/2 flex flex-col items-center justify-center py-2 px-4 bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage: `url(${formImage})`,
              }}
              aria-hidden="true"
              alt="view over stockholm"
              loading="lazy"
            >
              {/* <h1 className="text-sans text-4xl bg-surface text-heading px-14">
                Welcome
              </h1> */}
            </div>
            {/* FORM */}
            <div className="w-full lg:w-1/2 py-16 px-12">
              {/* Auth header */}
              <AuthCTA />
              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="grid gap-3 mb-6">
                  {/* Username */}
                  <div>
                    <Input
                      {...register("fullName", {
                        required: "Use only letters and spaces",
                        pattern: {
                          value: /^[a-zA-ZåäöÅÄÖ\s'-]+$/,
                          message: "Use only letters and spaces",
                        },
                        minLength: {
                          value: 3,
                          message: "Minimum 3 charachters",
                        },
                        maxLength: {
                          value: 50,
                          message: "Minimum 50 charachters",
                        },
                      })}
                      type="text"
                      id="fullName"
                      placeholder="John Doe"
                      label="Full name"
                    />
                    {errors.fullName && (
                      <p className="is-invalid ">{errors.fullName.message}</p>
                    )}
                  </div>
                  <div>
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
                      label="Enter your email address"
                    />
                    {errors.email && (
                      <p className="is-invalid " role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Password */}
                  <div>
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
                      label="Enter your password"
                    />
                    {errors.password && (
                      <p className="is-invalid ">{errors.password.message}</p>
                    )}
                  </div>
                  <div>
                    <Input
                      {...register("password2", {
                        required: "Please enter the requierd password.",
                        minLength: {
                          value: 8,
                          message: "To short.",
                        },
                        maxLength: {
                          value: 20,
                          message: "Value to long",
                        },
                        validate: (value) =>
                          value === getValues("password") ||
                          "The passwords do not match.",
                      })}
                      type="password"
                      placeholder="**************"
                      label="Confirm password"
                    />
                    {errors.password2 && (
                      <p className="is-invalid">{errors.password2.message}</p>
                    )}
                  </div>
                  {/* Checkbox */}
                  <div className="d-flex justify-content-start mb-4 p-0">
                    <div className="form-check p-0">
                      <Input
                        {...register("remember", {
                          required: true,
                        })}
                        id="remember"
                        type="checkbox"
                      />
                    </div>
                    <div>
                      <Link
                        to="#"
                        className="ml-1.5 text-sm text-accent-2 dark:text-body font-semibold flex justify-center items-baseline"
                      >
                        Remember me
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-accent-2 hover:bg-accent-2/95 py-3 text-center text-light"
                      >
                        Sign Up <i className="fas fa-user-plus"></i>
                        {isSubmitting ? "Loading..." : ""}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <BaseFooter />
    </>
  );
}

export default Register;
