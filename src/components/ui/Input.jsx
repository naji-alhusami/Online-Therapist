// import clsx from "clsx";
import React from 'react';

const Input = (props) => {
  const {
    // t,
    onChange,
    value,
    register,
    id,
    name,
    type,
    isRequired = false,
    placeholder,
    label,
    // labelColor = "light-gray",
    // error,
    // errors,
    suffixIcon,
    // ...rest
  } = props;

  const inputClasses =
    'text-gray-400 text-xl w-full h-auto border text-base border-solid border-light-gray/30 shadow-sm self-center placeholder-light-gray leading-[2.15] px-[20px] py-[10px] min-w-0 text-sm font-light rounded-md';

  return (
    <>
      {label && (
        <label
          className="text-gray-400 text-xl mt-1 mb-2 whitespace-wrap md:text-base lg:text-lg flex:me-10  flex:self-center capitalize md:text-base lg:text-lg flex-1"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          value={value}
          name={name}
          type={type}
          required={isRequired}
          placeholder={placeholder}
          className={inputClasses}
          onChange={register ? register.onChange : onChange}
        />
        {suffixIcon && (
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm md:text-base lg:text-lg">
            {suffixIcon}
          </span>
        )}
      </div>
    </>
  );
};
export default Input;
