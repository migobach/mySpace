50.times do
  name = Faker::Name.unique.name
  @new_user = User.create(
    name: name,
    image: Faker::Avatar.image(name, '50x50', 'png', 'set3'),
    email: Faker::Internet.unique.email,
    password: 'password'
  )
    10.times do
      @new_user.posts.create(
    title: Faker::Hipster.words(2).join(' '),
    body: Faker::Lorem.paragraph(3)
      )
    end
  end