const counterReducer = (state, action) => {

    switch(action) {

        case 'INCREMENT':
            return ++state

    }
}

export default counterReducer;