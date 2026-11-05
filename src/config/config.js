export const config = {
    // Dashboard title
    "title": "Employee earnings and hours worked",

    // Set order of page links and display text in navigation bar
    "navigation": [
  {
    "href": "index.html",
    "text": "Home"
  },
  {
    "href": "average-hourly-earnings.html",
    "text": "Average hourly earnings"
  },
  {
    "href": "average-weekly-earnings.html",
    "text": "Average weekly earnings"
  },
  {
    "href": "average-annual-earnings.html",
    "text": "Average annual earnings"
  },
  {
    "href": "average-hours-worked.html",
    "text": "Average hours worked"
  },
  {
    "href": "user-notes.html",
    "text": "User Notes"
  }
],
    
    // Version of NISRA Data portal to use.
    // Enter "data" for the live portal or "pp" for the pre-production portal.
    "portal": "data",

    // Departmental abbreviations. See departments.js for available options
    "department": "DoF",

    // Data portal tables to use in the dashboard.
    // Re-run "src/r/data.R" script after each update to list below
    "matrix": ["GHWPLGD", "GAPLGD", "TWPHWLGD"],
    
    "rateit": "ASHE_Dashboard"
    
}
