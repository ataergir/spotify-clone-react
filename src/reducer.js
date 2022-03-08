export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null,
    token: null,
    top_artists: null,
    actual_playlist: null,
    devices: [],
    background: false,
    shuffle: false,
    repeat: "off",
    playing_percentage: 0,
    //token:"BQBnTi427W8q_mTCyBHBKV9PJ-57XKhlOdUeV6dwa9i0H5l4oMOPX7Kgewgte7UWLp7kILFPIod0Qww2rejkwZf4u0qG_bTLN6qvhel-zWSg2wK-gUEQHvgvvaj3uYdS1v6icueqjX9tudvkFPnYs4Hi5TBuWAQ-U1lbt0dMgboXEM7WqTRg",
}

const reducer = (state, action) => {

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
        case 'SET_TOP_ARTISTS':
            return {
                ...state,
                top_artists: action.top_artists,
            }
        case 'SET_PLAYING':
            return {
                ...state,
                playing: action.playing,
            }
        case 'SET_ITEM':
            return {
                ...state,
                item: action.item,
            }
        case 'SET_ACTUAL_PLAYLIST':
            return {
                ...state,
                actual_playlist: action.actual_playlist,
            }
        case 'SET_DEVICES':
            return {
                ...state,
                devices: action.devices,
            }
        case 'SET_ACTUAL_BACKGROUND':
            return {
                ...state,
                background : action.background
            }
        case 'SET_SHUFFLE':
            return {
                ...state,
                shuffle: action.shuffle
            }
        case 'SET_REPEAT':
            return {
                ...state,
                repeat: action.repeat
            }
        case 'SET_PLAYING_PERCENTAGE':
            return {
                ...state,
                playing_percentage: action.playing_percentage
            }
        default: 
            return state;
    }
}

export default reducer;