export default function SubscribeCard() {
  return (
    <div className="flex justify-center items-center h-screen bg-zinc-700">
      <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
        <div className="flex flex-col md:flex-row rounded-l-xl">
          <img
            src="food_1.jpg"
            alt=""
            className="object-fit  h-80 rounded-xl md:h-64 transform hover:scale-105 duration-200 hover:rounded-xl"
          />
          <div className="p6 md:p-12">
            <h2 className=" font-serif text-xl font-medium text-center text-white md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              numquam obcaecati fugiat.
            </h2>
            <p className="max-w-xs text-white my-4 leading-5 tracking-wide text-center md:text-left">
              Lorem ipsum dolor sit.
            </p>
            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-3">
              <input
                className="border border-zinc-600 focus:outline-none p-2 px-4 placeholder:text-center placeholder:md:text-left text-white bg-zinc-800 placeholder:text-zinc-600"
                placeholder="Enter your email address"
                type="text"
              />
              <button className="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 duration-500 hover:text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
