export const verifyHomeSelectors = {
    mainLogo: `//img[@alt='Website for automation practice']`, 
}

export const verifyCartSelectors = {
    cartConfirmationMessage: `//li[contains(text(),'Shopping Cart')]`, 
}

export const verifyAccountCreatedSelectors = {
    accountCreatedConfirmation: `//b[contains(text(),'Account Created!')]`, 
}

export const verifyLoggedSelectors = {
    loggedUsrConfirmation: `//b[contains(text(),'Sindy Armijos')]`, 
}

export const verifyAddressSelectors = {
    addressDetailsConfirmation: `//h2[contains(text(),'Address Details')]`, 
}

export const verifyReviewOrderSelectors = {
    reviewOrderConfirmation: `//h2[contains(text(),'Review Your Order')]`, 
}

export const verifyCongratulationsOrderSelectors = {
    congratulationsOrderMessage: `//p[contains(text(),'Congratulations! Your order has been confirmed!')]`,
}

export const verifyDeletedAccountSelectors = {
    deletedAccountMessage: `//p[contains(text(),'Your account has been permanently deleted!')]`,
}
