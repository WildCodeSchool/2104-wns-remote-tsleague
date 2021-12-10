import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getClassroomModal } from '../../redux/modal/modal.reducers';
import { StyledClassroom, StyledSection } from '../styles/Classroom';
import ClassroomItem from './ClassroomItem';
import ClassroomForm from './ClassroomForm';

import { students } from './mock';
import ClassroomAddStudent from './ClassroomAddStudent';

function Classroom(): JSX.Element {
  const classroomModal = useSelector(getClassroomModal);
  const [handleClassroom, setHandleClassroom] = useState(classroomModal);
  console.log(classroomModal);

  useEffect(() => {}, [classroomModal]);

  if (handleClassroom) {
    return <></>;
  }

  return (
    <StyledClassroom>
      <StyledSection>
        <h3>ÉLÈVES</h3>
        <div>
          <ClassroomAddStudent />
          {students.map((elt) => (
            <ClassroomItem
              key={elt.id}
              fullName={elt.fullName}
              picture={elt.picture}
            />
          ))}
        </div>
      </StyledSection>

      <StyledSection>
        <ClassroomForm />
      </StyledSection>
    </StyledClassroom>
  );
}

export default Classroom;
