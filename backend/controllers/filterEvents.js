// Dummy test data
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
  }
];

// Kinza's Code
function safeParseDate(dateStr) {
  const date = new Date(dateStr);
  return isNaN(date) ? null : date;
}

function filterEvents(zip = "", type = "", language = "", startDate = "", endDate = "") {
  zip = zip.trim();
  type = type.trim().toLowerCase();
  language = language.trim().toLowerCase();
  const start = safeParseDate(startDate);
  const end = safeParseDate(endDate);

  return events.filter(event => {
    const zipMatch = !zip || event.location_zip === zip;
    const typeMatch = !type || (event.type && event.type.toLowerCase() === type);
    const languageMatch = !language || (event.language && event.language.toLowerCase() === language);

    let dateMatch = true;
    if (start && end) {
      const eventDate = safeParseDate(event.date);
      dateMatch = eventDate && eventDate >= start && eventDate <= end;
    }

    return zipMatch && typeMatch && languageMatch && dateMatch;
  });
}

// ✅ Example call
const filtered = filterEvents("94306", " Workshop ", " english ", "2025-08-01", "2025-08-31");

// 🎯 Output results
if (filtered.length > 0) {
  console.log("🎯 Matched Events:");
  filtered.forEach(e => {
    console.log(`- ${e.event_name} (${e.date}, ${e.type}, ${e.language}, Zip: ${e.location_zip})`);
  });
} else {
  console.log("⚠️ No events match your filters.");
}

// Exporting (for use in other files)
module.exports = { filterEvents };

