import React from 'react';

import { StyledItem } from '../styles/Classroom';

export type ClassroomItemProps = {
  fullName: string;
  role?: string;
  picture?: string;
};

function ClassroomItem({ fullName, picture }: ClassroomItemProps): JSX.Element {
  return (
    <StyledItem>
      <img src={picture} alt="avatar" />
      <p>{fullName}</p>
    </StyledItem>
  );
}

export default ClassroomItem;
