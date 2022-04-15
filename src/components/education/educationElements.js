import styled from "styled-components";

export const Educationsection  = styled.div`
    background-color: #EAF3FA;
`

export const Educationsectiontop = styled.div`
    padding: 2rem;
`

export const Educationsectionbottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Heading = styled.div`
    justify-content: center;
    display: flex;
    color: #000;
    font-size: 45px;
`

export const CardEducation = styled.div`
    width: 65%;
    height: 30vh;
    border-radius: 16px;
    /* background: #004E64; */
    background: linear-gradient(259.12deg, #97A3E1 9.42%, #7C8BD3 73.13%);
    display: flex;
    flex-direction: row;
    margin: 2rem 0 2rem 0;
    overflow: hidden;

    @media only screen and (max-width: 900px) {
    flex-direction: column;
    height: fit-content;
    width: 80%;
    }
`

export const Imagesection = styled.div`
    width: 40%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    object-fit: cover;
    
    @media only screen and (max-width: 900px) {
    width: 100%;
    }
`

export const TextSection = styled.div`
    width: 60%;
    color: #fff;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    padding: 2rem;

    @media only screen and (max-width: 900px) {
    width: 100%;
    }
`

export const InstituteName = styled.div`
    font-size: 25px;
    font-weight: 500;
`

export const Degree = styled.div`
    font-size: 20px;
    font-weight: 400;
    /* color: #c6ff00; */
`

export const Branch = styled.div`
    font-size: 20px;
    font-weight: 400;
    padding-top: 1rem;
`

export const Location = styled.div`
    font-size: 18px;
    font-weight:300;
    color: #c6ff00;
`

export const Year = styled.div`
    font-size: 18px;
    font-weight: 300;
    color: #c6ff00;
`

export const Readmore = styled.div`
    background: linear-gradient(281.6deg, #8a93b2 0.22%, #455eb6 100.26%);
    border-radius: 20px;
    width: 10rem;
    padding: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    cursor: pointer;
`


