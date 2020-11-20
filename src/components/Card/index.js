import React, {useState} from 'react';
import {
    AttributeButton,
    CardAvatar,
    CardContainer,
    CardContent, CardDesc,
    CardFooter,
    CardHeader,
    CardHeading,
    CardSection, CardSpan, CardStat, CardStatName, CardStatValue
} from "./CardElements";
import {FaTimes, FaPlus} from "react-icons/fa";
import cardData from "./data";
import avatar from "../../images/image-victor.jpg"



const Card = () => {
    const [click,setClick] = useState(false);
    const handleClick = ()=> setClick(!click);


    return (
        <>
            <CardSection>
                <CardContainer>
                    <CardHeader>
                        <CardAvatar src={avatar}/>
                    </CardHeader>
                    <CardContent>
                        <CardHeading>
                            {cardData.name}
                            <CardSpan>
                                {cardData.age}
                            </CardSpan>
                        </CardHeading>
                        <CardDesc>
                            {cardData.location}
                        </CardDesc>
                    </CardContent>

                    <CardFooter>
                        {cardData.stats.map((stat, index) =>
                            <CardStat>
                                <CardStatValue key={index}>{stat.val}</CardStatValue>
                                <CardStatName key={index}>{stat.name}</CardStatName>
                            </CardStat>
                        )
                        }
                    </CardFooter>
                </CardContainer>
                <AttributeButton onClick={handleClick}>
                    {click ? <FaTimes/>: <FaPlus/> }
                </AttributeButton>
            </CardSection>
        </>
    );
};

export default Card;
