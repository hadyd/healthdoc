export const handleErrorMessage = error => {
  if (error.code === 'auth/email-already-in-use') {
    return 'Maaf, email sudah terdaftar pada aplikasi.';
  } else if (error.code === 'auth/weak-password') {
    return 'Maaf, password kurang dari 6 karakter.';
  } else {
    return error.message;
  }
};
