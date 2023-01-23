const sumString = (a, b, c) => {
    return 'привіт ' + c + 'я ' + a + ' і маю ' + b
}

const myProfileData = {
    aboutMe: "я крута багата людина",
    contacts: {
        facebook: "facebook.com",
        website: null,
        twitter: "https://twitter.com/@sdf",
        instagram: "instagra.com/sds",
        youtube: null,
        github: "github.com",
        mainLink: null
    },
    lookingForAJob: true,
    lookingForAJobDescription: "грошей стільки , що нема куди подіти",
    fullName: "Arsen Mozol",
    userId: 1,
    photos: {
        small: "http://viper-tuning.com.ua/pic/image/2012/11/tyuning-Audi-Q7.jpg",
        large: "http://viper-tuning.com.ua/pic/image/2012/11/tyuning-Audi-Q7.jpg"
    }
}
let { aboutMe, lookingForAJobDescription, fullName } = myProfileData
console.log(sumString(aboutMe, lookingForAJobDescription, fullName))