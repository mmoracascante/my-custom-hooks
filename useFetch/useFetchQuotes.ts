import { useEffect, useState } from "react"

interface StateTypes {
    data: QuotesTypes[] | null,
    isLoading: boolean,
    hasError: any,
}

export interface QuotesTypes {
    quote: string;
    author: string;
}


export const useFetchQuotes = (url: string) => {

    const [state, setState] = useState<StateTypes>({
        data: null,
        isLoading: true,
        hasError: null,
    })



    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
        })

        const response = await fetch(url)
        const data = await response.json()

        setState({
            data,
            isLoading: false,
            hasError: null,
        })
    }


    useEffect(() => {
        getFetch()


    }, [url])



    return {
        ...state,
        state,

    }
}
