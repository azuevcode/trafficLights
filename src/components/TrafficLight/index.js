import React, { useState, useEffect } from 'react';
import cn from 'classnames';

import './TrafficLight.css';

const LIGHTS = [
    {
        color: 'red',
        time: 10000,
    },
    {
        color: 'yellow',
        time: 2000,
    },
    {
        color: 'green',
        time: 4000
    }
];

const TrafficLight = ({
    history,
    active
}) => {
    const [reverse, switchDirection] = useState(false);
    const [flashing, startFlashing] = useState(false);

    useEffect(() => {
        if (flashing) {
            startFlashing(false);
        }
        
        const colorIndex = LIGHTS.findIndex(item => item.color === active);
        const activeColor = LIGHTS[colorIndex];
        let nextColor;

        switch(active) {
            case 'red':
                nextColor = LIGHTS[colorIndex + 1].color;

                // красный начинает мигать
                setTimeout(() => {
                    startFlashing(true);
                }, 5000);

                switchDirection(false);

                break;
            case 'green':
                nextColor = LIGHTS[colorIndex - 1].color;
                
                switchDirection(true);
                break;
            default: {
                const nextColorIndex = reverse ? colorIndex - 1 : colorIndex + 1;
                nextColor = LIGHTS[nextColorIndex].color;
            }
        }

        setTimeout(() => {
            history.push(`/${nextColor}`)
        }, activeColor.time);
    }, [active]);

    return (
        <div className="TrafficLight">
            {
                LIGHTS.map(({ color }) => (
                    <div 
                        className={cn(
                            'TrafficLight__item',
                            `TrafficLight__item_color_${color}`,
                            {
                                TrafficLight__item_flashing: flashing && color === 'red',
                                TrafficLight__item_status_active: active === color,
                            }
                        )}
                        key={color}
                    />
                ))
            }
        </div>
    );
};

export default TrafficLight;