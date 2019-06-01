10.times do 
    Show.create(
        name: Faker::ProgrammingLanguage.name,
        date: Faker::Date.forward(23),
        address: Faker::Address.street_address,
        price: Faker::Commerce.price
    )
end

puts "data seeded"