import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useRef } from "react";
import BaseHeader from "../base-components/BaseHeader";
import BaseFooter from "../base-components/BaseFooter";
import AuthCTA from "../../components/auth/AuthCTA";
import Input from "../../components/Input";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = (formData) => {
    console.log(formData);
  };
  const ref = useRef();

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
                <AuthCTA />
                {/* Form */}
                <form
                  className="needs-validation"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  {/* Email */}

                  <div className="mb-3">
                    <Input
                      {...register("email", {
                        required: true,
                        pattern:
                          "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$i",
                        min: 15,
                        max: 30,
                      })}
                      ref={ref}
                      type="email"
                      placeholder="johndoe@gmail.com"
                    />
                  </div>
                  {/* Password */}

                  <div className="mb-3">
                    <Input
                      {...register("password", {
                        required: true,
                        minLength: 8,
                        maxLength: 20,
                      })}
                      ref={ref}
                      type="password"
                      placeholder="**************"
                    />
                  </div>
                  {/* Checkbox */}
                  <div className="d-lg-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <Input
                        {...register("remember", {
                          required: true,
                        })}
                        ref={ref}
                        id="remember"
                        type="checkbox"
                      />
                    </div>
                    <div>
                      <Link to="/forgot-password/">Forgot your password?</Link>
                    </div>
                  </div>
                  <div>
                    {/* button */}
                    <div className="d-grid">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-primary"
                      >
                        {isSubmitting ? "Loading..." : "Submit"}
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
