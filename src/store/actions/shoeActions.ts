export const SHOE_CHANGE_COLOR = 'shoe/changeColor';

export const changeColor = (color: string) => ({
  type: SHOE_CHANGE_COLOR,
  payload: color,
});
