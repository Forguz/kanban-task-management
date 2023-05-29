import React, { RefObject, useEffect } from 'react';

export function useOutsideClickEvent(
  ref: RefObject<HTMLElement>,
  onClick: (
    eventOfTarget: MouseEvent | React.MouseEvent<HTMLElement, MouseEvent>,
    clickedOut: boolean
  ) => void
) {
  useEffect(() => {
    function handleClickOutside(
      event: React.MouseEvent<HTMLElement, MouseEvent> | MouseEvent
    ) {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        onClick(event, true);
      }
    }
    document.addEventListener('mousedown', handleClickOutside, true);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  }, [ref, onClick]);
}
