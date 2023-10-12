"use client";

import Link from "next/link";
import { useForm, type FieldValues } from "react-hook-form";
import { toast } from "sonner";
import Image from "next/image";

type Fields = "firstName" | "lastName" | "email" | "password";

export default function Signup() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  function getErrorStyles(error: Fields): string {
    return errors[error] === undefined
      ? "border-neutral-gray focus:border-neutral-dark focus-within:border-neutral-dark focus-visible:border-neutral-dark focus:ring-neutral-dark"
      : "border-primary-red focus:border-primary-red focus-within:border-primary-red focus-visible:border-primary-red focus:ring-primary-red";
  }

  function onSubmit(data: FieldValues) {
    console.log(data);
    toast.success("Thank you for signing-up");
    reset();
  }

  function onNotSubmit() {
    toast.error("Something went wrong");
  }
  return (
    <form
      className="bg-white rounded-xl p-5 grid gap-4"
      onSubmit={handleSubmit(onSubmit, onNotSubmit)}
    >
      <div className="grid relative gap-2 p-0 m-0">
        <input
          className={
            "form-input text-neutral-dark font-semibold placeholder:text-neutral-dark/60 placeholder:font-bold rounded " +
            getErrorStyles("firstName")
          }
          type="text"
          placeholder="First Name"
          {...register("firstName", {
            required: "First Name cannot be empty",
          })}
        />
        {errors.firstName && (
          <p className="text-primary-red text-xs italic justify-end text-right">
            {errors.firstName.message}
            <Image
              src={"/images/icon-error.svg"}
              alt=""
              loading="lazy"
              width={16}
              height={16}
              className="absolute top-[20%] right-4 bottom-0 z-10"
            />
          </p>
        )}
      </div>
      <div className="grid relative gap-2 p-0 m-0">
        <input
          className={
            "form-input text-neutral-dark font-semibold placeholder:text-neutral-dark/60 placeholder:font-bold rounded " +
            getErrorStyles("lastName")
          }
          type="text"
          placeholder="Last Name"
          {...register("lastName", {
            required: "Last Name cannot be empty",
          })}
        />
        {errors.lastName && (
          <p className="text-primary-red text-xs italic justify-end text-right">
            {errors.lastName.message}
            <Image
              src={"/images/icon-error.svg"}
              alt=""
              loading="lazy"
              width={16}
              height={16}
              className="absolute top-[20%] right-4 bottom-0 z-10"
            />
          </p>
        )}
      </div>
      <div className="grid relative gap-2 p-0 m-0">
        <input
          className={
            "form-input text-neutral-dark font-semibold placeholder:text-neutral-dark/60 placeholder:font-bold rounded " +
            getErrorStyles("email")
          }
          type="email"
          placeholder="Email Address"
          {...register("email", {
            required: "Looks like this is not an email",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Looks like this is not an email",
            },
          })}
        />
        {errors.email && (
          <>
            <p className="text-primary-red text-xs italic justify-end text-right">
              {errors.email.message}
              <Image
                src={"/images/icon-error.svg"}
                alt=""
                loading="lazy"
                width={16}
                height={16}
                className="absolute top-[20%] right-4 bottom-0 z-10"
              />
            </p>
          </>
        )}
      </div>
      <div className="grid relative gap-2 p-0 m-0">
        <input
          className={
            "form-input text-neutral-dark font-semibold placeholder:text-neutral-dark/60 placeholder:font-bold rounded " +
            getErrorStyles("password")
          }
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password cannot be empty",
          })}
        />
        {errors.password && (
          <p className="text-primary-red text-xs italic justify-end text-right">
            {errors.password.message}
            <Image
              src={"/images/icon-error.svg"}
              alt=""
              loading="lazy"
              width={16}
              height={16}
              className="absolute top-[20%] right-4 bottom-0 z-10"
            />
          </p>
        )}
      </div>
      <button
        className="uppercase bg-primary-green font-semibold rounded-md cursor-pointer px-4 py-4"
        type="submit"
      >
        Claim your free trial
      </button>
      <p className="text-neutral-gray text-xs">
        By clicking the button, you are agreeing to our &nbsp;
        <Link className="text-primary-red font-bold" href={"/"}>
          Terms and Services
        </Link>
      </p>
    </form>
  );
}
