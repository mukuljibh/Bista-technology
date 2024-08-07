export const checkEmployerEmail = async (email) => {
    const publicEmailProviders = [
        'gmail.com',
        'yahoo.com',
        'outlook.com',
        'hotmail.com',
        'aol.com',
        'icloud.com'
    ];
    const domain = email.split('@')[1];
    const isCompanyEmail = !publicEmailProviders.includes(domain);
    return isCompanyEmail;
}

export const checkPasswordStrength = (password) => {
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const messages = [];
    if (!hasLowercase) messages.push("at least one lowercase letter");
    if (!hasUppercase) messages.push("at least one uppercase letter");
    if (!hasNumber) messages.push("at least one number");
    if (!hasSpecialChar) messages.push("at least one special character");

    const isValid = hasLowercase && hasUppercase && hasNumber && hasSpecialChar;

    return {
        isValid,
        messages: isValid ? "" : `Password must include ${messages.join(", ")}.`
    };
};

