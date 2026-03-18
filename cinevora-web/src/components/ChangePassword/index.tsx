import ButtonComponent from "@/src/components/common/button";
import FormError from "@/src/components/common/errorForm";
import InputComponent from "@/src/components/common/input";
import { UserChangePassword } from "@/src/interfaces/authUser";
import {
  confirmNewPasswordRules,
  newPasswordRules,
  oldPasswordRules,
} from "@/src/utils/validationRules";

import { Controller, useForm } from "react-hook-form";

const changePasswordInitialValues = {
  oldPassword: "",
  newPassword: "",
  confirmNewPassword: "",
};
export interface changePasswordProps {
  onSubmitChangePasswor: (data: UserChangePassword) => void;
}
const ChangePassword = ({ onSubmitChangePasswor }: changePasswordProps) => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<UserChangePassword>({
    defaultValues: changePasswordInitialValues,
    mode: "onBlur",
  });
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-white-100 text-l bg-blue-50 py-5 text-center font-saira uppercase w-[230px] md:w-[650px]">
        Thay đổi mật khẩu
      </h1>
      <form
        onSubmit={handleSubmit(onSubmitChangePasswor)}
        className="
        py-9  text-left font-mont w-[230px]
       md:text-left md:font-mont md:w-[650px]
      "
      >
        <div className="flex flex-col gap-7 md:flex">
          <div className="flex flex-col gap-7 md:flex-row md:gap-15 lg:flex-row">
            <div className="flex flex-col gap-2 w-full md:max-w-[300px]">
              <label htmlFor="oldPassword" className="text-blue-100 text-base">
                Mật khẩu cũ
              </label>
              <Controller
                name="oldPassword"
                control={control}
                rules={oldPasswordRules}
                render={({ field }) => (
                  <>
                    <InputComponent
                      {...field}
                      id="oldPassword"
                      type="password"
                      placeholder="Mật khẩu cũ"
                      className="w-full"
                    />
                    <FormError error={errors.oldPassword} />
                  </>
                )}
              />
            </div>
          </div>

          <div className="flex flex-col gap-7 md:flex-row md:gap-15 lg:flex-row">
            <div className="flex flex-col gap-2 w-full md:max-w-[300px]">
              <label htmlFor="newPassword" className="text-blue-100 text-base">
                Mật khẩu mới
              </label>
              <Controller
                name="newPassword"
                control={control}
                rules={newPasswordRules}
                render={({ field }) => (
                  <>
                    <InputComponent
                      {...field}
                      id="newPassword"
                      placeholder="Mật khẩu mới"
                      type="password"
                      className="w-full"
                    />
                    <FormError error={errors.newPassword} />
                  </>
                )}
              />
            </div>

            <div className="flex flex-col gap-2 w-full md:max-w-[300px]">
              <label
                htmlFor="confirmNewPassword"
                className="text-blue-100 text-base"
              >
                Nhập lại mật khẩu mới
              </label>
              <Controller
                name="confirmNewPassword"
                control={control}
                rules={confirmNewPasswordRules(watch("newPassword"))}
                render={({ field }) => (
                  <>
                    <InputComponent
                      {...field}
                      id="confirmNewPassword"
                      placeholder="Nhập lại mật khẩu mới"
                      className="w-full"
                      type="password"
                    />
                    <FormError error={errors.confirmNewPassword} />
                  </>
                )}
              />
            </div>
          </div>
        </div>
        <ButtonComponent
          className="block mx-auto mt-10"
          name="Lưu lại"
          buttonType="submit"
        />
      </form>
    </div>
  );
};

export default ChangePassword;
