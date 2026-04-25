"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";

import ButtonComponent from "@/src/components/common/button";
import ModalComponent from "@/src/components/common/modal";
import InputComponent from "@/src/components/common/input";
import SelectComponent from "@/src/components/Select";
import FormError from "@/src/components/common/errorForm";
import DatePicker from "@/src/components/common/datePicker";
import AddIcon from "@/src/icons/iconAdd";

import {
  AddShowtimeFormValues,
  AddShowtimeProps,
} from "@/src/interfaces/movieSchedule";
import ImageUploadIcon from "@/src/icons/imageUploadIcon ";
import {
  SHOWTIME_CINEMA_OPTIONS,
  SHOWTIME_FORMAT_OPTIONS,
  SHOWTIME_LANGUAGE_OPTIONS,
  SHOWTIME_MOVIE_OPTIONS,
  SHOWTIME_ROOM_OPTIONS,
  SHOWTIME_STATUS_OPTIONS,
  SHOWTIME_SUBTITLE_OPTIONS,
  SHOWTIME_TIME_OPTIONS,
} from "@/src/constants/showntime";
import {
  showtimeCinemaRules,
  showtimeDateRules,
  showtimeFormatRules,
  showtimeLanguageRules,
  showtimeMovieRules,
  showtimeNoteRules,
  showtimePosterRules,
  showtimeRoomRules,
  showtimeStatusRules,
  showtimeSubtitleRules,
  showtimeTimeRules,
} from "@/src/utils/showtimeRules";

export const initialShowtimeValues: AddShowtimeFormValues = {
  poster: "",
  movieId: "",
  cinemaId: "",
  roomId: "",
  showDate: "",
  showTime: "",
  format: "",
  subtitle: "",
  language: "",
  note: "",
  status: "active",
};

const AddShowtimeModal = ({ onAddShowtime }: AddShowtimeProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddShowtimeFormValues>({
    defaultValues: initialShowtimeValues,
    mode: "onBlur",
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFile = (
    file: File | undefined,
    onChange: (value: string) => void,
  ) => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      onChange(String(e.target?.result || ""));
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop =
    (onChange: (value: string) => void) =>
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      handleFile(e.dataTransfer.files?.[0], onChange);
    };

  const handleOpenFilePicker = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange =
    (onChange: (value: string) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleFile(e.target.files?.[0], onChange);
      e.target.value = "";
    };

  const onSubmit = (data: AddShowtimeFormValues) => {
    onAddShowtime(data);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalComponent
      title="Thêm Lịch Chiếu"
      className="my-add-movie-modal !w-[800px]"
      context={
        <div className="flex flex-col">
          <p className="pb-8 flex-shrink-0 text-gray-50 font-saira">
            Nhập thông tin lịch chiếu để thêm vào hệ thống
          </p>

          <div className="flex-1 overflow-y-auto border-y">
            <div className="grid grid-cols-1 gap-8 py-8 lg:grid-cols-[300px_1fr]">
              <Controller
                name="poster"
                control={control}
                rules={showtimePosterRules}
                render={({ field }) => (
                  <div>
                    <label className="movie-label">
                      Poster Phim <span className="text-red-600">*</span>
                    </label>

                    <div
                      className="mt-4 flex h-[300px] md:h-[450px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-blue-65 bg-[#f3f2ff] p-8 hover:bg-[#ede9fe]"
                      onDragOver={handleDragOver}
                      onDrop={handleDrop(field.onChange)}
                      onClick={handleOpenFilePicker}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange(field.onChange)}
                      />

                      {field.value ? (
                        <div className="relative h-full w-full">
                          <Image
                            fill
                            src={field.value}
                            alt="Poster preview"
                            className="rounded-[10px] object-contain"
                          />
                        </div>
                      ) : (
                        <>
                          <ImageUploadIcon size={60} className="text-blue-65" />
                          <div className="mt-6 text-center text-gray-70">
                            <p>Kéo thả ảnh vào đây</p>
                            <p className="mb-4">hoặc</p>
                          </div>
                          <ButtonComponent
                            name="Chọn Tệp"
                            className="!rounded-lg !bg-white-100 !text-blue-65 !border !border-solid !border-blue-65 hover:!border-none"
                          />
                        </>
                      )}
                    </div>

                    <p className="mt-3 text-gray-50">
                      JPG, PNG, WebP. Tối đa 5MB
                    </p>
                    <FormError error={errors.poster} />
                  </div>
                )}
              />

              <div className="flex flex-col gap-6">
                <Controller
                  name="movieId"
                  control={control}
                  rules={showtimeMovieRules}
                  render={({ field }) => (
                    <>
                      <SelectComponent
                        classLable="movie-label"
                        label="Phim"
                        name="movieId"
                        value={field.value}
                        options={SHOWTIME_MOVIE_OPTIONS}
                        placeholder="Chọn phim"
                        onChange={field.onChange}
                      />
                      <FormError error={errors.movieId} />
                    </>
                  )}
                />

                <div className="flex flex-col gap-5 md:flex-row md:w-[100%] md:justify-between">
                  <Controller
                    name="cinemaId"
                    control={control}
                    rules={showtimeCinemaRules}
                    render={({ field }) => (
                      <div className="md:w-[47%]">
                        <SelectComponent
                          classLable="movie-label"
                          label="Rạp Chiếu"
                          name="cinemaId"
                          value={field.value}
                          options={SHOWTIME_CINEMA_OPTIONS}
                          placeholder="Chọn rạp chiếu"
                          onChange={field.onChange}
                        />
                        <FormError error={errors.cinemaId} />
                      </div>
                    )}
                  />

                  <Controller
                    name="roomId"
                    control={control}
                    rules={showtimeRoomRules}
                    render={({ field }) => (
                      <div className="md:w-[47%]">
                        <SelectComponent
                          classLable="movie-label"
                          label="Phòng Chiếu"
                          name="roomId"
                          value={field.value}
                          options={SHOWTIME_ROOM_OPTIONS}
                          placeholder="Chọn phòng chiếu"
                          onChange={field.onChange}
                        />
                        <FormError error={errors.roomId} />
                      </div>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-5 md:flex-row md:w-[100%] md:justify-between">
                  <div className="md:w-[47%]">
                    <label className="movie-label">
                      Ngày Chiếu <span className="text-red-600">*</span>
                    </label>
                    <Controller
                      name="showDate"
                      control={control}
                      rules={showtimeDateRules}
                      render={({ field }) => (
                        <>
                          <DatePicker
                            date={field.value}
                            setDate={field.onChange}
                          />
                          <FormError error={errors.showDate} />
                        </>
                      )}
                    />
                  </div>

                  <Controller
                    name="showTime"
                    control={control}
                    rules={showtimeTimeRules}
                    render={({ field }) => (
                      <div className="md:w-[47%]">
                        <SelectComponent
                          classLable="movie-label"
                          label="Giờ Chiếu"
                          name="showTime"
                          value={field.value}
                          options={SHOWTIME_TIME_OPTIONS}
                          placeholder="Chọn giờ"
                          onChange={field.onChange}
                        />
                        <FormError error={errors.showTime} />
                      </div>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-5 md:flex-row md:w-[100%] md:justify-between">
                  <Controller
                    name="format"
                    control={control}
                    rules={showtimeFormatRules}
                    render={({ field }) => (
                      <div className="md:w-[47%]">
                        <SelectComponent
                          classLable="movie-label"
                          label="Định Dạng"
                          name="format"
                          value={field.value}
                          options={SHOWTIME_FORMAT_OPTIONS}
                          placeholder="Chọn định dạng"
                          onChange={field.onChange}
                        />
                        <FormError error={errors.format} />
                      </div>
                    )}
                  />
                  <Controller
                    name="status"
                    control={control}
                    rules={showtimeStatusRules}
                    render={({ field }) => (
                      <div className="md:w-[47%]">
                        <SelectComponent
                          classLable="movie-label"
                          label="Trạng Thái"
                          name="status"
                          value={field.value}
                          options={SHOWTIME_STATUS_OPTIONS}
                          placeholder="Chọn trạng thái"
                          onChange={field.onChange}
                        />
                        <FormError error={errors.status} />
                      </div>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-5 md:flex-row md:w-[100%] md:justify-between">
                  <Controller
                    name="subtitle"
                    control={control}
                    rules={showtimeSubtitleRules}
                    render={({ field }) => (
                      <div className="md:w-[47%]">
                        <SelectComponent
                          classLable="movie-label"
                          label="Phụ Đề"
                          name="subtitle"
                          value={field.value}
                          options={SHOWTIME_SUBTITLE_OPTIONS}
                          placeholder="Chọn phụ đề"
                          onChange={field.onChange}
                        />
                        <FormError error={errors.subtitle} />
                      </div>
                    )}
                  />

                  <Controller
                    name="language"
                    control={control}
                    rules={showtimeLanguageRules}
                    render={({ field }) => (
                      <div className="md:w-[47%]">
                        <SelectComponent
                          classLable="movie-label"
                          label="Ngôn Ngữ"
                          name="language"
                          value={field.value}
                          options={SHOWTIME_LANGUAGE_OPTIONS}
                          placeholder="Chọn ngôn ngữ"
                          onChange={field.onChange}
                        />
                        <FormError error={errors.language} />
                      </div>
                    )}
                  />
                </div>

                <div>
                  <label className="movie-label">Ghi Chú (tùy chọn)</label>
                  <Controller
                    name="note"
                    control={control}
                    rules={showtimeNoteRules}
                    render={({ field }) => (
                      <>
                        <InputComponent.TextArea
                          {...field}
                          placeholder="Nhập ghi chú..."
                          maxLength={255}
                        />
                        <p className="text-right text-gray-50">
                          {field.value?.length || 0}/255
                        </p>
                        <FormError error={errors.note} />
                      </>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-shrink-0 justify-between py-8">
            <ButtonComponent
              className="!rounded-lg !bg-white-100 !text-gray-70 !border !border-solid !border-gray-10 !p-9"
              onClick={handleClose}
              name="Hủy"
            />

            <ButtonComponent
              onClick={handleSubmit(onSubmit)}
              className="!rounded-lg !bg-blue-65 !p-9"
              name={
                <div className="flex items-center gap-5">
                  <AddIcon
                    size={20}
                    strokeWidth={1.5}
                    className="text-white-100"
                  />
                  Thêm Lịch Chiếu
                </div>
              }
            />
          </div>
        </div>
      }
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
    />
  );
};

export default AddShowtimeModal;
