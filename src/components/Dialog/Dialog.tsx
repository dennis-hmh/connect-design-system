import React from 'react';
import { Paper } from '../Paper/Paper';
import { Stack } from '../Stack/Stack';
import { Icon } from '../Icon/Icon';
import { ButtonMenu } from '../ButtonMenu/ButtonMenu';
import { GradeBand } from 'src/enum/gradeband';
import { Typography } from '../Typography/Typography';

export type DialogProps = {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const Dialog: React.FC<DialogProps> = ({ children, dataTestId }) => {
  return (
    <Paper dataTestId={dataTestId} elevation={4} roundedCorner={true} backgroundColor='white' element='dialog' className='connect__dialog'>
      <Paper backgroundColor='brand-pale-magenta'>
        <Stack element='header' xs={{direction:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Stack xs={{direction:'row', spacing:'sm', paddingX:'sm', paddingY:'xs', alignItems:'center'}}>
                <Icon id='add' size='xs'></Icon>
                <Typography element='h6' size='body-sm' weight={600}>Heading</Typography>
            </Stack>
            <Stack xs={{direction:'row', spacing:'xs', paddingX:'sm', paddingY:'xs', alignItems:'center'}}>
                <ButtonMenu iconId='expand' iconSize='sm'></ButtonMenu>
                <ButtonMenu iconId='collapse' iconSize='sm'></ButtonMenu>
                <ButtonMenu iconId='close' iconSize='sm'></ButtonMenu>
            </Stack>
        </Stack>
      </Paper>
      <Stack element='main' xs={{paddingX:'sm', paddingY:'xs'}}>
        {children}
      </Stack>
    </Paper>
  );
};
