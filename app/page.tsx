export default function Home() {
  return (
    <div className="flex flex-1 bg-zinc-50 dark:bg-gray-900 w-full py-[5%] px-[5%]">
      <main className="  bg-white dark:bg-gray-800 py-16 px-8 rounded-lg shadow-lg w-full">
        <div className="flex flex-col w-full mx-auto text-center ">
         <h1 className="text-2xl md:text-3xl my-[5%]">Hi 来这里给后面的人留下一张小纸条吧</h1>
         <h2 className="md:text-xl text-sm">
           你可以写下任何东西，<br></br>包括但不限于遇到了一只胖胖的猫,<br></br>或是有只bug飞到了你的代码里，而你赶不走它
         </h2>
        </div>
        <div className="flex my-8 mx-8">
          <input
            type="text"
            placeholder="你想传的小纸条"
            className="flex flex-1 w-full text-sm px-4 py-4 md:text-2xl border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:border-transparent"
          />
          <button
            type="submit"
            className="flex  ml-2 px-4 py-5 text-xl font-semibold text-white bg-zinc-600 rounded-4xl hover:bg-zinc-400 focus:outline-none focus:ring-2"
          >
            传走
          </button>
        </div>
        <div className="felx my-16 text-2xl flex-col font-mono">
          <h2 className="text-center">
            这是别人给你传的小纸条
          </h2>
          <p className="text-xl my-4 mx-4">
            <span className="flex flex-1 text-start text-3xl my-8 mx-8">“</span>
            <span className="flex flex-1 flex-col items-center text-xl md:text-4xl my-4">hi</span>
            <span className="flex flex-1  flex-col text-end text-3xl my-8 mx-8">”</span>
          </p>

        </div>
      </main>
    </div>
  );
}
