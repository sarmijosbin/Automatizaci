export const proceedCheckout ={
    btnProceedCheckout:     `//a[contains(text(),'Proceed To Checkout')]`,
}
export const registerLogin = {
    registerLink:           `//u[contains(text(),'Register / Login')]`,
    usernameInput:          `//input[@data-qa='signup-name']`,
    emailaddressInput:      `//input[@data-qa='signup-email']`,
    btnSignupLogin:         `//button[@data-qa='signup-button']`,
}

export const checkoutSelectors ={
    //opcionTitle:            `//*[@type='radio' and contains(@value, 'Mrs')]`,
    opcionTitle:            `//*[@id="id_gender2"]`,
    passwordInput:          `//input[@data-qa='password']`,
    dayBirth:               `//select[@id='days']`,
    dayBirthOption:         `//option[(text()='20' and @value='20')]`,
    monthBirth:             `//select[@id='months']`,
    monthBirthOption:       `//option[(text()='February' and @value='2')]`,
    yearBirth:              `//select[@id='years']`,
    yearBirthOption:        `//option[(text()='2007' and @value='2007')]`,
    firstNameInput:         `//input[@data-qa='first_name']`,
    lastNameInput:          `//input[@data-qa='last_name']`,
    CompanyInput:           `//input[@data-qa='company']`,
    addressInput:           `//input[@data-qa='address']`,
    country:                `//select[@data-qa='country']`,
    countryOption:          `//option[@value="United States"]`,
    state:                  `//input[@data-qa='state']`,
    city:                   `//input[@data-qa='city']`,
    zipcode:                `//input[@data-qa='zipcode']`,
    mobileNumber:           `//input[@data-qa='mobile_number']`,
    createAccountBtn:       `//button[@data-qa='create-account']`,
    continueBtn:            `//a[@data-qa='continue-button']`,
}