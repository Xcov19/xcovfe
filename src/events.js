const createEventBus = () => {
  const _listeners = {};
  let _nextId = 0;
  return {
    call: (...args) => Object.values(_listeners).forEach(fn => fn(...args)),
    listen: fn => {
      const id = ++_nextId;
      _listeners[id] = fn;
      return () => { delete _listeners[id] }
    },
  };
};

export const createProject = createEventBus();
