// 1. Create a database called 'my_first_db'.
use my_first_db

// 2. Create students collection.
db.createCollection("students")

// 3. Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})

// 4. Create 5 students with the appropriate info.
db.students.insertOne({name: 'chris', home_state: 'ca', lucky_number: 10, birthday: {month: 1, day: 2, year: 3}})

db.students.insertOne({name: 'nick', home_state: 'wa', lucky_number: 12, birthday: {month: 2, day: 3, year: 4}})

db.students.insertOne({name: 'andy', home_state: 'mt', lucky_number: 3, birthday: {month: 3, day: 4, year: 5}})

db.students.insertOne({name: 'sonja', home_state: 'fl', lucky_number: 4, birthday: {month: 4, day: 5, year: 6}})

db.students.insertOne({name: 'wendy', home_state: 'mn', lucky_number: 5, birthday: {month: 5, day: 6, year: 7}})

// 5. Get all students.
db.students.find()

// 6. Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).
db.students.find({home_state: 'ca'})

// 7. Get all students whose lucky number is greater than 3
db.students.find({lucky_number: {$gt: 3}})

// 8. Get all students whose lucky number is less than or equal to 10
db.students.find({lucky_number: {$lte: 10}})

// 9. Get all students whose lucky number is between 1 and 9 (inclusive)
db.students.find({$and:[{lucky_number: {$gte: 1}}, {lucky_number: {$lte: 10}}]})

// 10. Add a field to each student collection called 'interests' that is an ARRAY.  It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.
db.students.updateMany({},{$push: {interests: ['coding', 'brunch', 'MongoDB']}})

// 11. Add some unique interests for each particular student into each of their interest arrays.
db.students.update({lucky_number: 1}, {$set: {interests: ['coding', 'brunch', 'MongoDB', 'javascript']}})

db.students.update({lucky_number: 2}, {$set: {interests: ['coding', 'brunch', 'MongoDB', 'python']}})

db.students.update({lucky_number: 3}, {$set: {interests: ['coding', 'brunch', 'MongoDB', 'java']}})

db.students.update({lucky_number: 4}, {$set: {interests: ['coding', 'brunch', 'MongoDB', 'cpp']}})

db.students.update({lucky_number: 5}, {$set: {interests: ['coding', 'brunch', 'MongoDB', 'java']}})

// 12. Add the interest 'taxes' into someone's interest array.
db.students.update({lucky_number: 1}, {$set: {interests: ['coding', 'brunch', 'MongoDB', 'javascript', 'taxes']}})

// 13. Remove the 'taxes' interest you just added.
db.students.update({lucky_number: 1}, {$set: {interests: ['coding', 'brunch', 'MongoDB', 'javascript']}})

// 14. Remove all students who are from California.
db.students.remove({home_state: 'ca'})

// 15. Remove a student by name.
db.students.remove({name: 'nick'})

// 16. Remove a student whose lucky number is greater than 5 (JUST ONE)
db.students.remove({lucky_number: {$gt: 5}}, true)

// 17. Add a field to each student collection called 'number_of_belts' and set it to 0.
db.students.updateMany({}, {$set: {number_of_belts: 0}})

// 18. Increment this field by 1 for all students in Washington (Seattle Dojo).
db.students.updateMany({home_state: 'wa'}, {$inc: {number_of_belts: 1}})

// 19. Rename the 'number_of_belts' field to 'belts_earned'
db.students.updateMany({}, {$rename: {'number_of_belts': 'belts_earned'}})

// 20. Remove the 'lucky_number' field.
db.students.updateMany({}, {$unset: {lucky_number: ''}})

// 21. Add a 'updated_on' field, and set the value as the current date.
db.students.updateMany({}, {$set: {updated_on: "9/9/2022"}})
