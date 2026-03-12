"use client";

import ButtonComponent from "@/src/components/common/button";
import FormError from "@/src/components/common/errorForm";
import InputComponent from "@/src/components/common/input";
import { LoginUser } from "@/src/interfaces/authUser";
import { emailRules, passwordRules } from "@/src/utils/validationRules";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";

export interface LoginFormProps {
  open?: boolean;
  onClose?: () => void;
  onLogin: (data: LoginUser) => void;
}

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginUser>({
    defaultValues: initialValues,
    mode: "onBlur",
  });
  const onSubmit = (data: LoginUser) => {
    onLogin(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
        text-left rounded-md p-9 text-sm bg-white-60 w-full
        md:text-base md:p-9 md:bg-white-60 md:w-[728px]
        lg:p-9 lg:text-lg lg:bg-white-60 lg:w-[715px] border border-gray-5"
    >
      <div
        className="
          flex flex-wrap gap-7 font-mont
          md:flex-col md:flex-nowrap
          lg:flex-row lg:justify-between
        "
      >
        <div className="flex flex-col gap-2 w-full max-w-[300px] md:w-[40%] md:max-w-full">
          <label htmlFor="email" className="text-blue-100 text-base">
            Email
          </label>
          <Controller
            name="email"
            control={control}
            rules={emailRules}
            render={({ field }) => (
              <>
                <InputComponent
                  {...field}
                  id="email"
                  placeholder="Email"
                  type="email"
                  className="w-full border border-gray-10 text-gray-4 focus:border-blue-10"
                />
                <FormError error={errors.email} />
              </>
            )}
          />
        </div>

        <div className="flex flex-col gap-2 w-full max-w-[300px] md:w-[40%] lg:w-[40%] md:max-w-[300px] lg:mr-20">
          <label htmlFor="password" className="text-blue-100 text-base">
            Password
          </label>
          <Controller
            name="password"
            control={control}
            rules={passwordRules}
            render={({ field }) => (
              <>
                <InputComponent.Password
                  {...field}
                  id="password"
                  placeholder="Password"
                  className="w-full border border-gray-10 text-gray-40 focus:border-blue-10"
                />
                <FormError error={errors.password} />
              </>
            )}
          />
        </div>
      </div>
      <ButtonComponent
        className="mt-7"
        name={"đăng nhập"}
        buttonType="submit"
      />
      <span className="block mt-2">
        <Link href={""} className="font-mont text-s text-blue-65 font-normal">
          Tìm lại mật khẩu?
        </Link>
      </span>
    </form>
  );
};

export default LoginForm;
