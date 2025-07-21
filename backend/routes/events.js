class Event {
  constructor({ event_name, location_zip, date, language, instructor, type }) {
    this.event_name = event_name;
    this.location_zip = location_zip;
    this.date = new Date(date);
    this.language = language;
    this.instructor = instructor;
    this.type = type;
  }
}

const sampleEvents = [
  new Event({
    event_name: "Intro to Email",
    location_zip: "94306",
    date: "2025-08-10",
    language: "English",
    instructor: "Jane Lee",
    type: "Workshop"
  })
];

module.exports = { Event, sampleEvents };

