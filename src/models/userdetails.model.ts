import { Schema, models, model, ObjectId } from "mongoose";

export interface IUserDetail {
  department: string;
  year: string;
  semester: string;
  userId: ObjectId;
}

//TODO: need to add details as required;

const userDetailSchema = new Schema<IUserDetail>(
  {
    department: {
      type: String,
      enum: ["CO", "IT", "MH", "CL", "AIDS", "CH", "EL"],
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    semester: {
      type: String,
      max: 8,
    },
  },
  {
    timestamps: true,
  }
);

const UserDetail =
  models.UserDetail || model<IUserDetail>("UserDetail", userDetailSchema);

export default UserDetail;

// TODO
