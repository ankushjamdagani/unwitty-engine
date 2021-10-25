const EventTarget =
  typeof window === 'undefined'
    ? class MockEventTarget {
        constructor() {
          this.eventsMap = {};
        }
        addEventListener(name, handler) {
          this.eventsMap[name] = this.eventsMap[name] || [];
          this.eventsMap[name].push(handler);
          return this;
        }
        removeEventListener(name, handler) {
          this.eventsMap[name] = (this.eventsMap[name] || []).filter(
            el => el !== handler
          );
          return this;
        }
        dispatchEvent(event) {
          (this.eventsMap[event.name] || []).forEach(el => el(event));
          return this;
        }
      }
    : window.EventTarget;

export default class EventEmitter {
  constructor() {
    this.target = new EventTarget();
  }
  on(eventName, listener) {
    return this.target.addEventListener(eventName, listener);
  }
  once(eventName, listener) {
    return this.target.addEventListener(eventName, listener, { once: true });
  }
  off(eventName, listener) {
    return this.target.removeEventListener(eventName, listener);
  }
  emit(eventName, detail) {
    return this.target.dispatchEvent(
      new CustomEvent(eventName, { detail, cancelable: true })
    );
  }
}
