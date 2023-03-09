import styled from "styled-components";

const Home = (prop) => {
  return (
    <Container>
      <Section>
        <h5>
          <a>Hiring in a hurry? - </a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business moving
        </p>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 75px;
  max-width: 100%;
`;

const Content = styled.div`
    max-width: 1128px;
    margin-left: auto;
    margin-right: auto;
`;

const Section = styled.div`
    min-height: 50px;
    padding: 16px 0;
    box-sizing: content-box;
    text-align: center;
    text-decoration: underline;
    display: flex;
    justify-content: center;
    h5 {
        color: #0a66c2;
        text-decoration: underline;
        font-size: 14px;
        a {
            font-weight: 700;
        }
    }
    p {
        font-size: 14px;
        color: #434649;
        font-weight: 600;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0 5px;
    }
`;

export default Home;

// const Container = styled.div``;
