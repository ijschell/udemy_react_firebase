export const users = (state = {}, action) => {
    return state
}

//function que dispatcha el login
export const login = ({email, password}) => async (dispatch, getState, {auth}) => {

    const result = await auth.signInWithEmailAndPassword(email, password)

}