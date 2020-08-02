export const baseURL = "http://localhost:8000";
export const eventsURL = baseURL + "/events"; // /events/?search=searchTerms & location & date & place + PAGINATION
export const trendEventsURL = eventsURL + "/trend"; // /events/trend
export const clubsURL = baseURL + "/clubs"; // /clubs + /?search=serachTerms & location & type ...filters
export const eventsInClub = clubsURL + "/events"; // /clubs/events + /?search=searchTerms
