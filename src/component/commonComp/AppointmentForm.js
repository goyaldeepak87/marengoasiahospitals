'use client';

import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"; // Import Datepicker CSS

const AppointmentForm = () => {
  // State to check if component is mounted
  const [mounted, setMounted] = useState(false);

  // Date calculation for current and next week's date
  const currentDate = new Date();
  const nextWeekDate = new Date();
  nextWeekDate.setDate(currentDate.getDate() + 7);

  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      report: null,
      appointmentDate: null, // For the datepicker
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = 'Name is required';
      }
      if (!values.phone) {
        errors.phone = 'Phone number is required';
      } else if (!/^\d{10}$/.test(values.phone)) {
        errors.phone = 'Phone number must be 10 digits';
      }
      if (values.report && !/(\.pdf|\.jpg|\.doc|\.docx|\.jpeg|\.png)$/i.test(values.report.name)) {
        errors.report = 'Invalid file type. Allowed types: pdf, jpg, jpeg, png, doc, docx';
      }
      if (!values.appointmentDate) {
        errors.appointmentDate = 'Appointment date is required';
      }
      return errors;
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // Ensure that DatePicker is rendered only on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Don't render anything on the server side
  }

  return (
    <div className="max-w-screen-xl mx-auto md:p-4 m-4 bg-[#f8f8f8] md:bg-white lg:mt-[-72px] md:mt-[-50px] sm:mt-0">
      <div className="row flex justify-center">
        <div className="col-lg-12 rounded-[55px] booking-form md:bg-white p-6 md:shadow-lg">
          <form
            onSubmit={formik.handleSubmit}
            className="contact-form space-y-6"
            encType="multipart/form-data"
          >
            <div className="grid items-end grid-cols-1 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 gap-4">
              {/* Name Input */}
              <div className="form-group relative">
                <label className="sm:text-sm text-[14px] text-black mb-2">Enter Name</label>
                <input
                  className="form-control w-full text-[14px] sm:text-[16px] p-2 border border-gray-300 rounded-[15px]"
                  name="name"
                  type="text"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter Name"
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="text-red-500 text-sm mt-1 absolute text-xs left-4 bottom-[-17px]">{formik.errors.name}</div>
                )}
              </div>

              {/* Phone Number Input */}
              <div className="form-group relative">
                <label className="text-sm text-black mb-2 sm:text-sm text-[14px]">Mobile Number</label>
                <input
                  className="form-control w-full text-[14px] sm:text-[16px] p-2 border border-gray-300 rounded-[15px]"
                  name="phone"
                  type="text"
                  pattern="\d{10}"
                  maxLength="10"
                  minLength="10"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter Phone"
                />
                {formik.touched.phone && formik.errors.phone && (
                  <div className="text-red-500 text-sm mt-1 absolute text-xs left-4 bottom-[-17px]">{formik.errors.phone}</div>
                )}
              </div>

              {/* File Upload */}
              <div className="form-group relative">
                <label className="text-sm text-black mb-2 sm:text-sm text-[14px]">Upload Report</label>
                <input
                  className="form-control w-full p-2 text-[14px] sm:text-[16px] border border-gray-300 rounded-[15px]"
                  type="file"
                  name="report"
                  accept=".pdf,.jpg,.doc,.docx,.jpeg,.png"
                  onChange={(event) => formik.setFieldValue("report", event.currentTarget.files[0])}
                />
                {formik.touched.report && formik.errors.report && (
                  <div className="text-red-500 text-sm mt-1 absolute text-xs left-4 bottom-[-17px]">{formik.errors.report}</div>
                )}
              </div>

              {/* Appointment Date Picker */}
              <div className="form-group relative">
                <label className="text-sm text-black mb-2 sm:text-sm text-[14px]">Select Appointment Date</label>
                <DatePicker
                  className="form-control w-full p-2 border border-gray-300 rounded-[15px] text-[14px] sm:text-[16px] md:w-full"
                  selected={formik.values.appointmentDate}
                  onChange={(date) => formik.setFieldValue("appointmentDate", date)}
                  minDate={currentDate}
                  maxDate={nextWeekDate}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select a date"
                />
                <div className='absolute lg:right-4 md:right-3 top-8 md:top-8 right-3 text-gray-400'> <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14yq2cq" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CalendarMonthIcon"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z"></path></svg> </div>
                {formik.touched.appointmentDate && formik.errors.appointmentDate && (
                  <div className="text-red-500 text-sm mt-1 absolute text-xs left-4 bottom-[-17px]">{formik.errors.appointmentDate}</div>
                )}
              </div>

              {/* Submit Button */}
              <div className="form-group lg:mr-[0] md:mr-[-100%] md:text-center">
                <button
                  type="submit"
                  className="sm:text-sm text-[14px] btn btn-primary w-full lg:w-[100%] md:w-[50%] p-3 text-white font-semibold bg-[#007dc7] rounded-[15px] hover:[#007dc6] cursor-pointer transition"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
