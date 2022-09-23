import { createSlice } from '@reduxjs/toolkit'

export const chatSlice = createSlice({
    name: 'chartSlice',
    initialState: {
        chatNames: []
    },
    reducers: {
        addChatName: (state, action) => {
            console.log(action.payload)
        }
    }
})

export const { addChatName } = chatSlice.actions
export default chatSlice.reducer