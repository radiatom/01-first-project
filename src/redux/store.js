const store = {
    _state: {
        dialogsData: {
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
        },

        profileData: {
            myPostsData: [
                { id: 1, massage: 'Hi, how a you?', likeColum: 15 },
                { id: 2, massage: 'Its my first post', likeColum: 999 }
            ],
            newPostTextData: ''
        },

        navbarData: [
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
        ],
    },
    getState() {
        return this._state
    },

    _renderEntireTree() {

        console.log('i need rendered')
    },
    subscribe(observer) {

        this._renderEntireTree = observer
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost = {
                id: this._state.profileData.myPostsData.length + 1, massage: this._state.profileData.newPostTextData, likeColum: 0
            }
            this._state.profileData.myPostsData.push(newPost)
            this._renderEntireTree()
            this._state.profileData.newPostTextData = ''
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profileData.newPostTextData = action.newTextPost
            this._renderEntireTree()
        } else if (action.type === 'SEND-MASSAGE') {
            
            const newMassage = {
                id: 2,
                idUser: 2,
                massage: this._state.dialogsData.newMassageTextData,
                avatar: 'https://static8.depositphotos.com/1207999/1027/i/600/depositphotos_10275824-stock-photo-business-man-avatar-in-suit.jpg'
            }
            this._state.dialogsData.massagesData.push(newMassage)
            this._renderEntireTree()
            this._state.dialogsData.newMassageTextData = ''
        } else if (action.type === 'UPDATE-NEW-MASSAGE-TEXT') {
            
            this._state.dialogsData.newMassageTextData = action.newText
            this._renderEntireTree()
        }
    },

}



export default store
