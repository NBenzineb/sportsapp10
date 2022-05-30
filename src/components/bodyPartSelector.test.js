import { render, screen, fireEvent } from '@testing-library/react';
import BodyPartSelector from './bodyPartSelector';
  
test('invites the user to choose their workout', () => {
  render(<BodyPartSelector />);
  const text = screen.getByText("Choose your workout:");
  expect(text).toBeInTheDocument();
});

test('user can select a body part', () => {
  let spy = jest.fn();
  render(<BodyPartSelector updateSelected={spy}/>);
  const checkbox = screen.getByLabelText("Upper Body", "Lower Body, Full Body");
  fireEvent.click(checkbox);
  console.log(spy.mock.calls);
  expect(spy.mock.calls.length).toEqual(1);
  expect(spy.mock.calls[0][0]).toEqual({"upperBody" : true});
  //expect(text).toBeInTheDocument();
  // send data to App.js
});

// test('user can deselect body part', () => {
//   let spy = jest.fn();
//   render(<BodyPartSelector updateSelected={spy}/>);
//   const checkbox = screen.getByLabelText("Upper Body");
//   fireEvent.click(checkbox);
//   fireEvent.click(checkbox);

//   expect(spy.mock.calls.length).toEqual(2);
//   expect(spy.mock.calls[1][0]).toEqual({});
  
// });
// //user can select a body part
// //user can deselect body parts
// //user can select multiple body parts