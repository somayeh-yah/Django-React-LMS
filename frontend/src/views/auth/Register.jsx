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
import { icons } from "../../utils/icons";

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
      checkbox: "",
    },
  });

  const onSubmit = async (submittedValues) => {
    const { fullName, email, password, password2 } = submittedValues;
    try {
      const res = await registerUser(fullName, email, password, password2);
      if (res?.error) {
        showAlert("error", {
          text: "user with this email already exists. Please try again.",
        });
        return;
      }
      showAlert("success", {
        title: "Registration successful!",
        text: "Your account has been set up!",
      });
      navigate("/dashboard/");
    } catch (err) {
      showAlert("error", {
        text: err?.error || "Something went wrong. Please try again.",
      });
    }
  };
  return (
    <>
      <BaseHeader />
      <div className="py-15 lg:py-40 flex justify-center w-full h-full">
        <div className="mx-auto w-full lg:px-20 ">
          <div className="flex flex-col mx-auto sm:w-[600px] max-h-[auto] lg:flex-row lg:w-full rounded-sm shadow-sm overflow-hidden">
            {/* IMAGE BACKGROUND */}
            <div
              className="w-full min-h-[350px] lg:min-h-full lg:w-1/2 flex flex-col items-center justify-center xs:py-0 sm:py-2 px-4 bg-no-repeat bg-cover bg-center"
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
            <div className="w-full lg:w-1/2 px-3 sm:py-16 sm:px-12  lg:py-30">
              {/* Auth header */}
              <AuthCTA />
              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="grid gap-3 mb-6 lg:px-6">
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
                      <p className="text-error text-sm ms-1">
                        {errors.fullName.message}
                      </p>
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
                      <p className="text-error text-sm ms-1" role="alert">
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
                      <p className="text-error text-sm ms-1">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                  {/* Password- 2 */}
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
                      <p className="text-error text-sm ms-1">
                        {errors.password2.message}
                      </p>
                    )}
                  </div>
                  {/* Checkbox */}
                  <div className="d-flex justify-content-start mb-4 p-0">
                    <div className="form-check p-0">
                      <Input
                        {...register("remember", {
                          required: false,
                        })}
                        id="remember"
                        type="checkbox"
                      />
                    </div>
                    <div>
                      <Link
                        to="#"
                        className="ml-1.5 text-sm text-body dark:text-body font-semibold flex justify-center items-baseline"
                      >
                        Remember me
                      </Link>
                    </div>
                  </div>
                  {/* BUTTON SECTION */}

                  <div className="flex  ">
                    <button
                      type="submit"
                      className="button w-full py-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="inline-flex animate-spin [animation-duration:2s]">
                          {icons.loading}
                        </span>
                      ) : (
                        <>Sign up {icons.register}</>
                      )}
                    </button>
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
