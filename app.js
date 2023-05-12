import { findDuplicateValue } from "./array/duplicateValue";
let data = [20, 20, 40, 2, 30, 50, 2, 30, 55, 50, 1, 6, 9, 9]

console.log(findDuplicateValue(data));



// check uncheck



import { useState } from 'react';

function CheckboxList() {
  const [items, setItems] = useState([
    { id: 1, label: 'Item 1', checked: false },
    { id: 2, label: 'Item 2', checked: false },
    { id: 3, label: 'Item 3', checked: false },
  ]);

  const handleCheckboxChange = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          checked: !item.checked,
        };
      }
      return item;
    });

    setItems(updatedItems);
  };

  const filteredItems = items.filter((item) => item.checked);

  return (
    <div>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ul>
      <div>
        {items.map((item) => (
          <label key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange(item.id)}
            />
            {item.label}
          </label>
        ))}
      </div>
    </div>
  );
}

filter
        // let newRes: any = res?.filter(
        //     (ele: any) => ele !== undefined && ele !== '\n' && /^[0-9]/.test(ele),
        // );
