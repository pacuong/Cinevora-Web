"use client";

import ButtonComponent from "@/src/components/common/button";
import InputComponent from "@/src/components/common/input";
import ModalComponent from "@/src/components/common/modal";
import {
  emailRules,
  fullNameRules,
  phoneRules,
} from "@/src/utils/validationRules";
import { Controller, useForm } from "react-hook-form";

export interface Profile {
  fullName: string;
  phone: string;
  email: string;
}

interface ProfileProps {
  open: boolean;
  profile: Profile;
  onClose: () => void;
  onClickConfirm: () => void;
  onProfile: (data: Profile) => void;
}
const ConfirmProfile = ({
  open,
  profile,
  onClose,
  onClickConfirm,
  onProfile,
}: ProfileProps) => {
  const { handleSubmit, control } = useForm<Profile>({
    defaultValues: profile,
    mode: "onBlur",
  });
  const onSubmit = (data: Profile) => {
    onProfile(data);
    onClose();
  };

  return (
    <ModalComponent
      title="Xac nhan thong tin"
      isModalOpen={open}
      setIsModalOpen={(value) => {
        if (!value) onClose();
      }}
      context={
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <p className="text-base font-saira text-blue-100 mb-6 font-medium">
            Xác nhận thông tin sau đây là của bạn
          </p>
          <div className="px-10 flex flex-col gap-5">
            <div className="flex flex-col">
              <label
                htmlFor="fullName"
                className="text-blue-100 text-base capitalize"
              >
                Họ tên
              </label>
              <Controller
                name="fullName"
                control={control}
                rules={fullNameRules}
                render={({ field }) => (
                  <>
                    <InputComponent
                      {...field}
                      readOnly
                      id="fullName"
                      placeholder="Họ và tên"
                      className="w-full md:w-[70%]"
                    />
                  </>
                )}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="text-blue-100 text-base capitalize"
              >
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
                      readOnly
                      id="phone"
                      placeholder="Số điện thoại"
                      className="w-full md:w-[70%]"
                    />
                  </>
                )}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-blue-100 text-base capitalize"
              >
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
                      readOnly
                      id="email"
                      placeholder="Email"
                      type="email"
                      className="w-full md:w-[70%]"
                    />
                  </>
                )}
              />
            </div>
          </div>
          <div className="mt-10 px-10">
            <ButtonComponent
              className="!border !rounded-md !px-4"
              name="Xác nhận"
              buttonType="submit"
              onClick={onClickConfirm}
            />
          </div>
        </form>
      }
      name="Xac nhan thong tin"
      modalClassName="profile-modal"
    />
  );
};

export default ConfirmProfile;
