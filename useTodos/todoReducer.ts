export interface Todo {
    id: number;
    description: string;
    done: boolean;
}


export enum Cases {
    ADD = 'ADD',
    DELETE = 'DELETE',
    TOOGLE = 'TOGGLE'
}


export const todoReducer = (initialState: Todo[], action: { type: string, payload: any }): Todo[] => {


    switch (action.type) {
        case Cases.ADD:
            return [...initialState, action.payload]
        case Cases.DELETE:
            // throw new Error('Not implemented')
            return initialState.filter(item => item.id !== action.payload)
        case Cases.TOOGLE:
            return initialState.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        done: !item.done
                    }
                }

                return item
            })

        default:
            return initialState;
    }




}