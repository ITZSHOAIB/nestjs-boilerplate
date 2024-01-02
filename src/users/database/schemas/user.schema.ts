import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  _id?: Types.ObjectId;

  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true, unique: true, trim: true })
  email: string;

  @Prop({ required: true, trim: true })
  phoneNumber: string;

  @Prop({ default: false })
  verified: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
