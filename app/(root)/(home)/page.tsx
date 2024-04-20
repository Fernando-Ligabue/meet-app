import MeetingTypeList from '@/components/MeetingTypeList';
import React from 'react'


function capitalizeWords(str: string) {
  return str.replace(/(^|\s)\S/g, function(char: string) {
    return char.toUpperCase();
  });
}
const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit'});
  const date = (new Intl.DateTimeFormat('pt-PT', { 
    dateStyle: 'full' 
  })).format(now);

  const cDate = capitalizeWords(date);

  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <div className='h-[300px] w-full rounded-xl bg-hero bg-cover'>
        <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
          <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'>Próxima Reunião às 12:30</h2>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-extrabold lg:text-7xl'>{time}</h1>
            <p className='text-lg font-medium text-sky-1 lg:text-2xl'>{cDate}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  )
}

export default Home;