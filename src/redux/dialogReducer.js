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
const dialogReducer = (state, action) => {
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