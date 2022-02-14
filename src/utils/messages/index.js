export const handleErrorMessage = error => {
  if (error === 'auth/email-already-in-use') {
    return 'Maaf, email sudah terdaftar pada aplikasi.';
  } else if (error === 'auth/weak-password') {
    return 'Maaf, password kurang dari 6 karakter.';
  } else {
    return error;
  }
};
