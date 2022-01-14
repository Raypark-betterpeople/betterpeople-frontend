import styled from "styled-components";

export const Font = styled.p<{
  fontSize: string;
  fontWeight: string;
  fontColor: string;
  marginBottom?: string;
}>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.fontColor};
  margin-bottom: ${(props) => props.marginBottom};
`;

export const DirectionStyle = styled.div<{ directionStyle: string }>`
  flex-direction: ${(props) => props.directionStyle};
  text-align: center;
`;

export const CommonBodyContainer = styled.div`
  box-sizing: border-box;
  height: 100%;
  position: relative;
  display: flex;
  padding: 0 18% 0 18%;
  flex-direction: column;
  @media only screen and (max-width: 520px) {
    padding: 0 5% 0 5%;
  }
`

export const Highlight = styled.span`
  display: inline-block;
  background:linear-gradient(to top, rgba(36, 179, 139, 0.5), transparent 40%);
`
