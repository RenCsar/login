import { Input } from './Button.Styled'
import { BtnTypes } from '../../shared/types/types'

const Button = ({ value, padding, color, width, height }: BtnTypes) => {
    return (
        <>
            <Input type="submit" value={value? value : "Submit"} padding={padding} color={color} width={width} height={height} />
        </>
    )
}

export default Button