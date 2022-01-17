import React from 'react';

interface IDonateProps {
    id: number;
    title: string;
    description: string;
    durationTime: string;
    coverImg: string;
}

export const HomeDonate:React.FC<IDonateProps> = ({
    id,
    title,
    description,
    durationTime,
    coverImg
}) => {
    return (
        <div>{title} {description}</div>
    )
}