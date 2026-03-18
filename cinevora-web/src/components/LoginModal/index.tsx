"use client";

import ButtonComponent from "@/src/components/common/button";
import FormError from "@/src/components/common/errorForm";
import InputComponent from "@/src/components/common/input";
import ModalComponent from "@/src/components/common/modal";
import { LoginFormProps } from "@/src/components/FormLogin";
import { LoginUser } from "@/src/interfaces/authUser";
import { getApiErrorMessage } from "@/src/utils/getApiErrorMessage";
import { emailRules, passwordRules } from "@/src/utils/validationRules";
import { Controller, useForm } from "react-hook-form";

const initialValues = {
  email: "",
  password: "",
};

const LoginModal = ({ open, onClose, onLogin }: LoginFormProps) => {
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<LoginUser>({
    defaultValues: initialValues,
    mode: "onBlur",
  });
  const onSubmit = async (data: LoginUser) => {
    try {
      await onLogin(data);
      onClose?.();
    } catch (error: unknown) {
      setError("password", {
        type: "server",
        message: getApiErrorMessage(error, "Đăng nhập thất bại"),
      });
    }
  };
  const handleModalOpenChange = (open: boolean) => {
    if (!open) {
      onClose?.();
    }
  };

  return (
    <ModalComponent
      className="!w-[480px]"
      title={
        <div className="pt-10 md:px-10">
          <ButtonComponent
            className="!px-7 !py-9 !text-base !bg-orange-90"
            name="Đăng nhập"
          />
        </div>
      }
      isModalOpen={open}
      setIsModalOpen={handleModalOpenChange}
      name="phan cuong"
      context={
        <form
          className="p-5 md:p-10 flex flex-col gap-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full md:w-[85%] px-7 md:px-10 font-saira">
            <label htmlFor="email" className="text-blue-100 text-base ">
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
                    className="w-full border border-gray-10 text-gray-4 focus:border-blue-10 mt-1"
                  />
                  <FormError error={errors.email} />
                </>
              )}
            />
          </div>

          <div className="w-full px-7 md:w-[85%] md:px-10 font-saira">
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
                    className="w-full border border-gray-10 text-gray-40 focus:border-blue-10 mt-1"
                  />
                  <FormError error={errors.password} />
                </>
              )}
            />
            <ButtonComponent
              className="!text-sm !rounded-sm mt-10"
              name="đăng nhập"
              buttonType="submit"
            />
          </div>
        </form>
      }
    />
  );
};

export default LoginModal;
