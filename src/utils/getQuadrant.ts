export enum Quadrant {
  TL = 'top-left',
  BL = 'bottom-left',
  TR = 'top-right',
  BR = 'bottom-right',
}

export const getQuadrantWithRespectToViewport = (element: HTMLElement) => {
  try {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (centerX < viewportWidth / 2) {
      if (centerY < viewportHeight / 2) {
        return Quadrant.TL;
      } else {
        return Quadrant.BL;
      }
    } else {
      if (centerY < viewportHeight / 2) {
        return Quadrant.TR;
      } else {
        return Quadrant.BR;
      }
    }
  } catch (error: any) {
    console.error('Error: ' + error.message);
    return null;
  }
};
