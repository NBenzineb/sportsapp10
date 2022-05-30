import { render, screen } from '@testing-library/react';
import WorkoutList from './workoutList';

test('gives titles to the workouts', () => {
  render(<WorkoutList />);
  const text = screen.getByText("Chest & Abs");
  expect(text).toBeInTheDocument();
});
