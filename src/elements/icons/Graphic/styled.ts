import styled, { keyframes } from 'styled-components'

const scale6 = keyframes`
  from {
    height: 124.5px;
  }

  to {
    height: 30px;
  }
`
const scale5 = keyframes`
  from {
    height: 124.5px;
  }

  to {
    height: 60px;
  }
`

const scale4 = keyframes`
  from {
    height: 124.5px;
  }

  to {
    height: 92px;
  }
`
const scale3 = keyframes`
  from {
    height: 124.5px;
  }

  to {
    height: 0px;
  }
`

const scale2 = keyframes`
  from {
    height: 124.5px;
  }

  to {
    height: 30px;
  }
`

const scale1 = keyframes`
  from {
    height: 124.5px;
  }

  to {
    height: 92px;
  }
`

const circle2 = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const Box = styled.div`
  display: flex;
  width: 100%;

  rect#reac-6 {
    height: 50px;

    animation: ${scale6} 2s linear forwards;
  }

  rect#reac-5 {
    height: 50px;

    animation: ${scale5} 2s linear forwards;
  }

  rect#reac-4 {
    height: 50px;

    animation: ${scale4} 2s linear forwards;
  }

  rect#reac-3 {
    height: 50px;

    animation: ${scale3} 2s linear forwards;
  }

  rect#reac-2 {
    height: 50px;

    animation: ${scale2} 2s linear forwards;
  }

  rect#reac-1 {
    height: 50px;

    animation: ${scale1} 2s linear forwards;
  }

  path#circle_2 {
    animation: ${circle2} 1s linear forwards;
  }
`
