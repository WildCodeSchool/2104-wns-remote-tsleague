/* eslint-disable class-methods-use-this */
import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { getModelForClass } from '@typegoose/typegoose';
import Classroom from '../models/classrooms-model';

const ClassroomModel: any = getModelForClass(Classroom);

@Resolver(Classroom)
class ClassroomResolver {
  @Query(() => Classroom)
  getClassroomById(@Arg('id') id: string) {
    return ClassroomModel.findById(id);
  }

  @Query(() => [Classroom])
  getClassroomsById(@Arg('ids', (type) => [String]) ids: string[]) {
    return ClassroomModel.find({ _id: { $in: ids } });
  }

  @Mutation(() => Classroom)
  async createClassroom(@Arg('name') name: string) {
    const classroom = await ClassroomModel.create({ name });
    return classroom;
  }
}

export default ClassroomResolver;
