import {create} from "zustand" //is like a global store that makes it easier for us to hold track of user information, like when a user is logged in or logged out
import { mountStoreDevtool } from "simple-zustand-devtools"

const userAuthInformationStore = create((set, get) =>({
    userData:null,
    loading:false,

//here we create a arrow fuction to get user data
    user: () => ({
        user_id:get().userData?.user_id || null,
        username:get().userData?.username || null
    }),

    setUser:(user)=>
    set({
        userData: user,

    }),

    setLoading: (loading) => set({loading}),

    isLoggedIn: () => get().userData !== null,

}));

if (import.meta.env.DEV){
    mountStoreDevtool("Store", userAuthInformationStore)
}

export {userAuthInformationStore};