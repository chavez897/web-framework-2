export const REGEX_VALIDATIONS = {
    EMAIL: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\S]{8,}$/,
    NAME: /^[a-zA-Z ]{2,30}$/,
    PRICE:/^\d{1,8}(\.\d{1,2})?$/
};