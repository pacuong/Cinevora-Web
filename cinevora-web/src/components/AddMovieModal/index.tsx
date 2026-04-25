"use client";

import { useRef, useState } from "react";
import {
  MOVIE_GENRE_OPTIONS,
  MOVIE_STATUS_OPTIONS,
} from "@/src/constants/movie";
import { AddMovieForm, AddMoviesProps } from "@/src/interfaces/movieCard";
import ButtonComponent from "@/src/components/common/button";
import Image from "next/image";
import AddIcon from "@/src/icons/iconAdd";
import { useCustomDevice } from "@/src/hooks/deviceDetect";
import ModalComponent from "@/src/components/common/modal";
import InputComponent from "@/src/components/common/input";
import SelectComponent from "@/src/components/Select";
import { Controller, useForm } from "react-hook-form";
import FormError from "@/src/components/common/errorForm";
import DatePicker from "@/src/components/common/datePicker";
import ImageUploadIcon from "@/src/icons/imageUploadIcon ";
import {
  movieDescriptionRules,
  movieDirectorRules,
  movieDurationRules,
  movieGenreRules,
  moviePosterRules,
  movieReleaseDateRules,
  movieStatusRules,
  movieTitleRules,
} from "@/src/utils/movieRules";

export const initialValues: AddMovieForm = {
  title: "",
  director: "",
  genres: "",
  duration: "",
  releaseDate: "",
  description: "",
  status: "",
  poster: "",
};

const AddMovieModal = ({ onAddMovie }: AddMoviesProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddMovieForm>({
    defaultValues: initialValues,
    mode: "onBlur",
  });
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { isMobile, isTablet } = useCustomDevice();
  const iconSize = isMobile ? 40 : isTablet ? 40 : 50;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFile = (
    file: File | undefined,
    onChange: (value: string) => void,
  ) => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        onChange(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange =
    (onChange: (value: string) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleFile(e.target.files?.[0], onChange);
      e.target.value = "";
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

  const onSubmit = (data: AddMovieForm) => {
    onAddMovie(data);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalComponent
      title="Thêm phim mới"
      className="my-add-movie-modal !w-[600px]"
      context={
        <div className="flex flex-col h-[700px]">
          <p className="pb-10 flex-shrink-0 text-gray-50 font-saira">
            Nhập thông tin phim để thêm vào hệ thống
          </p>

          <div className="py-10 border-y flex flex-col gap-5 !overflow-y-auto">
            <Controller
              name="poster"
              control={control}
              rules={moviePosterRules}
              render={({ field }) => (
                <div>
                  <label className="movie-label">
                    Ảnh Poster <span className="text-red-600">*</span>
                  </label>

                  <div
                    className="p-10 flex h-[300px] flex-col items-center justify-center cursor-pointer border-2 border-dashed border-gray-300 rounded-xl bg-[#f3f2ff] hover:bg-[#ede9fe]"
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
                      <div className="relative h-[220px] w-full">
                        <Image
                          fill
                          src={field.value}
                          alt="Poster preview"
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <>
                        <div className="movie-upload-icon">
                          <ImageUploadIcon
                            size={iconSize}
                            className="p-5 rounded-full bg-[#ede9fe] text-blue-65"
                          />
                        </div>
                        <div className="text-gray-50 text-center">
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

                  <p className="text-center text-gray-50">
                    JPG, PNG, WebP. Tối đa 5MB
                  </p>
                  <FormError error={errors.poster} />
                </div>
              )}
            />

            <div>
              <label className="movie-label">
                Tên Phim <span className="text-red-600">*</span>
              </label>
              <Controller
                name="title"
                control={control}
                rules={movieTitleRules}
                render={({ field }) => (
                  <>
                    <InputComponent
                      {...field}
                      id="title"
                      placeholder="Tên phim"
                      className="w-full"
                    />
                    <FormError error={errors.title} />
                  </>
                )}
              />
            </div>

            <div className="flex flex-col gap-5 md:flex-row md:w-[100%] md:justify-between">
              <div className="md:w-[47%]">
                <label className="movie-label">
                  Đạo Diễn <span className="text-red-600">*</span>
                </label>
                <Controller
                  name="director"
                  control={control}
                  rules={movieDirectorRules}
                  render={({ field }) => (
                    <>
                      <InputComponent
                        {...field}
                        id="director"
                        placeholder="Nhập tên đạo diễn"
                        className="w-full"
                      />
                      <FormError error={errors.director} />
                    </>
                  )}
                />
              </div>

              <div className="md:w-[47%]">
                <Controller
                  name="genres"
                  control={control}
                  rules={movieGenreRules}
                  render={({ field }) => (
                    <>
                      <SelectComponent
                        classLable="movie-label"
                        label="Thể Loại"
                        name="genres"
                        value={field.value}
                        options={MOVIE_GENRE_OPTIONS}
                        placeholder="Chọn Thể Loại"
                        onChange={field.onChange}
                      />
                      <FormError error={errors.genres} />
                    </>
                  )}
                />
              </div>
            </div>

            <div className="flex flex-col gap-5  md:flex-row md:w-[100%] md:justify-between">
              <div className="md:w-[47%]">
                <label className="movie-label">
                  Thời Lượng (phút) <span className="text-red-600">*</span>
                </label>
                <Controller
                  name="duration"
                  control={control}
                  rules={movieDurationRules}
                  render={({ field }) => (
                    <>
                      <InputComponent
                        {...field}
                        type="number"
                        placeholder="Vd: 120"
                        min={1}
                        max={999}
                      />
                      <FormError error={errors.duration} />
                    </>
                  )}
                />
              </div>

              <div className="md:w-[47%]">
                <label className="movie-label">
                  Ngày Khởi Chiếu <span className="text-red-600">*</span>
                </label>

                <Controller
                  name="releaseDate"
                  control={control}
                  rules={movieReleaseDateRules}
                  render={({ field }) => (
                    <>
                      <DatePicker date={field.value} setDate={field.onChange} />
                      <FormError error={errors.releaseDate} />
                    </>
                  )}
                />
              </div>
            </div>

            <div>
              <label className="movie-label">Mô Tả</label>
              <Controller
                name="description"
                control={control}
                rules={movieDescriptionRules}
                render={({ field }) => (
                  <>
                    <InputComponent.TextArea
                      {...field}
                      id="description"
                      placeholder="Nhập mô tả phim..."
                      maxLength={500}
                    />
                    <p className="text-right text-gray-50">0/500</p>
                    <FormError error={errors.description} />
                  </>
                )}
              />
            </div>

            <div>
              <Controller
                name="status"
                control={control}
                rules={movieStatusRules}
                render={({ field }) => (
                  <>
                    <SelectComponent
                      label="Trạng Thái"
                      classLable="movie-label"
                      name="status"
                      value={field.value}
                      options={MOVIE_STATUS_OPTIONS}
                      placeholder="Chọn trạng thái"
                      onChange={field.onChange}
                    />
                    <FormError error={errors.status} />
                  </>
                )}
              />
            </div>
          </div>

          <div className="flex justify-between py-10 flex-shrink-0">
            <ButtonComponent
              className="!rounded-lg items-center !bg-white-100 !text-gray-70 !border !border-solid !border-gray-10 !p-9"
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
                  Thêm Phim
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

export default AddMovieModal;
