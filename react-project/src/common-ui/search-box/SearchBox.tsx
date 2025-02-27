import { useState } from "react";
import { SearchBoxContainer } from "./SearchBok.style";
import { FcSearch } from "react-icons/fc";
        


export interface ISearchBoxProps {
searchTitle: string;
onSubmit: (value: string) => void;
}
export const SearchBox = ({searchTitle, onSubmit}:ISearchBoxProps)=>{
    const [saveValue, setSaveValue] = useState<string>("");


    const handleSave = (event:any) => {
        setSaveValue(event.target.value);
    }

    return (
        <SearchBoxContainer>
            <h2>{searchTitle}</h2>
        <div className="p-inputgroup">
            <form onSubmit={(e) => {
                e.preventDefault();
                onSubmit?.(saveValue)
                }}>
            <input 
            type="text" 
            placeholder="Search..." 
            className="p-inputtext-sm" 
            value={saveValue} 
            onChange={handleSave}
            />
            <button className="p-button p-button-sm p-button-secondary">
              <FcSearch className="font-size"/>
            </button>
            </form>
        </div>
        </SearchBoxContainer>
    )
}