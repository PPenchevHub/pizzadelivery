import React from 'react'
import { useGlobalContext } from '../../../context'
import { SearchFormContainer, SearchFormControl, SearchFormInput, SearchFormLaber } from './SearchFormElement';

const SearchForm = ({item}) => {
    const {setSearchTerm} = useGlobalContext();
    const searchValue = React.useRef('');

    React.useEffect(()=>{
        searchValue.current.focus()
    }, []);

    const searchPizza = () =>{
        setSearchTerm(searchValue.current.value)
    }

    return (
            <SearchFormContainer>
                <SearchFormControl>
                    <SearchFormInput 
                        type="text"
                        id="name"
                        ref={searchValue}
                        onChange={searchPizza}
                    />
                <SearchFormLaber htmlFor="name"> Look For your {item}</SearchFormLaber>
                </SearchFormControl>  
            </SearchFormContainer>
    )
}

export default SearchForm
