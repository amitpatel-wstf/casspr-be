
import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  walletAddress: string;
  chainId: number;
  username?: string;
  email?: string;
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: boolean;
  // Add more fields as needed for your app
}

const UserSchema = new Schema<IUser>({
  walletAddress: { type: String, required: true, unique: true },
  chainId: { type: Number, required: true },
  username: { type: String },
  email: { type: String },
  isActive: { type: Boolean, default: true },
}, {
  timestamps: true,
});

UserSchema.index({ walletAddress: 1, chainId: 1 }, { unique: true });

export const UserModel = model<IUser>("User", UserSchema);

