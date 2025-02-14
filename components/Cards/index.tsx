const index = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg px-6 py-8 m-10 ring shadow-xl ring-gray-900/5  w-100 '>
      <h2 className='text-gray-900 text-xl text-center mb-10 dark:text-white'>
        {title}
      </h2>
      <div className='text-gray-900 text-center dark:text-white'>{text}</div>
    </div>
  );
};
export default index;
