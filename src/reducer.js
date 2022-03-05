export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null,
    token: null,
    // token back to null after debugging
    //token:"BQBnTi427W8q_mTCyBHBKV9PJ-57XKhlOdUeV6dwa9i0H5l4oMOPX7Kgewgte7UWLp7kILFPIod0Qww2rejkwZf4u0qG_bTLN6qvhel-zWSg2wK-gUEQHvgvvaj3uYdS1v6icueqjX9tudvkFPnYs4Hi5TBuWAQ-U1lbt0dMgboXEM7WqTRg",
}

const reducer = (state, action) => {
    console.log(action);

    // action => type, [payload]
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default: 
            return state;
    }
}

export default reducer;