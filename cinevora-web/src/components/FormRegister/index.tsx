"use client";

import ButtonComponent from "@/src/components/common/button";
import DatePicker from "@/src/components/common/datePicker";
import FormError from "@/src/components/common/errorForm";
import InputComponent from "@/src/components/common/input";
import SelectComponent from "@/src/components/Select";
import { UserRegister } from "@/src/interfaces/authUser";
import { cityOptions, districtOptions } from "@/src/mocks/selectdata";
import {
  addressRules,
  confirmPasswordRules,
  dateOfBirthRules,
  emailRules,
  fullNameRules,
  idCardRules,
  passwordRules,
  phoneRules,
} from "@/src/utils/validationRules";

import { Checkbox, Radio } from "antd";
import { useForm, Controller } from "react-hook-form";

const initialValues = {
  fullName: "",
  dateOfBirth: "",
  phone: "",
  password: "",
  confirmPassword: "",
  city: "",
  district: "",
  address: "",
  sex: "Nam",
  IDCardNumber: "",
  email: "",
};

export interface RegisterFormProps {
  onUserName: (data: UserRegister) => void;
}

const FormRegister = ({ onUserName }: RegisterFormProps) => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<UserRegister>({
    defaultValues: initialValues,
    mode: "onBlur",
  });
  const passwordValue = watch("password");
  const onSubmit = (data: UserRegister) => {
    onUserName(data);
  };
  const handleChange =
    (field: { onChange: (value: string) => void }) => (value: string) => {
      field.onChange(value);
    };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
        p-9 bg-white-60 rounded-md text-left font-mont
      md:bg-white-60 md:rounded-md md:text-left md:font-mont md:w-[715px] border border-gray-5
      "
    >
      <div className="flex flex-col gap-7 md:flex">
        <div className="flex flex-col gap-7 md:flex-row md:gap-15 lg:flex-row">
          <div className="flex flex-col gap-2 w-full max-w-[300px]">
            <label htmlFor="fullName" className="text-blue-100 text-base">
              Họ và tên
            </label>
            <Controller
              name="fullName"
              control={control}
              rules={fullNameRules}
              render={({ field }) => (
                <>
                  <InputComponent
                    {...field}
                    id="fullName"
                    placeholder="Họ và tên"
                    className="w-full"
                  />
                  <FormError error={errors.fullName} />
                </>
              )}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="sex" className="text-blue-100 text-base">
              Giới tính
            </label>
            <Controller
              name="sex"
              control={control}
              render={({ field }) => (
                <Radio.Group {...field}>
                  <Radio value="Nam" className="text-left font-mont text-base">
                    Nam
                  </Radio>
                  <Radio value="Nữ" className="text-left font-mont text-base">
                    Nữ
                  </Radio>
                </Radio.Group>
              )}
            />
          </div>
        </div>

        <div className="flex flex-col gap-7 md:flex-row md:gap-15 lg:flex-row">
          <div className="flex flex-col gap-2 w-full max-w-[300px]">
            <label htmlFor="dateOfBirth" className="text-blue-100 text-base">
              Ngày sinh
            </label>
            <Controller
              name="dateOfBirth"
              control={control}
              rules={dateOfBirthRules}
              render={({ field }) => (
                <>
                  <DatePicker
                    date={field.value}
                    setDate={handleChange(field)}
                  />
                  <FormError error={errors.dateOfBirth} />
                </>
              )}
            />
          </div>

          <div className="flex flex-col gap-2 w-full max-w-[300px]">
            <label htmlFor="IDCardNumber" className="text-blue-100 text-base">
              CMND/CCCD
            </label>
            <Controller
              name="IDCardNumber"
              control={control}
              rules={idCardRules}
              render={({ field }) => (
                <>
                  <InputComponent
                    {...field}
                    id="IDCardNumber"
                    placeholder="CMND/CCCD"
                    className="w-full"
                  />
                  <FormError error={errors.IDCardNumber} />
                </>
              )}
            />
          </div>
        </div>

        <div className="flex flex-col gap-7 md:flex-row md:gap-15 lg:flex-row">
          <div className="flex flex-col gap-2 w-full max-w-[300px]">
            <label htmlFor="phone" className="text-blue-100 text-base">
              Số điện thoại
            </label>
            <Controller
              name="phone"
              control={control}
              rules={phoneRules}
              render={({ field }) => (
                <>
                  <InputComponent
                    {...field}
                    id="phone"
                    placeholder="Số điện thoại"
                    className=" w-full"
                  />
                  <FormError error={errors.phone} />
                </>
              )}
            />
          </div>

          <div className="flex flex-col gap-2 w-full max-w-[300px]">
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
                    className="w-full"
                  />
                  <FormError error={errors.email} />
                </>
              )}
            />
          </div>
        </div>

        <div className="flex flex-col gap-7 md:flex-row md:gap-15 lg:flex-row">
          <div className="flex flex-col gap-2 w-full max-w-[300px]w-full max-w-[300px]">
            <label htmlFor="password" className="text-blue-100 text-base">
              Mật khẩu
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
                    placeholder="Mật khẩu"
                    className="w-full"
                  />
                  <FormError error={errors.password} />
                </>
              )}
            />
          </div>

          <div className="flex flex-col gap-2 w-full max-w-[300px]">
            <label
              htmlFor="confirmPassword"
              className="text-blue-100 text-base"
            >
              Xác nhận mật khẩu
            </label>
            <Controller
              name="confirmPassword"
              control={control}
              rules={confirmPasswordRules(passwordValue)}
              render={({ field }) => (
                <>
                  <InputComponent.Password
                    {...field}
                    id="confirmPassword"
                    placeholder="Nhập lại mật khẩu"
                    className="w-full"
                  />
                  <FormError error={errors.confirmPassword} />
                </>
              )}
            />
          </div>
        </div>

        <div className="flex flex-col gap-7 md:flex-row md:gap-15 lg:flex-row">
          <div className=" flex flex-col gap-2 w-full max-w-[300px]">
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <SelectComponent
                  label="Thành Phố"
                  name="city"
                  value={field.value}
                  options={cityOptions}
                  placeholder="Chọn Thành Phố"
                  onChange={handleChange(field)}
                />
              )}
            />
          </div>

          <div className=" flex flex-col gap-2 w-full max-w-[300px]">
            <Controller
              name="district"
              control={control}
              render={({ field }) => (
                <SelectComponent
                  label="Quận/Huyện"
                  name="district"
                  value={field.value}
                  options={districtOptions[watch("city")] || []}
                  placeholder="Chọn Quận/Huyện"
                  onChange={handleChange(field)}
                />
              )}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 max-w-[265px] min-h-[80px] h-auto">
          <label htmlFor="address" className="text-blue-100 text-base">
            Địa chỉ
          </label>
          <Controller
            name="address"
            control={control}
            rules={addressRules}
            render={({ field }) => (
              <>
                <InputComponent.TextArea
                  {...field}
                  id="address"
                  placeholder="Địa chỉ"
                />
                <FormError error={errors.address} />
              </>
            )}
          />
        </div>
        <div className="flex gap-4 items-start font-mont text-base text-blue-100 max-w-[265px]">
          <Checkbox />
          <p>
            Tôi đã đọc, hiểu và đồng ý với các{" "}
            <span className="text-red-100">điều khoản</span>
          </p>
        </div>
      </div>
      <ButtonComponent className="mt-8" name="Đăng ký" buttonType="submit" />
    </form>
  );
};

export default FormRegister;
