const MeetupApi = require("meetup-api")({ key: process.env.MEETUP_API_KEY });

function getUpcomingMeetups() {
  return new Promise((resolve, reject) => {
    MeetupApi.getUpcomingEvents(
      { page: 10, self_groups: "only" },
      (err, obj) => {
        if (err) reject(err);
        resolve(obj);
      }
    );
  });
}

module.exports = {
  getUpcomingMeetups
};
