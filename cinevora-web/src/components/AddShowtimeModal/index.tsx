"use client";

import { useEffect, useRef, useState } from "react";
import { getMovieList } from "@/src/services/movieService";
import { ShowtimeFromBE } from "@/src/services/showtimeService";
import { getRooms } from "@/src/services/roomService";
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
  SHOWTIME_STATUS_OPTIONS,
} from "@/src/constants/showntime";
import {
  showtimeDateRules,
  showtimeMovieRules,
  showtimeNoteRules,
  showtimePosterRules,
  showtimeRoomRules,
  showtimeStatusRules,
} from "@/src/utils/showtimeRules";

interface AddShowtimeModalProps extends AddShowtimeProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  mode?: "create" | "edit";
  initialShowtime?: ShowtimeFromBE | null;
}

export const initialShowtimeValues: AddShowtimeFormValues = {
  poster: "",
  movieId: "",
  cinemaId: "",
  roomId: "",
  showDate: "",
  showTime: "",
  note: "",
  status: "open",
  startTime: "",
  endTime: "",
  priceStandard: "70000",
  priceVip: "100000",
  priceCouple: "120000",
};

const AddShowtimeModal = ({
  onAddShowtime,
  isModalOpen,
  setIsModalOpen,
  mode = "create",
  initialShowtime = null,
}: AddShowtimeModalProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddShowtimeFormValues>({
    defaultValues: initialShowtimeValues,
    mode: "onBlur",
  });

  useEffect(() => {
    if (!isModalOpen) {
      reset(initialShowtimeValues);
      return;
    }

    if (mode === "edit" && initialShowtime) {
      const startDate = new Date(initialShowtime.startTime);

      const showDate = startDate.toISOString().slice(0, 10);
      const startTime = startDate.toISOString().slice(11, 16);

      reset({
        poster: "",
        movieId: initialShowtime.movieId.toString(),
        cinemaId: "",
        roomId: initialShowtime.roomId.toString(),
        showDate,
        showTime: "",
        note: "",
        status: initialShowtime.status,
        startTime,
        endTime: "",
        priceStandard: initialShowtime.priceStandard.toString(),
        priceVip: initialShowtime.priceVip.toString(),
        priceCouple: initialShowtime.priceCouple?.toString() || "",
      });

      return;
    }

    reset(initialShowtimeValues);
  }, [isModalOpen, mode, initialShowtime, reset]);

  useEffect(() => {
    if (!isModalOpen) {
      reset(initialShowtimeValues);
    }
  }, [isModalOpen, reset]);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [movieOptions, setMovieOptions] = useState<
    { label: string; value: string }[]
  >([]);

  const [roomOptions, setRoomOptions] = useState<
    { label: string; value: string }[]
  >([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const result = await getMovieList(1, 100);

        setMovieOptions(
          result.data.map((movie) => ({
            label: movie.title,
            value: movie.id.toString(),
          })),
        );
      } catch (error) {
        console.error("Lỗi lấy danh sách phim:", error);
      }
    };

    if (isModalOpen) {
      fetchMovies();
    }
  }, [isModalOpen]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await getRooms();

        setRoomOptions(
          data.map((room) => ({
            label: room.name,
            value: room.id.toString(),
          })),
        );
      } catch (error) {
        console.error("Lỗi lấy danh sách phòng:", error);
      }
    };

    if (isModalOpen) {
      fetchRooms();
    }
  }, [isModalOpen]);

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
    reset(initialShowtimeValues);
    setIsModalOpen(false);
  };

  const handleClose = () => {
    reset(initialShowtimeValues);
    setIsModalOpen(false);
  };

  return (
    <ModalComponent
      title={mode === "edit" ? "Cập Nhật Lịch Chiếu" : "Thêm Lịch Chiếu"}
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
                  render={({ field }) => {
                    if (mode === "edit") {
                      const selectedMovie = movieOptions.find(
                        (movie) => movie.value === field.value,
                      );

                      return (
                        <div>
                          <label className="movie-label">Phim</label>
                          <div className="rounded-md border border-gray-10 px-3 py-2 text-base text-gray-40">
                            {selectedMovie?.label || initialShowtime?.movieTitle || "Không xác định"}
                          </div>
                          <p className="mt-1 text-sm text-red-500">
                            Không thể đổi phim của lịch chiếu đã tạo.
                          </p>
                        </div>
                      );
                    }

                    return (
                      <>
                        <SelectComponent
                          classLable="movie-label"
                          label="Phim"
                          name="movieId"
                          value={field.value}
                          options={movieOptions}
                          placeholder="Chọn phim"
                          onChange={field.onChange}
                        />
                        <FormError error={errors.movieId} />
                      </>
                    );
                  }}
                />

                <div className="flex flex-col gap-5 md:flex-row md:w-[100%] md:justify-between">
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
                          options={roomOptions}
                          placeholder="Chọn phòng chiếu"
                          onChange={field.onChange}
                        />
                        <FormError error={errors.roomId} />
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
                    name="startTime"
                    control={control}
                    render={({ field }) => (
                      <div className="md:w-[47%]">
                        <label className="movie-label">
                          Giờ Bắt Đầu <span className="text-red-600">*</span>
                        </label>

                        <InputComponent
                          {...field}
                          type="time"
                          className="w-full"
                        />

                        <FormError error={errors.startTime} />
                      </div>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-5 md:flex-row md:w-[100%] md:justify-between">
                  <Controller
                    name="priceStandard"
                    control={control}
                    render={({ field }) => (
                      <div className="md:w-[31%]">
                        <label className="movie-label">
                          Giá Ghế Thường <span className="text-red-600">*</span>
                        </label>

                        <InputComponent
                          {...field}
                          type="number"
                          placeholder="70000"
                          className="w-full"
                        />

                        <FormError error={errors.priceStandard} />
                      </div>
                    )}
                  />

                  <Controller
                    name="priceVip"
                    control={control}
                    render={({ field }) => (
                      <div className="md:w-[31%]">
                        <label className="movie-label">
                          Giá Ghế VIP <span className="text-red-600">*</span>
                        </label>

                        <InputComponent
                          {...field}
                          type="number"
                          placeholder="85000"
                          className="w-full"
                        />

                        <FormError error={errors.priceVip} />
                      </div>
                    )}
                  />

                  <Controller
                    name="priceCouple"
                    control={control}
                    render={({ field }) => (
                      <div className="md:w-[31%]">
                        <label className="movie-label">
                          Giá Ghế Đôi <span className="text-red-600">*</span>
                        </label>

                        <InputComponent
                          {...field}
                          type="number"
                          placeholder="140000"
                          className="w-full"
                        />

                        <FormError error={errors.priceCouple} />
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
                  {mode === "edit" ? "Cập Nhật Lịch Chiếu" : "Thêm Lịch Chiếu"}
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