/* eslint-disable class-methods-use-this */
import {
  Resolver, Query, Arg, Mutation,
} from 'type-graphql';
import { Classroom, ClassroomModel } from '../models/classrooms-model';
import ClassroomInput from './validator/classroomInput';

@Resolver(Classroom)
class ClassroomResolver {
  @Query(() => [Classroom])
  getAllClassrooms() {
    return ClassroomModel.find();
  }

  @Query(() => Classroom)
  getClassroomById(@Arg('id') id: string) {
    return ClassroomModel.findById(id);
  }

  @Query(() => [Classroom])
  getClassroomsByIds(@Arg('ids', () => [String]) ids: string[]) {
    return ClassroomModel.find({ _id: { $in: ids } });
  }

  @Mutation(() => Classroom)
  public async createClassroom(@Arg('input') classroomInput: ClassroomInput) {
    await ClassroomModel.init();
    const classroom = new ClassroomModel(classroomInput);
    await classroom.save();
    return classroom;
  }

  @Mutation(() => Classroom)
  public async updateClassroom(@Arg('input') classroomInput: ClassroomInput) {
    const classroom = await ClassroomModel.findOneAndUpdate(
      { _id: classroomInput.id },
      classroomInput,
      {
        new: true,
      },
    );
    return classroom;
  }

  @Mutation(() => Classroom, { nullable: true })
  public async deleteClassroom(@Arg('id', () => String) id: string) {
    const classroom = await ClassroomModel.findOneAndDelete({ _id: id });
    return classroom;
  }
}

export default ClassroomResolver;
