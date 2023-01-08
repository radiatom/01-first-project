const UPDATE_NEW_MASSAGE_TEXT = 'UPDATE-NEW-MASSAGE-TEXT'
const SEND_MASSAGE = 'SEND-MASSAGE'
export const updateNewMassageTextActionCreater = (newText) => {
    return {
        type: UPDATE_NEW_MASSAGE_TEXT, newText: newText
    }
}
export const sendMassageActionCreater = () => {
    return {
        type: SEND_MASSAGE
    }
}
const standrtStateDialogsData = {
    dialogData: [
        {
            id: 1,
            name: 'Arsen',
            avatar: 'https://www.faceapp.com/static/img/content/compare/beard-example-before@3x.jpg',
        },
        {
            id: 2,
            name: 'Mycola',
            avatar: 'https://images.unsplash.com/photo-1591084728795-1149f32d9866?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80'
        },
        {
            id: 3,
            name: 'Andrey',
            avatar: 'https://i.pinimg.com/originals/b7/5b/e8/b75be8e562602d623c4c8bb90ed5324b.jpg'
        },
        {
            id: 4,
            name: 'Igor',
            avatar: 'https://www.faceapp.com/static/img/content/compare/old-example-before@3x.jpg'
        },
        {
            id: 5,
            name: 'Viktor',
            avatar: 'https://www.spring.org.uk/images/wide-face.jpg'
        },
        {
            id: 6,
            name: 'Antony',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXpftdHMHDgLuF7-IyrTKi_ucqODT8_dGt-Q&usqp=CAU'
        },
        {
            id: 7,
            name: 'Bot',
            avatar: 'https://play-lh.googleusercontent.com/VXTCkZJtyurz6nuiBgfrZ9yK0JEvsoqK1DUMiUj40WG7riWJ0EoOpAwRbUmdnNEwrJ0'
        },
        {
            id: 8,
            name: 'Roma',
            avatar: 'https://i.redd.it/37ygbftc5ie71.jpg'
        },

    ],

    massagesData: [
        {
            id: 1,
            idUser: 1,
            massage: 'Hi',
            avatar: 'https://static8.depositphotos.com/1207999/1027/i/600/depositphotos_10274377-stock-photo-business-man-suit-avatar.jpg'
        },
        {
            id: 2,
            idUser: 2,
            massage: 'Hi',
            avatar: 'https://static8.depositphotos.com/1207999/1027/i/600/depositphotos_10275824-stock-photo-business-man-avatar-in-suit.jpg'
        },
        {
            id: 3,
            idUser: 1,
            massage: 'Its you admin?',
            avatar: 'https://static8.depositphotos.com/1207999/1027/i/600/depositphotos_10274377-stock-photo-business-man-suit-avatar.jpg'
        },
        {
            id: 4,
            idUser: 2,
            massage: 'Yes',
            avatar: 'https://static8.depositphotos.com/1207999/1027/i/600/depositphotos_10275824-stock-photo-business-man-avatar-in-suit.jpg'
        },
        {
            id: 4,
            idUser: 1,
            massage: 'Cool!',
            avatar: 'https://static8.depositphotos.com/1207999/1027/i/600/depositphotos_10274377-stock-photo-business-man-suit-avatar.jpg'
        }
    ],
    newMassageTextData: ''
}
const dialogReducer = (state = standrtStateDialogsData, action) => {
    switch (action.type) {
        case SEND_MASSAGE:
            const newMassage = {
                id: 2,
                idUser: 2,
                massage: state.newMassageTextData,
                avatar: 'https://static8.depositphotos.com/1207999/1027/i/600/depositphotos_10275824-stock-photo-business-man-avatar-in-suit.jpg'
            }
            state.massagesData.push(newMassage)
            state.newMassageTextData = ''
            return state
        case UPDATE_NEW_MASSAGE_TEXT:
            state.newMassageTextData = action.newText
            return state
        default:
            return state
    }
}
export default dialogReducer