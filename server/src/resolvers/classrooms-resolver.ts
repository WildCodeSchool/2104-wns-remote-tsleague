/* eslint-disable class-methods-use-this */
import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { Classroom, ClassroomModel } from '../models/classrooms-model';

@Resolver(Classroom)
class ClassroomResolver {
  @Query(() => Classroom)
  getClassroom(@Arg('id') id: string) {
    return ClassroomModel.findById(id);
  }

  @Query(() => [Classroom])
  getClassrooms(@Arg('ids', () => [String]) ids: string[]) {
    return ClassroomModel.find({ _id: { $in: ids } });
  }

  @Mutation(() => Classroom)
  async createClassroom(@Arg('name') name: string) {
    const classroom = await ClassroomModel.create({ name });
    return classroom;
  }
}

export default ClassroomResolver;
