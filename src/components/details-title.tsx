import styled from '@emotion/native';

import {Typography} from './typography';

//
//

export const DetailsTitle = styled(Typography)({
  marginTop: 12,
  color: 'black',
});

DetailsTitle.defaultProps = {
  weight: 'medium',
};
