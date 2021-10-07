import React from 'react';

import { StyledClassroom, StyledSection } from '../styles/Classroom';
import ClassroomItem from './ClassroomItem';

import { students, teachers } from './mock';

function Classroom(): JSX.Element {
  let role;
  role = 'studnt';

  return (
    <StyledClassroom>
      <button onClick={() => (role = 'teacher')}>teacher</button>
      {role === 'student' && (
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
      )}

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
