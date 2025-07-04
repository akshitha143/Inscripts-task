import { useState } from "react";

export function useEditableCell(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const [isEditing, setEditing] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const onBlur = () => setEditing(false);

  const startEditing = () => setEditing(true);

  return {
    value,
    isEditing,
    onChange,
    onBlur,
    startEditing,
    setEditing,
  };
}
