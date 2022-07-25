const db = require('../db')
const { Category, Post } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const category1 = await new Category({
    description: 'Animals',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdNpxKYWwTznpRyrK-_JWE-O7-PUQY6Mf_pw&usqp=CAU'
  })
  post1.save()

  const category2 = await new Category({
    description: 'Languages',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2R6J5U0Hj75X4RSr2N1YLP84b6JE5kUvnlA&usqp=CAU'
  })
  post2.save()

  const category3 = await new Category({
    description: 'Mandala',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUkgJGAr3-iDDSloFKc3t-CC374YWdmIY0nNBr0z3P4Fg8BAWiQejnVQ5TMovAmnEFbpY&usqp=CAU'
  })
  post3.save()

  const category4 = await new Category({
    description: 'Tribal',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAkrat7N700W-w1cZE_Ar1sw4Y5xU7RLA6rg&usqp=CAU'
  })
  post4.save()

  const category5 = await new Category({
    description: 'Botanical',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsKGijUsrWSTHBbg1_SZ8QpIPrNc-x02u8uA&usqp=CAU'
  })
  post5.save()

  const category6 = await new Category({
    description: 'Realism',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhazZ4-Z5yhf5DGma9pS7FbSmO2fyK5C6_Q&usqp=CAU'
  })
  post5.save()

  const posts = [
    {
      nickname: '',
      description: '',
      url: '',
      category: category1._id
    },
    {
      nickname: '',
      description: '',
      url: '',
      category: category1._id
    },
    {
      nickname: '',
      description: '',
      url: '',
      category: category1._id
    },
    {
      nickname: '',
      description: '',
      url: '',
      category: category2._id
    },

    {
      nickname: '',
      description: '',
      url: '',
      category: category2._id
    },

    {
      nickname: '',
      description: '',
      url: '',
      category: category2._id
    },

    {
      nickname: '',
      description: '',
      url: '',
      category: category3._id
    },

    {
      nickname: '',
      description: '',
      url: '',
      category: category3._id
    },

    {
      nickname: '',
      description: '',
      url: '',
      category: category3._id
    },

    {
      nickname: '',
      description: '',
      url: '',
      category: category4._id
    },

    {
      nickname: '',
      description: '',
      url: '',
      category: category4._id
    },

    {
      nickname: '',
      description: '',
      url: '',
      category: category4._id
    },

    {
      nickname: '',
      description: '',
      url: '',
      category: category5._id
    },

    {
      nickname: '',
      description: '',
      url: '',
      category: category5._id
    },

    {
      nickname: '',
      description: '',
      url: '',
      category: category5._id
    },

    {
      nickname: '',
      description: '',
      url: '',
      category: category6._id
    },

    {
      nickname: '',
      description: '',
      url: '',
      category: category6._id
    },

    {
      nickname: '',
      description: '',
      url: '',
      category: category6._id
    },
  ]

  await Posts.insertMany(posts)
  console.log('Created posts!')
}

const run = async () => {
  await main()
  db.close()
}

run()