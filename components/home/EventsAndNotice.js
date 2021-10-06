import SingleEventAndNoticeCard from "./SingleEventAndNoticeCard";

function EventsAndNotice(props) {
  return (
    <div className="flex m-4   flex-col md:flex-row  justify-evenly md:justify-center text-center">
      <SingleEventAndNoticeCard title=" Latest Notices" />
      <SingleEventAndNoticeCard title="Recent Events" />
    </div>
  );
}

export default EventsAndNotice;
