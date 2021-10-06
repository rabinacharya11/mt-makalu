function EmailSubscription() {
  return (
    <div className="flex justify-center justify-items-center my-1 mx-auto w-3/4 bg-red-500">
      <div className="flex flex-col justify-center place-items-center md:flex-row w-3/4  p-4">
        <input type="email"placeholder='Enter your email' className="h-8 text-center text-black w-full"></input>
        <div className="text-center w-1/4 mt-2 md:mt-0 flex rounded-xl bg-blue-700  h-8 justify-center place-items-center px-3 mx-3">
          Submit
        </div>
      </div>
    </div>
  );
}

export default EmailSubscription;
