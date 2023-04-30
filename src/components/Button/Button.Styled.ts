import styled from "styled-components";
import { BtnTypes } from "../../shared/types/types";

export const Input = styled.input.attrs<BtnTypes>({
    type: 'submit'
})`
        background-color: ${props => props.color};                    
        border: none;
        padding: ${(props:BtnTypes) => props.padding || "5px"};
        width: ${props => props.width};
        height: ${props => props.height};
        color: white;
        border-radius: 5px;
        opacity: 0.7;
        cursor: pointer;
        box-shadow: 0px 6px 13px 0px rgba(0, 0, 0, 0.25);

        &:hover {
            opacity: 1;
        }
`