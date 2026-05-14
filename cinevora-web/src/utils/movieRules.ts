export const moviePosterRules = {
  required: "Vui lòng chọn ảnh poster",
};

export const movieTitleRules = {
  required: "Vui lòng nhập tên phim",
  minLength: {
    value: 2,
    message: "Tên phim phải có ít nhất 2 ký tự",
  },
};

export const movieDirectorRules = {
  required: "Vui lòng nhập đạo diễn",
  minLength: {
    value: 2,
    message: "Tên đạo diễn quá ngắn",
  },
};

export const movieGenreRules = {
  required: "Vui lòng chọn thể loại",
};

export const movieDurationRules = {
  required: "Vui lòng nhập thời lượng",
  min: {
    value: 1,
    message: "Thời lượng phải lớn hơn 0",
  },
  max: {
    value: 999,
    message: "Thời lượng không được vượt quá 999 phút",
  },
};

export const movieReleaseDateRules = {
  required: "Vui lòng chọn ngày khởi chiếu",
};

export const movieDescriptionRules = {
  maxLength: {
    value: 500,
    message: "Mô tả không được vượt quá 500 ký tự",
  },
};

export const movieStatusRules = {
  required: "Vui lòng chọn trạng thái",
};
