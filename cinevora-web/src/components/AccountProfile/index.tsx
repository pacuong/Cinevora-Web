'use client'

import ButtonComponent from "@/src/components/common/button";
import DatePicker from "@/src/components/common/datePicker";
import FormError from "@/src/components/common/errorForm";
import InputComponent from "@/src/components/common/input";
import SelectComponent from "@/src/components/Select";
import { UserProfile } from "@/src/interfaces/authUser";
import { cityOptions, districtOptions } from "@/src/mocks/selectdata";
import { addressRules, dateOfBirthRules, emailRules, fullNameRules, idCardRules, phoneRules } from "@/src/utils/validationRules";
import { Radio } from "antd";
import { useForm, Controller } from "react-hook-form";

export interface ProfileFormProps {
  profileAccount: UserProfile | null;
  onSubmitProfile: (data: UserProfile) => void;
}
const defaultProfileValues: UserProfile = {
  fullName: "",
  dateOfBirth: "",
  email: "",
  phone: "",
  city: "",
  district: "",
  address: "",
  sex: "",
  IDCardNumber: "",
};

const ProfileForm = ({ profileAccount, onSubmitProfile }: ProfileFormProps) => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<UserProfile>({
    mode: "onBlur",
    defaultValues: profileAccount ?? defaultProfileValues,
  });
  const handleChange =
    (field: { onChange: (value: string) => void }) => (value: string) => {
      field.onChange(value);
    };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-white-100 text-l bg-blue-50 py-5 text-center font-saira uppercase w-[285px] md:w-[650px]">
        Thông tin tai khoản
      </h2>
      <form
        onSubmit={handleSubmit(onSubmitProfile)}
        className="
        py-9 text-left font-mont w-[285px]
        md:text-left md:font-mont md:w-[650px]
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
                    <Radio
                      value="Nam"
                      className="text-left font-mont text-base"
                    >
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
          </div>

          <div className="flex flex-col gap-7 md:flex-row md:gap-15 lg:flex-row">
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
        </div>
        <ButtonComponent
          className="block mx-auto mt-8"
          name="Lưu lại"
          buttonType="submit"
        />
      </form>
    </div>
  );
};

export default ProfileForm;
