'use client'
import { FC, FormEventHandler } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { usePathname, useRouter } from 'next/navigation';
import { useInput } from '@/hooks/useInput';
import Input from './common/Input';
import Button, { type ButtonProps } from './common/Button';

export interface SearchWindowProps {
  mini?: boolean;
}

const SearchWindow: FC<SearchWindowProps> = ({ mini = false }) => {
  const { value: nickname, onChange } = useInput('');
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    await router.push(`/search?nickname=${nickname}`);
  };

  const miniIconProps = {
    size: '30',
    className: 'translate-x-10 translate-y-3',
  };
  const iconProps= {
    size: '40',
  className: 'translate-x-10 translate-y-2',
  }
  const inputProps = {
    onChange,
    value: nickname,
    placeholder: 'Search',
    labelFor: 'Search',
    required: true,
  }
  const miniButtonProps:ButtonProps = {
    label: 'GG',
    color: 'transparent',
    type: 'submit',
  };
  const buttonProps:ButtonProps = {
    label: 'Search',
    type: 'submit',
  };


  return (
    <form className='w-2/5' onSubmit={handleSubmit}>
      {mini ? (
        <div className='flex flex-row justify-center w-full justify-items-center'>
          <AiOutlineSearch {...miniIconProps} />
          <Input {...inputProps}  />
          <div className='-translate-x-13.5 translate-y-1.5'>
            <Button {...miniButtonProps} />
          </div>
        </div>
      ) : (
        <div className='flex flex-row justify-center w-full justify-items-center'>
          <AiOutlineSearch {...iconProps} />
          <Input {...inputProps} />
          <Button {...buttonProps} />
        </div>
      )}
    </form>
  );
};

export default SearchWindow;
