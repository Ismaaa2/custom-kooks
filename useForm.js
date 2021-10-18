

import { useState } from "react";


export const useForm = ( initialState = {} ) => {

    const [valorForm, setValorForm ] = useState(initialState);


    const handleInputChange = ({ target }) => {
        setValorForm({
          ...valorForm,
          [target.name]: target.value,
        });
      };

    const reset = (reset = initialState) => {
      setValorForm(reset)
    }

    return [ valorForm, handleInputChange, reset ]
}
