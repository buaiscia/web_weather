import React from 'react';
import { Paragraph } from './main.styles';

interface Props {
    location: string,
    weather: string
}

const Main = (props: Props): JSX.Element => {
    const { location, weather } = props;

    return (
        <>
            <Paragraph>City: {location}</Paragraph>
            <Paragraph>Weather: {weather}</Paragraph>
        </>
    )
}

export default Main;
