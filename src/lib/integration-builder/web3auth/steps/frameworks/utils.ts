export type StepOffsets = Record<string, { deps: string[]; offset: number }>;

export const calculateStepOffsets = (steps: StepOffsets, _placeHolderOffsets: Record<string, number>): StepOffsets => {
  const result: StepOffsets = {};
  Object.keys(steps).forEach((step) => {
    const { deps, offset } = steps[step];
    const newOffset = deps.reduce((acc, dep) => acc + _placeHolderOffsets[dep], offset);
    result[step] = { deps, offset: newOffset };
  });
  return result;
};
