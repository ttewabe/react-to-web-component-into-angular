import React, { useState } from 'react';
import { CharacterCount, Label, TextArea, Wrapper } from './TextArea.styled';


export const LimitedTextarea = (props: any) => {
    const [text, setText] = useState('');


    const handleChange = (e: any) => {
        setText(e.target.value);
    };

    return (
        <Wrapper>
            <Label htmlFor="message">Char Count and Char Remianing</Label>
            <TextArea
                id="message"
                value={text}
                maxLength={props.maxLength}
                onChange={handleChange}
                placeholder="Write here"
            />
            <CharacterCount>{text.length}/{props.maxLength} characters</CharacterCount>
        </Wrapper>
    );
}