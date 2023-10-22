import { useEffect, useRef } from "react";

function useOutsideClick(callbackFn, listeningCapturing = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          callbackFn();
        }
      }
      document.addEventListener("click", handleClick, listeningCapturing);
      return () =>
        document.removeEventListener("click", handleClick, listeningCapturing);
    },
    [callbackFn, listeningCapturing]
  );
  return ref;
}

export default useOutsideClick;
