const db = require('../db')
const { Category, Post } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const category1 = await new Category({
    description: 'Animals',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdNpxKYWwTznpRyrK-_JWE-O7-PUQY6Mf_pw&usqp=CAU'
  })
  category1.save()

  const category2 = await new Category({
    description: 'Languages',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2R6J5U0Hj75X4RSr2N1YLP84b6JE5kUvnlA&usqp=CAU'
  })
  category2.save()

  const category3 = await new Category({
    description: 'Mandala',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUkgJGAr3-iDDSloFKc3t-CC374YWdmIY0nNBr0z3P4Fg8BAWiQejnVQ5TMovAmnEFbpY&usqp=CAU'
  })
  category3.save()

  const category4 = await new Category({
    description: 'Tribal',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAkrat7N700W-w1cZE_Ar1sw4Y5xU7RLA6rg&usqp=CAU'
  })
  category4.save()

  const category5 = await new Category({
    description: 'Botanical',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsKGijUsrWSTHBbg1_SZ8QpIPrNc-x02u8uA&usqp=CAU'
  })
  category5.save()

  const category6 = await new Category({
    description: 'Realism',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhazZ4-Z5yhf5DGma9pS7FbSmO2fyK5C6_Q&usqp=CAU'
  })
  category6.save()

  const posts = [
    {
      nickname: 'Daenerys',
      description: 'Mother of Dragons',
      url: 'https://media1.popsugar-assets.com/files/thumbor/QJA6nF-NZAnGwvTSA4RxxXO5las/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2016/09/30/682/n/1922153/55fa966ff77378bc_04/i/Daenerys-Targaryen.jpg',
      category: category1._id
    },
    {
      nickname: 'Jon',
      description: 'The White Wolf',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAn_DH2qhobIYsOm_Yx9DAfkFfGYfP82b3OA&usqp=CAU',
      category: category1._id
    },
    {
      nickname: 'Cecilia',
      description: 'My spirit animal',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-1cCrChxO04E8WB74JPmMdKB4LEPhRJiGw&usqp=CAU',
      category: category1._id
    },
    {
      nickname: 'Tyrion',
      description: 'Once you have accepted your flaws, no one can use them against you.',
      url: 'https://th.bing.com/th/id/OIP.Fk_fsOd7LbmqbAly8BLv4gHaFj?w=283&h=212&c=7&r=0&o=5&dpr=2.5&pid=1.7',
      category: category2._id
    },

    {
      nickname: 'Hodor',
      description: 'Hold the Door',
      url: 'https://th.bing.com/th/id/OIP.eTC43FukDY7bSOLN4Hb7ZQHaHa?w=180&h=180&c=7&r=0&o=5&dpr=2.5&pid=1.7',
      category: category2._id
    },

    {
      nickname: 'Sansa',
      description: 'The North Remembers',
      url: 'https://tattoozz1.gumlet.io/wp-content/uploads/2022/05/game-of-thrones-tattoo-1.jpg?compress=true&quality=80&w=1024&dpr=2.5',
      category: category2._id
    },

    {
      nickname: 'Jess',
      description: 'My works so far',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_d4wAvP477Iji-xDPtFZIWM3h-1Hi9htvSdHCnNZqef17kmwLxVd1ZHFfn-7zKTKI8PY&usqp=CAU',
      category: category3._id
    },

    {
      nickname: 'Lena',
      description: 'This is one of my favorites!',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPqb-oCzuL-uWIRfj_UK2X4tdvctnVw61ONw&usqp=CAU',
      category: category3._id
    },

    {
      nickname: 'Billie',
      description: 'Love the quality and amount of detail in this one!',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_nuXIzFP4FB0GPfDL-EduBBdFNoTcyqqHrXI1z_7b-MkLT5KVI7ILkyoQu0oP2w08r1E&usqp=CAU',
      category: category3._id
    },

    {
      nickname: 'Bran',
      description: 'Failure is a necessary ingredient for success.',
      url: 'https://tattoozz1.gumlet.io/wp-content/uploads/2022/05/game-of-thrones-dragons-tattoo-mother-of-dragons-1.jpg?compress=true&quality=80&w=1024&dpr=2.5',
      category: category4._id
    },

    {
      nickname: 'Khal',
      description: 'If this is a dream, I will kill the man who tries to wake me.',
      url: 'https://tattoozz1.gumlet.io/wp-content/uploads/2022/05/game-of-thrones-tattoo-darwing-arm.jpg?compress=true&quality=80&w=900&dpr=2.5',
      category: category4._id
    },

    {
      nickname: 'Brienne',
      description: 'Honor & Valor',
      url: 'https://th.bing.com/th/id/OIP.mvHx_PNIh0uX1yKLRQtA0gHaHa?w=202&h=202&c=7&r=0&o=5&dpr=2.5&pid=1.7',
      category: category4._id
    },

    {
      nickname: 'Cersei',
      description: 'Pretty to look at.',
      url: 'https://i.dailymail.co.uk/i/pix/2014/08/26/1409041450051_Image_galleryImage_LOS_ANGELES_CA_AUGUST_25_.JPG',
      category: category5._id
    },

    {
      nickname: 'Jen',
      description: 'You can never have enough plants',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRiXc-6ZHgX0fMcTsxOabQmEVRmRVnjjwGfg&usqp=CAU',
      category: category5._id
    },

    {
      nickname: 'Jacob',
      description: 'Working on my sleve',
      url: 'https://mymodernmet.com/wp/wp-content/uploads/archive/T-ZHuhqPjmkD4TfCUTqa_alicecarrier1.jpg',
      category: category5._id
    },

    {
      nickname: 'Catelyn',
      description: 'Justice for my family',
      url: 'https://tattoozz1.gumlet.io/wp-content/uploads/2022/05/pete-davidson-game-of-thrones-tattoo.jpg?compress=true&quality=80&w=1024&dpr=2.5',
      category: category6._id
    },

    {
      nickname: 'Robb',
      description: 'I see it coming...',
      url: 'https://tattoozz1.gumlet.io/wp-content/uploads/2022/05/game-of-thrones-breaking-bad-tattoo.jpg?compress=true&quality=80&w=1024&dpr=2.5',
      category: category6._id
    },

    {
      nickname: 'Arya',
      description: 'My final achievement!',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKrXuddWqPpC8H82EudLYbrv-Z5-YvzHAxg&usqp=CAU',
      category: category6._id
    },
  ]

  await Post.insertMany(posts)
  console.log('Created posts!')
}

const run = async () => {
  await main()
  db.close()
}

run()