import { Model, ObjectId, LeanDocument, Document } from 'mongoose';
import { QueryResult } from '../plugins/paginate';

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: string;
  isEmailVerified: boolean;
}

export interface IUserDoc extends IUser, Document {
  isPasswordMatch(password: string): Promise<boolean>;
}

export interface IUserModel extends Model<IUserDoc> {
  isEmailTaken(email: string, excludeUserId?: ObjectId): Promise<boolean>;
  paginate(filter: Record<string, any>, options: Record<string, any>): Promise<QueryResult>;
  toJSON(): LeanDocument<this>;
}

export interface UpdateUserBody {
  name?: string;
  email?: string;
  password?: string;
  role?: string;
  isEmailVerified?: boolean;
}

export interface NewRegisteredUser {
  name: string;
  email: string;
  password: string;
}

export interface NewCreatedUser {
  name: string;
  email: string;
  password: string;
  role: string;
}
