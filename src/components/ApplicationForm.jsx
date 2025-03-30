import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

// Application Form Component
const ApplicationForm = () => {
  const [verified, setVerified] = useState(false);

  // Formik setup for form handling and validation
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      message: Yup.string().required("Please tell us why you're interested in Aavash."),
    }),
    onSubmit: (values, { resetForm }) => {
      if (!verified) {
        toast.error("Please complete the CAPTCHA to continue");
        return;
      }
      console.log(values);
      toast.success("Your application was submitted successfully!");
      resetForm();
    },
  });

  const handleCaptcha = () => {
    setVerified(true);
  };

  return (
    <div className="relative bg-gradient-to-t from-[#1F2937] via-[#374151] to-[#111827] min-h-screen flex justify-center items-center p-4">
      <div className="bg-[#1f2a40] text-white rounded-xl shadow-lg w-full max-w-lg sm:w-3/4 md:w-1/2 lg:w-1/3 p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Aavash's Profile Application</h2>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="w-full px-4 py-3 rounded-lg bg-[#2a3b5f] border border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-400 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full px-4 py-3 rounded-lg bg-[#2a3b5f] border border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-400 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <textarea
              name="message"
              placeholder="Why are you interested in Aavash?"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className="w-full px-4 py-3 rounded-lg bg-[#2a3b5f] border border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-400 text-sm mt-1">{formik.errors.message}</p>
            )}
          </div>

          {/* reCAPTCHA */}
          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // replace with your own reCAPTCHA site key
              onChange={handleCaptcha}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition py-3 rounded-lg font-semibold mt-4"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
