import styled from 'styled-components';

export const LoaderComponent = styled.div`
  color: var(--primaryColor);
  text-indent: -9999em;
  margin: 88px auto;
  margin-top: 20rem;
  position: relative;
  font-size: 3rem;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
  background: transparent;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 2em;

  &:before,
  &:after {
  background: transparent;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
  }

  &:before,
  &:after {
  position: absolute;
  top: 0;
  content: '';
}

&:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
&:after {
  left: 1.5em;
}@-webkit-keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 2em;
  }
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 2em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 2em;
  }
}

`;