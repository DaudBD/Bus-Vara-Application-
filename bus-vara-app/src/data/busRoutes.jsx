/**
 * SEED DATA — Dhaka & Gazipur bus routes
 * ----------------------------------------------------------------
 * IMPORTANT: There is no single official, complete, always-current
 * public dataset of every bus route/stop/fare in Dhaka + Gazipur.
 * Routes get merged, renamed, or reassigned to "Dhaka Nagar Paribahan"
 * over time, and BRTA revises the per-km fare periodically.
 *
 * What's below:
 *  - Entries 1–5: your original data, unchanged.
 *  - Entries 6–9: cross-checked against BRTA route notices / BRRC
 *    (Bus Route Rationalization Committee) reporting — stop order
 *    for these should be close, but double-check before shipping.
 *  - Entries 10–12: well-known operators on the same Motijheel/
 *    Gulistan ⇄ Airport ⇄ Tongi ⇄ Gazipur corridor as your entries
 *    1–3. Multiple companies legitimately share this corridor in
 *    real life, but I have NOT verified their exact stop-by-stop
 *    order — treat these three as placeholders to confirm locally
 *    (ask a helper/conductor, or check the "Bus Route: Dhaka City"
 *    app) before publishing.
 *
 * fareRate: kept at your original 2.62 for consistency — confirm
 * against the current BRTA-set city/mofussil per-km rate, since
 * this number changes with fuel-price revisions.
 * ----------------------------------------------------------------
 */

export const busRoutes = [
  {
    id: 1,
    busName: "Gazipur Paribahan",
    busNameBn: "গাজীপুর পরিবহন",
    district: ["Dhaka", "Gazipur"],
    start: "Motijheel",
    end: "Shib Bari",
    stops: [
      "Motijheel", "Paltan", "Kakrail", "Shantinagar", "Malibagh Moor",
      "Mouchak", "Moghbazar", "Nabisco", "Mohakhali", "Chairman Bari",
      "Sainik Club", "Kakali", "Banani", "Staff Road", "MES", "Shewra",
      "Kuril Bishwa Road", "Khilkhet", "Airport", "Jashimuddin",
      "Rajlakshmi", "Azampur", "House Building", "Abdullahpur", "Tongi",
      "Station Road", "Mill Gate", "Board Bazar", "Gazipur Chourasta",
      "Shib Bari",
    ],
    fareRate: 2.62,
  },

  {
    id: 2,
    busName: "BRTC",
    busNameBn: "বিআরটিসি",
    district: ["Dhaka", "Gazipur"],
    start: "Gabtoli",
    end: "Gazipur Chourasta",
    stops: [
      "Gabtoli", "Mazar Road", "Technical", "Ansar Camp", "Mirpur 1",
      "Sony Cinema Hall", "Mirpur 2", "Mirpur 10", "Mirpur 11", "Purobi",
      "Kalshi", "ECB Square", "MES", "Shewra", "Kuril Bishwa Road",
      "Kuril Chourasta", "Khilkhet", "Airport", "Jasimuddin", "Rajlakshmi",
      "Azampur", "Uttara Sector 7", "Uttara Sector 5", "House Building",
      "Abdullahpur", "Tongi", "Tongi College Gate", "Cherag Ali",
      "Gazipur Chourasta",
    ],
    fareRate: 2.62,
  },

  {
    id: 3,
    busName: "Green Dhaka",
    busNameBn: "গ্রিন ঢাকা",
    district: ["Dhaka", "Gazipur"],
    start: "Motijheel",
    end: "Abdullahpur",
    stops: [
      "Motijheel", "Gulistan", "GPO", "Paltan", "Kakrail", "Shantinagar",
      "Malibagh Moor", "Mouchak", "Moghbazar", "Satrasta", "Nabisco",
      "Mohakhali", "Chairman Bari", "Banani", "MES", "Shewra",
      "Kuril Bishwa Road", "Khilkhet", "Airport", "Jashimuddin",
      "Rajlakshmi", "Azampur", "House Building", "Abdullahpur",
    ],
    fareRate: 2.62,
  },

  {
    id: 4,
    busName: "Grameen Suveccha",
    busNameBn: "গ্রামীণ শুভেচ্ছা",
    district: ["Dhaka", "Gazipur"],
    start: "Fulbaria",
    end: "Chandra",
    stops: [
      "Fulbaria", "Chankhar Pul", "Bakshi Bazar", "Azimpur", "Nilkhet",
      "New Market", "City College", "Kalabagan", "Dhanmondi 32",
      "Dhanmondi 27", "Asad Gate", "College Gate", "Shishu Mela",
      "Shyamoli", "Kallyanpur", "Darussalam", "Technical", "Gabtoli",
      "Amin Bazar", "Hemayetpur", "Savar", "Baipayl", "Zirani Bazar",
      "Nandan Park", "Chandra",
    ],
    fareRate: 2.62,
  },

  {
    id: 5,
    busName: "FTCL",
    busNameBn: "এফটিসিএল",
    district: ["Dhaka"],
    start: "Mohammadpur",
    end: "Chittagong Road",
    stops: [
      "Mohammadpur", "Shankar", "Dhanmondi 15", "Jigatola", "City College",
      "Science Lab", "Shahbag", "Matsya Bhaban", "High Court", "Press Club",
      "Paltan", "GPO", "Gulistan", "Sayapabad", "Janapoth Moor", "Jatrabari",
      "Shonir Akhra", "Rayerbag", "Matuail", "Sign Board", "Chittagong Road",
    ],
    fareRate: 2.62,
  },

  // ---- Cross-checked against BRTA / BRRC reporting ----

  {
    id: 6,
    busName: "Sadarghat–Gazipur (BRTA Route A-206)",
    busNameBn: "সদরঘাট–গাজীপুর",
    district: ["Dhaka", "Gazipur"],
    start: "Sadarghat",
    end: "Gazipur Chourasta",
    stops: [
      "Sadarghat", "Fulbaria", "Malibagh", "Moghbazar", "Sat Rasta",
      "Zia Colony", "Jasim Uddin Road", "Cheragali (Tongi)", "Tongi",
      "Gazipur Chourasta",
    ],
    fareRate: 2.62,
    source: "BRTA-assigned route no. A-206, reported via TBS News",
  },

  {
    id: 7,
    busName: "Dhaka Nagar Paribahan (Route 22)",
    busNameBn: "ঢাকা নগর পরিবহন (রুট ২২)",
    district: ["Dhaka"],
    start: "Ghatarchar",
    end: "Staff Quarter",
    stops: [
      "Ghatarchar", "Washpur", "Basila CNG Stand", "Mohammadpur Bus Stand",
      "Town Hall", "Asad Gate", "Farmgate", "Karwan Bazar", "Banglamotor",
      "Shahbagh", "Kakrail", "Fakirapool", "Motijheel", "Tikatuli", "Kazla",
      "Konapara", "Staff Quarter",
    ],
    fareRate: 2.62,
    source: "BRRC / Dhaka Tribune reporting on Nagar Paribahan route 22",
  },

  {
    id: 8,
    busName: "Dhaka Nagar Paribahan (Route 26)",
    busNameBn: "ঢাকা নগর পরিবহন (রুট ২৬)",
    district: ["Dhaka"],
    start: "Ghatarchar",
    end: "Pagla",
    stops: [
      "Ghatarchar", "Basila", "Basila CNG Stand", "Mohammadpur Bus Stand",
      "Town Hall", "Asad Gate", "Sobhanbag", "Kalabagan", "Science Lab",
      "New Market (Nilkhet)", "Azimpur", "Palashi", "Chankharpool",
      "Postogola", "Pagla",
    ],
    fareRate: 2.62,
    source: "BRRC / Dhaka Tribune reporting on Nagar Paribahan route 26",
  },

  {
    id: 9,
    busName: "Nagar Paribahan (Demra Line)",
    busNameBn: "নগর পরিবহন (ডেমরা লাইন)",
    district: ["Dhaka"],
    start: "Ghatarchar",
    end: "Demra Staff Quarter",
    stops: [
      "Ghatarchar", "Washpur", "Basila", "Mohammadpur Town Hall",
      "Asad Gate", "Farmgate", "Karwan Bazar", "Shahbagh", "Kakrail",
      "Fakirapool", "Motijheel", "Tikatuli", "Sayedabad", "Jatrabari",
      "Konapara", "Demra Staff Quarter",
    ],
    fareRate: 2.62,
    source: "DSCC / UNB reporting, Sept 2024 Nagar Paribahan expansion",
  },

  // ---- Same well-known Airport–Tongi–Gazipur corridor,
  //      different operators — VERIFY STOP ORDER LOCALLY ----

  {
    id: 10,
    busName: "Rajdhani Paribahan",
    busNameBn: "রাজধানী পরিবহন",
    district: ["Dhaka", "Gazipur"],
    start: "Sayedabad",
    end: "Gazipur Chourasta",
    stops: [
      "Sayedabad", "Motijheel", "Kakrail", "Moghbazar", "Mohakhali",
      "Banani", "Kuril", "Khilkhet", "Airport", "Azampur", "Abdullahpur",
      "Tongi", "Gazipur Chourasta",
    ],
    fareRate: 2.62,
    verified: false,
  },

  {
    id: 11,
    busName: "Turag Paribahan",
    busNameBn: "তুরাগ পরিবহন",
    district: ["Dhaka", "Gazipur"],
    start: "Mirpur",
    end: "Tongi",
    stops: [
      "Mirpur 12", "Kalshi", "ECB Square", "Kuril Bishwa Road", "Khilkhet",
      "Airport", "Azampur", "Abdullahpur", "Tongi",
    ],
    fareRate: 2.62,
    verified: false,
  },

  {
    id: 12,
    busName: "Etc Paribahan",
    busNameBn: "ইটিসি পরিবহন",
    district: ["Dhaka", "Gazipur"],
    start: "Gulistan",
    end: "Gazipur Chourasta",
    stops: [
      "Gulistan", "Paltan", "Kakrail", "Moghbazar", "Mohakhali", "Banani",
      "Kuril", "Airport", "Abdullahpur", "Tongi", "Cherag Ali",
      "Gazipur Chourasta",
    ],
    fareRate: 2.62,
    verified: false,
  },
];