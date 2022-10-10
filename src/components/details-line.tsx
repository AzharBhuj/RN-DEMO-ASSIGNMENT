import React from 'react';
import styled from '@emotion/native';

import {Typography} from './typography';

//
//

export const DetailsLine: React.FC<{
  color?: React.ReactNode;
  label?: React.ReactNode;
  children: string;
}> = ({color,label, children}) => {
  return (
    <DetailsLineContainer>
      <Typography fontSize={14} style={{marginRight: 16}} weight="medium">
        {label}
      </Typography>

      <DetailsLineContent color={`${color}`}>{children}</DetailsLineContent>
    </DetailsLineContainer>
  );
};

//
//

const DetailsLineContainer = styled.View({
  marginVertical: 5,
  flexDirection: 'row',
});

const DetailsLineContent = styled(Typography)({
  flex: 1,
  textAlign: 'right',
});

DetailsLineContent.defaultProps = {
  fontSize: 14,
};
