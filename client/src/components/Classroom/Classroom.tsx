import React from 'react';

import { StyledClassroom, StyledSection } from '../styles/Classroom';

import ClassroomItem from './ClassroomItem';

function Classroom(): JSX.Element {
  const teachers = [
    {
      id: 1,
      fullName: 'Alex John',
      role: 'Formateur',
      picture: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
  ];
  const students = [
    {
      id: 1,
      fullName: 'Mike John',
      picture: 'https://randomuser.me/api/portraits/men/80.jpg',
    },
    {
      id: 2,
      fullName: 'Mike John',
      picture: 'https://randomuser.me/api/portraits/men/80.jpg',
    },
    {
      id: 3,
      fullName: 'Mike John',
      picture: 'https://randomuser.me/api/portraits/men/80.jpg',
    },
  ];
  return (
    <StyledClassroom>
      <StyledSection>
        <h3>CLASSES</h3>
        <div>
          {teachers.map((elt) => (
            <ClassroomItem
              key={elt.id}
              fullName={elt.fullName}
              role={elt.role}
              picture={elt.picture}
            />
          ))}
        </div>
      </StyledSection>
      <StyledSection>
        <h3>ÉLÈVES</h3>
        <div>
          {students.map((elt) => (
            <ClassroomItem
              key={elt.id}
              fullName={elt.fullName}
              picture={elt.picture}
            />
          ))}
        </div>
      </StyledSection>
    </StyledClassroom>
  );
}

export default Classroom;
