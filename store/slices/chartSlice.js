import { createSlice } from '@reduxjs/toolkit'

export const chatSlice = createSlice({
    name: 'chartSlice',
    initialState: {
        rooms: []
    },
    reducers: {
        addChatRoom: (state, action) => {
            const rooms = [...state.rooms, action.payload]
            state.rooms = rooms
            console.log(state.rooms)
        }
    }
})

export const { addChatRoom } = chatSlice.actions
export default chatSlice.reducer