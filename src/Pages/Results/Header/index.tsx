import styled from 'styled-components';
import Button from '../../../components/Button';
import imgCovid from './img/img-covid.png';
import imgExport from './img/img-export.png';

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderIcon />
      <Button imgLeft={<HeaderExport src={imgExport} />} title="Share Report" />
    </HeaderWrapper>);
};

const HeaderWrapper = styled.div`
  display: flex;
  margin: 3.5rem 0 2.5rem 0;
  justify-content: space-between;
  align-items: flex-end;
`;

const HeaderExport = styled.img`
  width: auto;
  height: 26px;
`;

const HeaderIcon = styled.img`
  height: 110px;
  width: auto;
`;

HeaderIcon.defaultProps = {
  src: imgCovid,
};
