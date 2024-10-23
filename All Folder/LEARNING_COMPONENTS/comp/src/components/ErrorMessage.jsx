// // ErrorMessage Component
// const ErrorMessage = ({ items }) => {
//   return (
//     <>
//       {items.length === 0 ? <h3>No food items available.</h3> : <h3>Here’s your food list:</h3>}
//     </>
//   );
// };

// export default ErrorMessage;

// ErrorMessage Component
const ErrorMessage = ({ items }) => {
  // Check if items array is empty
  const isEmpty = items.length === 0;

  return (
    <div>
      {isEmpty ? (
        <h3>No food items available.</h3>
      ) : (
        <h3>Here’s your food list:</h3>
      )}
    </div>
  );
};

export default ErrorMessage;
