import styled from "styled-components";
import { BASE_URL, Button } from "../../App";

const SearchReasult = ({ data }) => {
  return (
    <div>
      <FoodcardContainer>
        <Foodcards>
          {data?.map(({ name, image, text, price }) => (
            <Foodcard key={name}>
              <div className="food_image">
                <img src={BASE_URL + image} alt="" />
              </div>
              <div className="food_info">
                <div className="info">
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
                <Button>${price.toFixed(2)}</Button>
              </div>
            </Foodcard>
          ))}
        </Foodcards>
      </FoodcardContainer>
    </div>
  );
};

export default SearchReasult;

const FoodcardContainer = styled.section`
  background: url("./bg.png");
  min-height: calc(100vh - 120px);
  background-size: cover;
`;

const Foodcards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;

const Foodcard = styled.div`
  width: 340px;
  height: 167px;
  flex-shrink: 0;
  border-radius: 19.447px;
  border: 0.659px solid #98f9ff;
  background: url(<path-to-image>),
    lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat,
    radial-gradient(
      151.92% 127.02% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.04) 77.08%,
      rgba(70, 144, 212, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.184196472167969px);
  display: flex;
  .food_info div {
    margin-top: 10px 20px;
    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 4px;
      font-size: 12px;
    }
    button {
      font-size: 12px;
    }
  }
`;
