const MeetupApi = require("meetup-api")({ key: process.env.MEETUP_API_KEY });

module.exports = async function getUpcomingMeetups() {
  await MeetupApi.getUpcomingEvents(
    { page: 10, self_groups: "only" },
    (err, obj) => {
      const results = obj.upcoming_events;
      return results;
    }
  );
};
