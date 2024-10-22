import SearchWindow from '@/components/ClientSearchWindow';
import Typography from '@/components/Typhography';
import { TypographyType } from '@/constant';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const TitleProps = {
    type: TypographyType.MAIN_TITLE,
    text: '당신의 전적이 궁금하다면? Fizz.GG',
  };
  
  return (
    <section className='flex flex-col items-center w-full my-10 gap-10 pulse'>
        <Typography {...TitleProps} />
        <SearchWindow />
      </section>
  );
};

export default Home;
