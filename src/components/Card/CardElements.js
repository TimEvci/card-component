import styled from 'styled-components';
import bg_top from '../../images/bg-pattern-top.svg'
import bg_bottom from '../../images/bg-pattern-bottom.svg'
import bg_card from '../../images/bg-pattern-card.svg'

export const CardSection = styled.section`
  height: 100vh;
  background: url(${bg_top}) -60% 300% no-repeat, url(${bg_bottom}) 150% -200% no-repeat, var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
`


export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  height: 400px;
  width: 350px;
  border-radius: 14px ;
  box-shadow: 5px 5px 30px var(--color-primary);
`

export const CardHeader = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  background: url(${bg_card}) no-repeat;
  background-size: contain;
  border-radius: 14px;
  position: relative;
`


export const CardAvatar = styled.img`
border: 5px solid #fff;
border-radius: 50%;
height: 120px;
width: 120px;
background: #fff;
position: absolute;
top: 50%;
`


export const CardContent = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
height: 35%;
width: 100%;
border-bottom: 1px solid hsla(0, 0%, 59%, .2);
`

export const CardHeading = styled.h2`
  font-size: 1.2rem;
  color: var(--color-primary-dark);
`

export const CardSpan = styled.span` color: var(--color-text);
margin-left: 10px;
font-size: 1.2rem;
font-weight: var(--fw-normal);
`

export const CardDesc = styled.p`
margin: .5rem 0 1.4rem 0;
font-size: .9rem;
color: var(--color-text);
`


export const CardFooter = styled.div`
display: flex;
width: 80%;

`

export const CardStat = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`

export const CardStatValue = styled(CardHeading)`
margin-top: 30px;
font-weight: var(--fw-bold);
text-transform: uppercase;
`
export const CardStatName = styled.p`
font-size: .6rem ;
margin-top: 5px;
color: var(--color-text-light);
letter-spacing: .1rem;
text-transform: capitalize;
`

export const AttributeButton = styled.a`
text-decoration: none;
color: var(--color-primary-dark);
position: fixed;
bottom: 20px;
right: 20px;
height: 50px;
width: 50px;
font-size: 50px;
background: white;
border-radius: 50%;

`