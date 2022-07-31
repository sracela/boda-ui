import { useRef, useEffect } from "react";

export function useEventListener(eventName, handler, element) {
  // Create a ref that stores handler
  const savedHandler = useRef();

  useEffect(() => {
    // Define the listening target
    const targetElement = element?.current || window;
    if (!(targetElement && targetElement.addEventListener)) {
      return undefined;
    }
    // Update saved handler if necessary
    if (savedHandler.current !== handler) {
      savedHandler.current = handler;
    }

    // Create event listener that calls handler function stored in ref
    const eventListener = (event) => {
      if (savedHandler?.current) {
        savedHandler.current(event);
      }
    };

    targetElement.addEventListener(eventName, eventListener);

    // Remove event listener on cleanup
    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element, handler]);
}

export function useInfiniteScroll({ loading, hasMore, handleLoad }) {
  function handleDocumentScroll() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const scrollHeight =
      document.body.scrollHeight || document.documentElement.scrollHeight;

    if (
      winScroll >= scrollHeight - (window.screen.height - 100) &&
      hasMore &&
      !loading
    ) {
      handleLoad();
    }
  }

  useEventListener("scroll", handleDocumentScroll);

  return null;
}
