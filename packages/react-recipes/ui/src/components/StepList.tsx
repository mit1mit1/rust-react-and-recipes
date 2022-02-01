import { getTemperatureString } from "../utils";
import { Step, TemperatureScale } from "../types";

interface StepListProps {
  steps: Array<Step>;
  multiplier: number;
  temperature_scale: TemperatureScale;
}

const getStepText = (
  step: Step,
  multiplier: number,
  temperature_scale: TemperatureScale
) => {
  let step_text = "";
  step.forEach((step_item) => {
    if (typeof step_item === "number") {
      step_text = step_text.concat((step_item * multiplier).toString());
    } else if (typeof step_item === "string") {
      step_text = step_text.concat(step_item);
    } else {
      step_text = step_text.concat(
        getTemperatureString(step_item, temperature_scale)
      );
    }
    step_text = step_text.concat(" ");
  });
  return step_text;
};

const StepList = ({ steps, multiplier, temperature_scale }: StepListProps) => {
  return (
    <ol>
      {steps.map(function (step) {
        return (
          <li key={getStepText(step, multiplier, temperature_scale)}>
            {getStepText(step, multiplier, temperature_scale)}
          </li>
        );
      })}
    </ol>
  );
};

export default StepList;
