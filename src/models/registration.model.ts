import { Schema, models, model, ObjectId } from "mongoose";

export interface IRegistration {
  userId: ObjectId;
  eventId: ObjectId;
  groupMembers: ObjectId[];
}

//NOTE: need to refactor for get csv as we required;

const registrationSchema = new Schema<IRegistration>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    eventId: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    groupMembers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Registration =
  models.Registration ||
  model<IRegistration>("Registration", registrationSchema);
