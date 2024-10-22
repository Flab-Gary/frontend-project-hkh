import { useRouter } from 'next/navigation';
import { ChangeEvent, useState, type FormEventHandler } from 'react';

export const useInput = (initialState: string) => {
  const router = useRouter()
  const [value, setValue] = useState(initialState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
  };


  const handleSearch: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    await router.push(`/search?nickname=${value}`);
  };

  return { value, onChange, setValue, handleSearch };
};
