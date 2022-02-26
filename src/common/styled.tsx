import styled from "styled-components";

export const Font = styled.p<{
  fontSize: string;
  fontWeight: string;
  fontColor: string;
  marginBottom?: string;
  lineHeight? : string;
  smallDeviceSize? : string;
  smallDeviceLineHeight? : string;
}>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.fontColor};
  margin-bottom: ${(props) => props.marginBottom};
  line-height: ${(props) => props.lineHeight};
  @media only screen and (max-width: 520px) {
    font-size:${(props) => props.smallDeviceSize};
    line-height:${(props) => props.smallDeviceLineHeight};
  }
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
  background:linear-gradient(to top, rgba(133, 100, 206, 0.5), transparent 40%);
`

export const Bold = styled.span`
  font-weight: 700;
  color: rgb(50,50,50);
`

export const GrayFont = styled.span`
  color: rgb(100,100,100);
`
