function HomePageFacilitesCard() {
  return (
    <div
      className={` flex justify-start  bg-red-400 text-center hover:bg-green-600 mx-auto h-24 sm:h-24 md:h-22 p-2 w-full sm:w-11/12  my-2 rounded-lg shadow-lg `}
    >
      <div className="  h-20  w-24 sm:w-24  rounded-xl bg-white"></div>
      <div className="flex flex-col 2sm:h-20  md:h-20   justify-start place-items-start ">
        <h1 className="mx-4 text-lg">Notice Header</h1>
        <h1 className="mx-4 text-lg">Notice Date</h1>
        <h1 className="mx-4 text-lg">Sub title</h1>
      </div>
    </div>
  );
}

export default HomePageFacilitesCard;
