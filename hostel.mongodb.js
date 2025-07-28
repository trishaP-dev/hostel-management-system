use("Hostel_Management_proj")

db.student.insertOne({
  userid: "abc",
  password: "#iet_davv@27",
  role: "Student" 
})
db.warden.insertOne({
  userid: "abc",
  password: "#iet_davv@27",
  role: "Warden" 
})
db.Admin.insertOne({
  userid: "abc",
  password: "#iet_davv@27",
  role: "Admin" 
})