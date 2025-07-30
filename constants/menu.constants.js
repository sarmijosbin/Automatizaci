export const menuConstants = {
    category: {
        women:          `//a[@href='#Women']`,
        men:            `//a[@href='#Men']`,
        kids:           `//a[@href='#Kids']`,
    },
    brands: {
        polo:            `//span[contains(text(),'Polo')]`,
        hm:              `//span[contains(text(),'H&M')]`,
        madame:          `//span[contains(text(),'Madame')]`,
        mastHarbour:     `//span[contains(text(),'Mast & Harbour')]`,
        babyHug:         `//span[contains(text(),'Babyhug')]`,
        allenSolly:      `//span[contains(text(),'Allen Solly')]`,
        kookiKids:       `//span[contains(text(),'Kooki Kids')]`,
        biba:            `//span[contains(text(),'Biba')]`,
    },
}

export const womenCategorySelectors = {
    dress:      `//*[@id='Women']//a[contains(text(),'Dress')]`,
    tops:       `//*[@id='Women']//a[contains(text(),'Tops')]`,
    saree:      `//*[@id='Women']//a[contains(text(),'Saree')]`,
}

export const menCategorySelectors = {
    tshirts:     `//*[@id='Men']//a[contains(text(),'Tshirts')]`,
    jeans:       `//*[@id='Men']//a[contains(text(),'Jeans')]`,
}

export const kidsCategorySelectors = {
    dress:      `//*[@id='Kids']//a[contains(text(),'Dress')]`,
    topsShirts: `//*[@id='Kids']//a[contains(text(),'Tops')]`,
}

export const tshirtSelectors = {
    tshirtPolo:   `//*[@href='/product_details/30']`,
}
export const dressSelectors = {
    dressProduct: `//*[@href='/product_details/19']`,
}
export const quantitySelectors = {
    quantityInput:     `//*[@id="quantity"]`,
    buttonAddToCart: `//*[@type='button']`,
    continueShopping: `//button[contains(text(),'Continue Shopping')]`,
}
export const home ={
    homePage: `//a[@href='/' and contains(text(),'Home')]`,
}
export const buyCartSelectors = {
    cartButton: `//*[@href='/view_cart']`,
}