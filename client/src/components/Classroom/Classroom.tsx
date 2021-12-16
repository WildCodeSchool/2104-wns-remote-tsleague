import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { gql, useQuery } from '@apollo/client';

import { StyledClassroom, StyledSection } from '../styles/Classroom';
import ClassroomItem from './ClassroomItem';
import ClassroomForm from './ClassroomForm';
import ClassroomAddStudent from './ClassroomAddStudent';
import { State } from '../../redux/root-reducer';

interface ClassroomStudents {
  id: string;
  firstname: string;
  lastname: string;
  picture?: string;
}

const GET_CLASSROOM = gql`
  query Query($getClassroomByIdId: String!) {
    getClassroomById(id: $getClassroomByIdId) {
      students {
        id
        firstname
        lastname
      }
    }
  }
`;

function Classroom(): JSX.Element {
  const classroomModal = useSelector(
    (state: State) => state.modals.classroomModal
  );
  const userRole = useSelector((state: State) => state.user.userData.role);
  const classroomId = useSelector(
    (state: State) => state.user.userData.classrooms[0].id
  );
  const { loading, error, data } = useQuery(GET_CLASSROOM, {
    variables: { getClassroomByIdId: classroomId },
  });
  const [handleClassroomForm, setHandleClassroomForm] = useState(false);

  if (!classroomModal) {
    return <></>;
  }

  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
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
          {data.getClassroomById.students.map((elt: ClassroomStudents) => (
            <ClassroomItem
              key={elt.id}
              fullName={`${elt.firstname} ${elt.lastname}`}
              picture={elt.picture}
            />
          ))}
        </div>
      </StyledSection>

      {handleClassroomForm && userRole === 'teacher' ? (
        <StyledSection>
          <ClassroomForm
            handleModalForm={() => setHandleClassroomForm(!handleClassroomForm)}
          />
        </StyledSection>
      ) : (
        ''
      )}
    </StyledClassroom>
  );
}

export default Classroom;
