import { ChangeEventHandler } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyledForm, StyledInput, StyledButton } from './form.styles';
import { InitialState } from '../../reducer';
import getCityWeather from '../../../services/getCityWeather';

const Form = (): JSX.Element => {
    const input = useSelector((state: InitialState) => state.input)

    const dispatch = useDispatch();

    const onFormSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (!input) {
            dispatch({ type: 'SET_ERROR', payload: 'Please insert a location' })
            return;
        }

        getCityWeather(input)
            .then(res => {
                dispatch({ type: 'SET_ERROR', payload: '' })
                dispatch({ type: 'SET_LOCATION', payload: res.name })
                dispatch({ type: 'SET_WEATHER', payload: res.weather[0].description })
            })
            .catch((err: Error) => {
                if (err.message.includes('404')) {
                    dispatch({ type: 'SET_ERROR', payload: 'Location not found' })
                    return;
                }
                dispatch({ type: 'SET_ERROR', payload: err.message })
            })
    }

    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
        dispatch({ type: 'SET_INPUT', payload: event.target.value })
    }

    return (
        <StyledForm onSubmit={(e) => onFormSubmit(e)}>
            <StyledInput
                onChange={onChangeHandler}
                value={input}
            />
            <StyledButton type="submit">Select</StyledButton>
        </StyledForm>
    )
}


export default Form;
