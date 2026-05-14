"use client";

import { ChangeEvent, DragEvent, useEffect, useRef, useState } from "react";
import { MOVIE_STATUS_OPTIONS, MOVIE_LANGUAGE_OPTIONS } from "@/src/constants/movie";
import { AddMovieForm, MovieCardProps } from "@/src/interfaces/movieCard";
import MultiSelectInput from "@/src/components/MultiSelectInput";
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
import { getGenres } from "@/src/services/genreService";
import ImageUploadIcon from "@/src/icons/imageUploadIcon ";

interface AddMovieModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  onAddMovie: (data: AddMovieForm) => void | Promise<void>;
  mode?: "create" | "edit";
  initialMovie?: MovieCardProps | null;
}

export const initialValues: AddMovieForm = {
  title: "",
  director: "",
  actor: "",
  language: "",
  genres: [],
  duration: "",
  releaseDate: "",
  description: "",
  status: "",
  poster: "",
};

const AddMovieModal = ({
  isModalOpen,
  setIsModalOpen,
  onAddMovie,
  mode = "create",
  initialMovie = null,
}: AddMovieModalProps) => {
  const [genres, setGenres] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const statusOptions =
    mode === "create"
      ? MOVIE_STATUS_OPTIONS.filter((option) => option.value !== "ended")
      : MOVIE_STATUS_OPTIONS;

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const data = await getGenres();
        setGenres(data);
        setLoading(false);
      } catch (err) {
        setError("Không thể lấy danh sách thể loại");
        setLoading(false);
      }
    };

    if (isModalOpen) {
      fetchGenres();
    }
  }, [isModalOpen]);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddMovieForm>({
    defaultValues: initialValues,
    mode: "onBlur",
  });

  useEffect(() => {
    if (!isModalOpen) {
      reset(initialValues);
      return;
    }

    if (mode === "edit" && initialMovie) {
      reset({
        title: initialMovie.title || "",
        director: initialMovie.director || "",
        actor: initialMovie.actor || "",
        language: initialMovie.language || "",
        genres: initialMovie.genres.map((genre) => genre.id.toString()),
        duration: initialMovie.duration || "",
        releaseDate: initialMovie.releaseDate
          ? initialMovie.releaseDate.slice(0, 10)
          : "",
        description: initialMovie.description || "",
        status: initialMovie.status || "",
        poster: initialMovie.posterUrl || "",
      });

      return;
    }

    reset(initialValues);
  }, [isModalOpen, mode, initialMovie, reset]);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { isMobile, isTablet } = useCustomDevice();
  const iconSize = isMobile ? 40 : isTablet ? 40 : 50;

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
      (e: ChangeEvent<HTMLInputElement>) => {
        handleFile(e.target.files?.[0], onChange);
        e.target.value = "";
      };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop =
    (onChange: (value: string) => void) => (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      handleFile(e.dataTransfer.files?.[0], onChange);
    };

  const handleOpenFilePicker = () => {
    fileInputRef.current?.click();
  };

  const handleClose = () => {
    reset(initialValues);
    setIsModalOpen(false);
  };

  const onSubmit = async (data: AddMovieForm) => {
    await onAddMovie(data);
    reset(initialValues);
    setIsModalOpen(false);
  };

  return (
    <ModalComponent
      title={mode === "edit" ? "Cập nhật phim" : "Thêm phim mới"}
      className="my-add-movie-modal !w-[800px]"
      context={
        <div className="flex flex-col">
          <p className="pb-8 flex-shrink-0 text-gray-50 font-saira">
            {mode === "edit"
              ? "Cập nhật thông tin phim trong hệ thống"
              : "Nhập thông tin phim để thêm vào hệ thống"}
          </p>

          <div className="flex-1 overflow-y-auto border-y">
            <div className="grid grid-cols-1 gap-8 py-8 lg:grid-cols-[300px_1fr]">
              <Controller
                name="poster"
                control={control}
                rules={moviePosterRules}
                render={({ field }) => (
                  <div>
                    <label className="movie-label">
                      URL Poster <span className="text-red-600">*</span>
                    </label>

                    <InputComponent
                      {...field}
                      id="poster"
                      placeholder="https://example.com/poster.jpg"
                      className="w-full"
                    />

                    {field.value && (
                      <div className="relative mt-4 h-[420px] w-full rounded-xl border border-gray-10 bg-[#f3f2ff]">
                        <Image
                          fill
                          src={field.value}
                          alt="Poster preview"
                          className="rounded-[10px] object-contain p-4"
                        />
                      </div>
                    )}

                    {/* {!field.value && (
                    <div className="mt-4 flex h-[420px] flex-col items-center justify-center rounded-xl border-2 border-dashed border-blue-65 bg-[#f3f2ff] p-8">
                      <ImageUploadIcon size={60} className="text-blue-65" />
                      <div className="mt-6 text-center text-gray-70">
                        <p>Nhập URL poster phim</p>
                        <p className="mb-4">để xem ảnh preview</p>
                      </div>
                    </div>
                  )}

                  <p className="mt-3 text-gray-50">
                    Hỗ trợ URL ảnh JPG, PNG, WebP
                  </p>

                  <FormError error={errors.poster} /> */}
                  </div>
                )}
              />

              <div className="flex flex-col gap-6">
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

                <div className="flex flex-col gap-5 md:w-full md:flex-row md:justify-between">
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
                          <MultiSelectInput
                            classLable="movie-label"
                            label="Thể Loại"
                            name="genres"
                            value={field.value}
                            options={genres.map((genre) => ({
                              label: genre.name,
                              value: genre.id.toString(),
                            }))}
                            placeholder="Chọn Thể Loại"
                            onChange={field.onChange}
                          />
                          <FormError error={errors.genres} />
                        </>
                      )}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-5 md:w-full md:flex-row md:justify-between">
                  <div className="md:w-[47%]">
                    <label className="movie-label">
                      Diễn Viên <span className="text-red-600">*</span>
                    </label>

                    <Controller
                      name="actor"
                      control={control}
                      render={({ field }) => (
                        <>
                          <InputComponent
                            {...field}
                            id="actor"
                            placeholder="Nhập tên diễn viên"
                            className="w-full"
                          />
                          <FormError error={errors.actor} />
                        </>
                      )}
                    />
                  </div>

                  <div className="md:w-[47%]">
                    <Controller
                      name="language"
                      control={control}
                      render={({ field }) => (
                        <>
                          <SelectComponent
                            label="Ngôn Ngữ"
                            classLable="movie-label"
                            name="language"
                            value={field.value}
                            options={MOVIE_LANGUAGE_OPTIONS}
                            placeholder="Chọn ngôn ngữ"
                            onChange={field.onChange}
                          />
                          <FormError error={errors.language} />
                        </>
                      )}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-5 md:w-full md:flex-row md:justify-between">
                  <div className="md:w-[47%]">
                    <label className="movie-label">
                      Thời Lượng phút <span className="text-red-600">*</span>
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
                            className="w-full"
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
                          <DatePicker
                            date={field.value}
                            setDate={field.onChange}
                          />
                          <FormError error={errors.releaseDate} />
                        </>
                      )}
                    />
                  </div>
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
                          options={statusOptions}
                          placeholder="Chọn trạng thái"
                          onChange={field.onChange}
                        />
                        <FormError error={errors.status} />
                      </>
                    )}
                  />
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
                        <p className="text-right text-gray-50">
                          {field.value?.length || 0}/500
                        </p>
                        <FormError error={errors.description} />
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
                  {mode === "edit" ? "Cập Nhật Phim" : "Thêm Phim"}
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