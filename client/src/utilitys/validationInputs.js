
export function validateInputs (schema , loginData) {
    const res = schema.validate(loginData)
    return  res ;

}