import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  margin: 0 auto;
  justify-content: center;
`

const HeaderDiv = styled.div`
  background: #385c6d;
  text-align: center;
  padding: 15px;
  font-size: 2.5em;
  color: white;

  @media screen and (max-width: 600px) {
    font-size: 2.2em;
  }
`

const GreenBox = styled.div`
  height: 30px;
  margin: 3% 1.5%;
  padding: 5%;
  background: #bedfc4;

  @media screen and (max-width: 600px) {
    height: 43px;
  }
`

const YellowBox = styled.div`
  margin: 3% 1.5%;
  padding: 3% 6%;
  background: #fffab2;
`

const Input = styled.input`margin-right: 5px;`

const Submit = styled.input``

const Form = styled.form``

export { Container, HeaderDiv, GreenBox, YellowBox, Submit, Input, Form }
