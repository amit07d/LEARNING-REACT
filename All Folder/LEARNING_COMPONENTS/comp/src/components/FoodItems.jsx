// // FoodItems Component
// import { useState } from "react";
// import Item from "./Item";

// const FoodItems = ({ items }) => {
//  const [activeItems, setActiveItems] = useState([]);
//   let onBuyButton = (item, event) => {
//     let newItems = [...activeItems, item];
//     setActiveItems(newItems);
// }
 
//   return (
//     <ul className="list-group">
//       {items.map((item) => (
//         <Item
//           key={item}
//           foodItem={item}
//           brought={activeItems.includes(item)}
//           buyItem={(event)  => onBuyButton (item, event)}
//         ></Item>
//       ))}
//     </ul>
//   );
// };

// export default FoodItems;



import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {
  // Declare state to keep track of active (brought) items
  const [activeItems, setActiveItems] = useState([]);

  // Function to handle when an item is brought
  const handleBuyItem = (item) => {
    // Check if the item is already in activeItems
    if (activeItems.includes(item)) {
      // If it is, remove it from the list
      setActiveItems(activeItems.filter((i) => i !== item));
    } else {
      // If not, add it to the list
      setActiveItems([...activeItems, item]);
    }

    console.log(`${item} brought`);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          brought={activeItems.includes(item)}
          buyItem={() => handleBuyItem(item)} // Use handleBuyItem here
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;






