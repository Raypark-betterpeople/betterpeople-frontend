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
