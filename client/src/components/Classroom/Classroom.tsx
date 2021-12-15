import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { StyledClassroom, StyledSection } from '../styles/Classroom';
import ClassroomItem from './ClassroomItem';
import ClassroomForm from './ClassroomForm';
import { students } from './mock';
import ClassroomAddStudent from './ClassroomAddStudent';
import { State } from '../../redux/root-reducer';

function Classroom(): JSX.Element {
  const classroomModal = useSelector(
    (state: State) => state.modals.classroomModal
  );
  const userRole = useSelector((state: State) => state.user.userData.role);
  const [handleClassroomForm, setHandleClassroomForm] = useState(false);

  if (!classroomModal) {
    return <></>;
  }

  return (
    <StyledClassroom>
      <StyledSection>
        <h3>ÉLÈVES</h3>
        <div>
          {userRole === 'teacher' ? (
            <ClassroomAddStudent
              onClick={() => setHandleClassroomForm(!handleClassroomForm)}
            />
          ) : (
            ''
          )}
          {students.map((elt) => (
            <ClassroomItem
              key={elt.id}
              fullName={elt.fullName}
              picture={elt.picture}
            />
          ))}
        </div>
      </StyledSection>

      {handleClassroomForm && userRole === 'teacher' ? (
        <StyledSection>
          <ClassroomForm />
        </StyledSection>
      ) : (
        ''
      )}
    </StyledClassroom>
  );
}

export default Classroom;
