import StudentCard from "./StudentCard";

function StudentSection() {
  return (
    <div>
      <ul className="flex flex-col md:flex-row  md:flex-wrap md:gap-2 lg:flex-wrap justify-center place-items-center  ">
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
      </ul>
    </div>
  );
}

export default StudentSection;
