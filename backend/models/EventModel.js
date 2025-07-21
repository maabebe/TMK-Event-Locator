class Event {
  constructor({ event_name, location_zip, date, language, instructor, type }) {
    this.event_name = event_name;
    this.location_zip = location_zip;
    this.date = new Date(date); // Store as Date object
    this.language = language;
    this.instructor = instructor;
    this.type = type;
  }
}

module.exports = Event;

