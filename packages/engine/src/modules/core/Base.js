const EventTarget =
  typeof window === 'undefined'
    ? class MockEventTarget {
        addEventListener() {
          return this;
        }
        removeEventListener() {
          return this;
        }
        dispatchEvent() {
          return this;
        }
      }
    : window.EventTarget;

class Base extends EventTarget {}

export default Base;
