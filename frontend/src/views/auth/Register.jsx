import { useForm } from "react-hook-form";
import { register as registerUser } from "../../utils/auth";
import BaseHeader from "../base-components/BaseHeader";
import BaseFooter from "../base-components/BaseFooter";
import Input from "../../components/input/Input";
import AuthCTA from "../../components/auth/AuthCTA";
import { useAlert } from "../../utils/AlertContext";
import "../../App.css";

import { useNavigate, Link } from "react-router-dom";

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

      <section
        className="container d-flex flex-column vh-100"
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
                  {/* Username */}
                  <div className="mb-3">
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
                    />
                    {errors.fullName && (
                      <p className="is-invalid ">{errors.fullName.message}</p>
                    )}
                  </div>
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
                  <div className="mb-3">
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
                  </div>
                  <div className="mb-3">
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
                      <Link to="#" className="form-link text-nowrap">
                        Remember me
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-primary w-100 py-2 rounded-4"
                      >
                        Sign Up <i className="fas fa-user-plus"></i>
                        {isSubmitting ? "Loading..." : ""}
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

export default Register;
