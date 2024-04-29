import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";

// define initial state
const initialState = {
    sidebar: {
        open: false,
        type: "CONTACT",// can be CONTACT, STARRED,SHARED
    },
    chats: {
        open: true,
    },
    menubar: {
        open: true,
    }
}

// create slice
const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        //Toggle sidebar
        toggleSidebar(state, action) {
            state.sidebar.open = !state.sidebar.open
        },
        updateSidebarType(state, action) {
            state.sidebar.type = action.payload.type;
        },
        toggleMenubarAndChats(state, action) {
            state.chats.open = !state.chats.open
        }
    }
});

// export reducer
export default slice.reducer;

//thunk functions - perform async operations
export function ToggleSidebar() {
    return async () => {
        dispatch(slice.actions.toggleSidebar());
    }
}
export function ToggleMenubarAndChats() {
    return async () => {
        dispatch(slice.actions.toggleMenubarAndChats());
    }
}
export function UpdateSidebarType(type) {
    return async () => {
        dispatch(slice.actions.updateSidebarType({
            type
        }))
    }
}