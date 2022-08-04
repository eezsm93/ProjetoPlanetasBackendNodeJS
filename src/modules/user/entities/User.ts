import { validateEntity } from "@shared/validation/validator";
import { v4 as uuidV4 } from "uuid";
import { UserRules } from "./UserRules";

interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  type: string;
  isActive: boolean;
}

class User {
  id: string;
  name: string;
  email: string;
  password: string;
  type: string;
  isActive: boolean;

  constructor(props: IUser) {
    if (!props.id) {
      props.id = uuidV4();
    }

    validateEntity(props, UserRules);
    Object.assign(this, props);
  }
}

export { User };
