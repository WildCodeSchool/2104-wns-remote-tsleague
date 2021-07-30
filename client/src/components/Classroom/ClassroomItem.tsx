import React from 'react';

import { StyledItem } from '../styles/Classroom';

import Button from '../common/Button';

export type ClassroomItemProps = {
  fullName: string;
  role?: string;
  picture: string;
};

function ClassroomItem({
  fullName,
  role,
  picture,
}: ClassroomItemProps): JSX.Element {
  return (
    <StyledItem>
      <img src={picture} alt="profile" />
      <p>{fullName}</p>
      {role ?? <p>{role}</p>}
      <Button text="Modifier" handleClick={() => console.log('modifier')} />
      <Button
        text="Supprimer"
        buttonStyle="reverse"
        handleClick={() => console.log('supprimer')}
      />
    </StyledItem>
  );
}

export default ClassroomItem;
