monday_month = 5
monday_day = 13


mainTheater = Space.create(name: "Main Theater", location: "40 Prospect Street", capacity: 90, description: "The main theater of ImprovBoston. Has a piano, projection system, scoreboard, and room for over 90 people!")
studio = Space.create(name: "Studio Theater", location: "40 Prospect Street", capacity: 40, description: "More intimate space to perform. Has a piano, projector, and stage.")
lowerTrainingCenter = Space.create(name: "Lower Training Center", location: "114 Bishop Allen Drive", description: "A place to practice.")
upperTrainingCenter = Space.create(name: "Upper Training Center", location: "114 Bishop Allen Drive", description: "A place to practice.")
room2 = Space.create(name: "620 Room 2", location: "620 Mass Ave", description: "A place to practice.")
room6 = Space.create(name: "620 Room 6", location: "620 Mass Ave", description: "A place to practice.")
room7 = Space.create(name: "620 Room 7", location: "620 Mass Ave", description: "A place to practice.")

# rehearsals
rehearsals = [
  {name: "Umbrella Arts Audition", space: room2, start_time: "2019-#{monday_month}-#{monday_day}T17:30:00-04:00", end_time: "2019-#{monday_month}-#{monday_day}T21:00:00-04:00", contact_name: "Mike Carr" },
  {name: "The Wild Rehearsal", space: room7, start_time: "2019-#{monday_month}-#{monday_day}T19:00:00-04:00", end_time: "2019-#{monday_month}-#{monday_day}T21:00:00-04:00", contact_name: "John Serpico" },
  {name: "Mainstage Rehearsal", space: upperTrainingCenter, start_time: "2019-#{monday_month}-#{monday_day}T19:00:00-04:00", end_time: "2019-#{monday_month}-#{monday_day}T21:00:00-04:00", contact_name: "Danny Balel" },
  {name: "Terrible People Rehearsal", space: lowerTrainingCenter, start_time: "2019-#{monday_month}-#{monday_day}T21:00:00-04:00", end_time: "2019-#{monday_month}-#{monday_day}T23:00:00-04:00", contact_name: "John Serpico" },
  {name: "Family Show Rehearsal", space: upperTrainingCenter, start_time: "2019-#{monday_month}-#{monday_day+1}T19:00:00-04:00", end_time: "2019-#{monday_month}-#{monday_day+1}T21:00:00-04:00", contact_name: "Whitney Hawkins" },
  {name: "Face Off Rehearsal", space: room6, start_time: "2019-#{monday_month}-#{monday_day+1} 19:00:00-04:00", end_time: "2019-#{monday_month}-#{monday_day+1} 21:00:00-04:00", contact_name: "Mary Largenton" },
  {name: "Exciting Stories from a Tall Building", space: lowerTrainingCenter, start_time: "2019-#{monday_month}-#{monday_day+4} 21:00:00-04:00", end_time: "2019-#{monday_month}-#{monday_day+4} 22:00:00-04:00", contact_name: "Scott Kremer" },
  {name: "Comedy Lab Rehearsal", space: room7, start_time: "2019-#{monday_month}-#{monday_day+5} 11:00:00-04:00", end_time: "2019-#{monday_month}-#{monday_day+5} 12:30:00-04:00", contact_name: "Scott Kremer" },
  {name: "McGuffin Rehearsal", space: mainTheater, start_time: "2019-#{monday_month}-#{monday_day+5} 12:30:00-04:00", end_time: "2019-#{monday_month}-#{monday_day+5} 14:30:00-04:00", contact_name: "Maya Bialik" },
  {name: "Comedy, America! Rehearsal", space: room7, start_time: "2019-#{monday_month}-#{monday_day+6} 14:00:00-04:00", end_time: "2019-#{monday_month}-#{monday_day+6} 16:00:00-04:00", contact_name: "Marissa Farmer" },
  {name: "Stockton Rehearsal", space: lowerTrainingCenter, start_time: "2019-#{monday_month}-#{monday_day+6} 16:00:00-04:00", end_time: "2019-#{monday_month}-#{monday_day+6} 18:00:00-04:00", contact_name: "Ben Scurria" },
  {name: "Babylon Rehearsal", space: room7, start_time: "2019-#{monday_month}-#{monday_day+6} 16:00:00-04:00", end_time: "2019-#{monday_month}-#{monday_day+6} 18:00:00-04:00", contact_name: "Marissa Farmer" },
  {name: "All Access Rehearsal", space: studio, start_time: "2019-#{monday_month}-#{monday_day+6} 16:00:00-04:00", end_time: "2019-#{monday_month}-#{monday_day+6} 18:00:00-04:00", contact_name: "Ashley Voltz" },
  {name: "Neighbors Rehearsal", space: room7, start_time: "2019-#{monday_month}-#{monday_day+6} 19:00:00-04:00", end_time: "2019-#{monday_month}-#{monday_day+6} 21:00:00-04:00", contact_name: "Ben Gibb" },
  {name: "TourCo Rehearsal", space: upperTrainingCenter, start_time: "2019-#{monday_month}-#{monday_day+6} 19:00:00-04:00", end_time: "2019-#{monday_month}-#{monday_day+6} 22:00:00-04:00", contact_name: "Kelly MacFarland" }
]

rehearsals.each do |event|
  Event.create!(event)
end

# Shows
shows = [
  {name: "Comedy Lab", space: studio, start_time: "2019-#{monday_month}-#{monday_day+2} 20:00:00-04:00", end_time: "2019-#{monday_month}-#{monday_day+2} 21:30:00-04:00", contact_name: "Josh Shelor"},
  {name: 'Mainstage', space: mainTheater, start_time: "2019-#{monday_month}-#{monday_day+3} 20:00:00-04:00", end_time: "2019-#{monday_month}-#{monday_day+5} 21:30:00-04:00", contact_name: "Josh Shelor"},
  {name: "ClueProv", space: mainTheater, start_time: "2019-#{monday_month}-#{monday_day+4} 22:00:00-04:00", end_time: "2019-#{monday_month}-#{monday_day+4} 23:30:00-04:00", contact_name: "Joe Szafarowicz"},
  {name: "Family Show", space: mainTheater, start_time: "2019-#{monday_month}-#{monday_day+5} 16:00:00-04:00", end_time: "2019-#{monday_month}-#{monday_day+5} 17:30:00-04:00", contact_name: "Whitney Hawkins"},
  {name: "Comedy Lab", space: studio, start_time: "2019-#{monday_month}-#{monday_day+6} 20:00:00-04:00", end_time: "2019-#{monday_month}-#{monday_day+6} 21:30:00-04:00", contact_name: "Josh Shelor"}
]

shows.each do |event|
  Event.create!(event)
end

# Classes
classes = [
  {name: "Improv 301", space: room2, start_time: "2019-#{monday_month}-#{monday_day+3} 18:30:00-04:00", end_time: "2019-#{monday_month}-#{monday_day+3} 21:00:00-04:00", contact_name: "Mike Carr"},
  {name: "Improv 401", space: upperTrainingCenter, start_time: "2019-#{monday_month}-#{monday_day+3} 18:30:00-04:00", end_time: "2019-#{monday_month}-#{monday_day+3} 21:00:00-04:00", contact_name: "MB DeKara"},
  {name: "Improv 601", space: room6, start_time: "2019-#{monday_month}-#{monday_day+3} 18:30:00-04:00", end_time: "2019-#{monday_month}-#{monday_day+3} 21:00:00-04:00", contact_name: "Mary Largenton"},
  {name: "Improv 201", space: lowerTrainingCenter, start_time: "2019-#{monday_month}-#{monday_day+4} 16:00:00-04:00", end_time: "2019-#{monday_month}-#{monday_day+4} 18:00:00-04:00", contact_name: "Danny Balel"},
  {name: "Improv 101", space: mainTheater, start_time: "2019-#{monday_month}-#{monday_day+4} 16:00:00-04:00", end_time: "2019-#{monday_month}-#{monday_day+4} 18:00:00-04:00", contact_name: "Sam Hoar"},
  {name: "Improv 301", space: room6, start_time: "2019-#{monday_month}-#{monday_day+5} 10:30:00-04:00", end_time: "2019-#{monday_month}-#{monday_day+5} 13:00:00-04:00", contact_name: "Gwen Coburn"},
  {name: "Improv 101", space: room6, start_time: "2019-#{monday_month}-#{monday_day+5} 10:30:00-04:00", end_time: "2019-#{monday_month}-#{monday_day+5} 12:30:00-04:00", contact_name: "Sam Hoar"},
  {name: "Short Form", space: room6, start_time: "2019-#{monday_month}-#{monday_day+5} 10:30:00-04:00", end_time: "2019-#{monday_month}-#{monday_day+5} 12:30:00-04:00", contact_name: "Matt Bistany"},
  {name: "Improv 101", space: upperTrainingCenter, start_time: "2019-#{monday_month}-#{monday_day+6} 10:30:00-04:00", end_time: "2019-#{monday_month}-#{monday_day+6} 12:30:00-04:00", contact_name: "Michelle Boncek"},
  {name: "Improv 201", space: lowerTrainingCenter, start_time: "2019-#{monday_month}-#{monday_day+6} 10:30:00-04:00", end_time: "2019-#{monday_month}-#{monday_day+6} 12:30:00-04:00", contact_name: "Liz Roderick"},
  {name: "Musical Improv 201", space: room6, start_time: "2019-#{monday_month}-#{monday_day+6} 16:00:00-04:00", end_time: "2019-#{monday_month}-#{monday_day+6} 18:30:00-04:00", contact_name: "Jeff Kimball"}
]

classes.each do |event|
  Event.create!(event)
end
