export const claveValida = value => {
const regex = /^(?=.*[A-Z])(?=.*[$%-_<.>])(?=.*\d)[^\s]{6,20}$/;
return regex.test(value);
};

