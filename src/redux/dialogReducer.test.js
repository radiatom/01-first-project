import dialogReducer, { sendMassage } from './dialogReducer'

it('in mssage data length will increase on 1', () => {
    const action = sendMassage()
    const state = {
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
                id: 5,
                idUser: 1,
                massage: 'Cool!',
                avatar: 'https://static8.depositphotos.com/1207999/1027/i/600/depositphotos_10274377-stock-photo-business-man-suit-avatar.jpg'
            }
        ]
    }
    const newState = dialogReducer(state, action)
    expect(newState.massagesData.length).toBe(6)
})