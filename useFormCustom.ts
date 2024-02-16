import { useState, ChangeEvent } from "react"



export const useFormCustom = <T extends object>(initialForm: T) => {

    const [formState, setFormState] = useState(initialForm)



    const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = target;

        setFormState({
            ...formState,
            [name]: value,
        })
    }

    const handleReset = () => {
        setFormState(initialForm)
    }





    return {
        ...formState,
        formState,
        handleOnChange,
        handleReset,
    }

}