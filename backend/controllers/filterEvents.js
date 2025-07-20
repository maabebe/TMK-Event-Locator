// Dummy Test Data
const events = [
  {
    event_name: "Intro to Email",
    location_zip: "94306",
    date: "2025-08-10",
    language: "English",
    instructor: "Jane Lee",
    type: "Workshop"
  },
  {
    event_name: "Drop-in for Google Docs",
    location_zip: "94306",
    date: "2025-08-12",
    language: "Spanish",
    instructor: "Carlos Ruiz",
    type: "Drop-in Help"
  },
  {
    event_name: "Excel Basics",
    location_zip: "94305",
    date: "2025-08-15",
    language: "English",
    instructor: "John Doe",
    type: "Seminar"
  },
  {
    event_name: "Google Sheets for Beginners",
    location_zip: "10001",
    date: "2025-09-01",
    language: "English",
    instructor: "Amy Smith",
    type: "Workshop"
  }
];

// Kinza's Code
function safeParseDate(dateStr) {
  const date = new Date(dateStr);
  return isNaN(date.getTime()) ? null : date;
}


function filterEvents({
  zip = "",
  type = "",
  language = "",
  startDate = "",
  endDate = ""
} = {}) {
  const zipFilter = String(zip).trim().toLowerCase();
  const typeFilter = String(type).trim().toLowerCase();
  const languageFilter = String(language).trim().toLowerCase();
  const start = safeParseDate(startDate);
  const end = safeParseDate(endDate);

  return events.filter(event => {
    const eventZip = String(event.location_zip || "").toLowerCase();
    const eventType = String(event.type || "").toLowerCase();
    const eventLanguage = String(event.language || "").toLowerCase();
    const eventDate = safeParseDate(event.date);

    const zipMatch = !zipFilter || eventZip.startsWith(zipFilter);
    const typeMatch = !typeFilter || eventType === typeFilter;
    const languageMatch = !languageFilter || eventLanguage === languageFilter;

    let dateMatch = true;
    if (eventDate) {
      if (start && end) {
        dateMatch = eventDate >= start && eventDate <= end;
      } else if (start) {
        dateMatch = eventDate >= start;
      } else if (end) {
        dateMatch = eventDate <= end;
      }
    } else {
      // Event has invalid date
      dateMatch = !start && !end;
    }

    return zipMatch && typeMatch && languageMatch && dateMatch;
  }).sort((a, b) => new Date(a.date) - new Date(b.date));
}


function displayEvents(eventList) {
  if (eventList.length === 0) {
    console.log("⚠️ No events match your filters.");
  } else {
    console.log("🎯 Matched Events:");
    eventList.forEach(e => {
      console.log(`- ${e.event_name || "Untitled"} | ${e.date || "No date"} | ${e.type || "No type"} | ${e.language || "No language"} | Zip: ${e.location_zip || "N/A"}`);
    });
  }
}

// Example Test
const filtered = filterEvents({
  zip: "943",
  type: "Workshop",
  language: "english",
  startDate: "2025-08-01",
  endDate: "2025-08-31"
});
displayEvents(filtered);


module.exports = {
  events,
  safeParseDate,
  filterEvents,
  displayEvents
};

