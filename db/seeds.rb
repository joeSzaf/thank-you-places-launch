# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

mainStage = Space.create(name: "Main Stage", location: "40 Prospect Street", capacity: 90, description: "The main theater of ImprovBoston. Has a piano, projection system, scoreboard, and room for over 90 people!")
studio = Space.create(name: "Studio Theater", location: "40 Prospect Street", capacity: 40, description: "More intimate space to perform. Has a piano, projector, and stage.")
lowerTrainingCenter = Space.create(name: "Lower Training Center", location: "114 Bishop Allen Drive", description: "A place to practice.")
upperTrainingCenter = Space.create(name: "Upper Training Center", location: "114 Bishop Allen Drive", description: "A place to practice.")
room2 = Space.create(name: "620 Room 2", location: "620 Mass Ave", description: "A place to practice.")
room6 = Space.create(name: "620 Room 6", location: "620 Mass Ave", description: "A place to practice.")
room7 = Space.create(name: "620 Room 7", location: "620 Mass Ave", description: "A place to practice.")
