function EducatorCard() {
  return (
    <div className="flex bg-gradient-to-tr rounded-xl from-yellow-200 hover:to-red-300  flex-col justify-evenly place-items-center bg-white w-80 h-96 m-2">
      <div className="flex border-4 border-purple-300 rounded-full w-32 h-32 m-2">
        <img
          src="/hello.jpeg"
          className="rounded-full"
          alt="Hemanta Karki"
          layout="responsive"
          height="300"
          width="300"
        />
      </div>
      <p className="text-blue-400 font-bold text-center">
        Hemanta Karki <br />
        <span className="text-gray-500">Founder & Principal</span> <br />{" "}
        <span className="text-purple-400">Experience: 2 years</span>{" "}
      </p>
    </div>
  );
}

export default EducatorCard;
