import { useEffect, useState, useReducer } from 'react';
import styles from './Counter.css';

const colors = {
  yellow: 'rgb(236, 222, 153)',
  green: 'rgb(52, 211, 153)',
  red: 'rgb(239, 68, 68)',
};

const counter = {
  color: colors.yellow,
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT_COUNT':
      return { ...state, count: state.count - 1 };
    case 'RESET_COUNT':
      return { ...state, count: 0 };
    case 'UPDATE_COLOR':
      return { ...state, color: action.payload };
  }
};

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, counter);
  // const [count, setCount] = useState(0);
  // const [currentColor, setCurrentColor] = useState(colors.yellow);

  useEffect(() => {
    if (state.count === 0) {
      dispatch({ type: 'UPDATE_COLOR', payload: colors.yellow });
      // setCurrentColor(colors.yellow);
    }

    if (state.count > 0) {
      dispatch({ type: 'UPDATE_COLOR', payload: colors.green });
      // setCurrentColor(colors.green);
    }

    if (state.count < 0) {
      dispatch({ type: 'UPDATE_COLOR', payload: colors.red });
      // setCurrentColor(colors.red);
    }
  }, [state.count]);

  const increment = () => {
    dispatch({ type: 'INCREMENT_COUNT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT_COUNT' });
  };

  const reset = () => {
    dispatch({ type: 'RESET_COUNT' });
  };

  return (
    <main className={styles.main}>
      <h1 style={{ color: state.color }}>{state.count}</h1>
      <div>
        <button
          type="button"
          onClick={increment}
          aria-label="increment"
          style={{ backgroundColor: colors.green }}
        >
          Increment
        </button>
        <button
          type="button"
          onClick={decrement}
          aria-label="decrement"
          style={{ backgroundColor: colors.red }}
        >
          Decrement
        </button>
        <button
          type="button"
          aria-label="reset"
          onClick={reset}
          style={{ backgroundColor: colors.yellow }}
        >
          Reset
        </button>
      </div>
    </main>
  );
}
