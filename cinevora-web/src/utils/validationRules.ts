const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/;
const phoneRegex = /^[0-9]{9,11}$/;
const idCardRegex = /^[0-9]{9,12}$/;

export const emailRules = {
  required: "Vui lòng nhập email",
  pattern: {
    value: emailRegex,
    message: "Email không đúng định dạng",
  },
};

export const passwordRules = {
  required: "Vui lòng nhập mật khẩu",
  minLength: {
    value: 6,
    message: "Mật khẩu phải có ít nhất 6 ký tự",
  },
  pattern: {
    value: passwordRegex,
    message: "Mật khẩu phải bao gồm chữ cái và số",
  },
};

export const fullNameRules = {
  required: "Vui lòng nhập họ và tên",
  minLength: {
    value: 2,
    message: "Họ và tên phải có ít nhất 2 ký tự",
  },
};

export const dateOfBirthRules = {
  required: "Vui lòng chọn ngày sinh",
};

export const phoneRules = {
  required: "Vui lòng nhập số điện thoại",
  pattern: {
    value: phoneRegex,
    message: "Số điện thoại không hợp lệ",
  },
};

export const idCardRules = {
  required: "Vui lòng nhập số CCCD/CMND",
  pattern: {
    value: idCardRegex,
    message: "Số CCCD/CMND không hợp lệ",
  },
};

export const cityRules = {
  required: "Vui lòng chọn tỉnh/thành phố",
};

export const districtRules = {
  required: "Vui lòng chọn quận/huyện",
};

export const addressRules = {
  required: "Vui lòng nhập địa chỉ",
  minLength: {
    value: 5,
    message: "Địa chỉ quá ngắn",
  },
};

export const confirmPasswordRules = (password: string) => ({
  required: "Vui lòng xác nhận mật khẩu",
  validate: (val: string) => val === password || "Mật khẩu không khớp",
});

export const oldPasswordRules = {
  required: "Vui lòng nhập mật khẩu cũ",
};

export const newPasswordRules = {
  required: "Vui lòng nhập mật khẩu mới",
  minLength: {
    value: 6,
    message: "Mật khẩu phải có ít nhất 6 ký tự",
  },
  pattern: {
    value: passwordRegex,
    message: "Mật khẩu phải bao gồm chữ cái và số",
  },
};

export const confirmNewPasswordRules = (newPassword: string) => ({
  required: "Vui lòng nhập lại mật khẩu mới",
  validate: (val: string) =>
    val === newPassword || "Mật khẩu nhập lại không khớp",
});
