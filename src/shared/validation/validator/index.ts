import { validateSync } from "class-validator";
import { AppError } from "../../../shared/errors/AppError";

export function validateEntity(data: any, Rules: any) {
  const rules = new Rules();

  const errorsList = [];
  Object.assign(rules, { ...data });
  const errors = validateSync(rules);

  if (errors?.length) {
    errors.map((e) => {
      let constraints = Object.keys(e.constraints).map(
        (constraint) => e.constraints[constraint]
      );
      errorsList.push(...constraints);
    });
    throw new AppError(JSON.stringify(errorsList));
  }
}
