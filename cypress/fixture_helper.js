const findArticles = [
    {
        "id": "31",
        "name": "Baby Boy Top",
        "status": "available",
        "imageLink": "https://ih1.redbubble.net/image.1232366750.7238/ra,kids_tee,x900,FFFFFF:97ab1c12de,front-pad,750x1000,f8f8f8.jpg",
        "altImage": "A baby boy's top",
        "articleType": "tops",
        "ageGroup": "baby",
        "color": "white",
        "gender": "boy",
        "condition": "great",
        "description": "A White t-shirt that says 'cute smart & funny just like my Daddy'",
        "price": 3,
        "user": {
            "id": "4",
            "name": "Tien Gislason",
            "__typename": "User"
          },
          "__typename": "Article"
    },
    {
        "id": "32",
        "name": "Funny Baby Boy Onesie",
        "status": "available",
        "imageLink": "https://cdn.shopify.com/s/files/1/1418/9598/products/A12_Funny_Baby_Boy_Onesies_BabyBlue_1024x1024.jpg?v=1510466537",
        "altImage": "A baby boy's onesie",
        "articleType": "onesies",
        "ageGroup": "baby",
        "color": "white",
        "gender": "boy",
        "condition": "great",
        "description": "A White onesie that says 'Ladies I have Arrived'",
        "price": 5,
        "user": {
            "id": "6",
            "name": "Colin Gutmann I",
            "__typename": "User"
          },
          "__typename": "Article"
    },
    {
        "id": "33",
        "name": "Cute Sweater",
        "status": "available",
        "imageLink": "https://static.wixstatic.com/media/f976b5_167d094a6b0a465380849842efa3a8ac~mv2_d_1597_1559_s_2.jpg/v1/fill/w_640,h_620,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f976b5_167d094a6b0a465380849842efa3a8ac~mv2_d_1597_1559_s_2.jpg",
        "altImage": "A biege baby sweater",
        "articleType": "tops",
        "ageGroup": "baby",
        "color": "biege",
        "gender": "unisex",
        "condition": "great",
        "description": "A biege sweater, very cute for fall and winter.",
        "price": 5,
        "user": {
            "id": "4",
            "name": "Tien Gislason",
            "__typename": "User"
          },
          "__typename": "Article"
    },
    {
        "id": "34",
        "name": "Tan Pants",
        "status": "available",
        "imageLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpZTmu4czhCVPzXsF4hWY0l2ku5Y4pMav28Q&usqp=CAU",
        "altImage": "A tan pair of pants",
        "articleType": "tops",
        "ageGroup": "toddler",
        "color": "tan",
        "gender": "unisex",
        "condition": "great",
        "description": "Tan pair of pants",
        "price": 5,
        "user": {
            "id": "4",
            "name": "Tien Gislason",
            "__typename": "User"
          },
          "__typename": "Article"
    },
    {
        "id": "35",
        "name": "Tan Pants",
        "status": "unavailable",
        "imageLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpZTmu4czhCVPzXsF4hWY0l2ku5Y4pMav28Q&usqp=CAU",
        "altImage": "A tan pair of pants",
        "articleType": "pants",
        "ageGroup": "little_kid",
        "color": "tan",
        "gender": "unisex",
        "condition": "great",
        "description": "Tan pair of pants",
        "price": 5,
        "user": {
            "id": "5",
            "name": "Johnny Raynor",
            "__typename": "User"
        },
        "__typename": "Article"
    }
]

const findUsers = [
  {
    "id": "7",
    "name": "Fredda Hauck",
    "__typename": "User",
    "articles": [
      {
        "id": "2",
        "name": "Leather Boots",
        "status": "available",
        "imageLink": "www.image.com",
        "altImage": "it is clearly an image",
        "articleType": "dresses",
        "ageGroup": "baby",
        "color": "azure",
        "gender": "unisex",
        "condition": "perfect",
        "description": "Whenever you read a good book, it's like the author is right there, in the room talking to you, which is why I don't like to read good books.",
        "price": 16,
        "__typename": "Article"
      },
      {
          "id": "9",
          "name": "Wheat",
          "status": "available",
          "imageLink": "www.image.com",
          "altImage": "it is clearly an image",
          "articleType": "bottoms",
          "ageGroup": "big_kid",
          "color": "magenta",
          "gender": "female",
          "condition": "good",
          "description": "If trees could scream, would we be so cavalier about cutting them down? We might, if they screamed all the time, for no good reason.",
          "price": 16,
          "__typename": "Article"
      },
      {
          "id": "14",
          "name": "Stone Hoe",
          "status": "available",
          "imageLink": "www.image.com",
          "altImage": "it is clearly an image",
          "articleType": "bottoms",
          "ageGroup": "baby",
          "color": "grey",
          "gender": "male",
          "condition": "good",
          "description": "I'd rather be rich than stupid.",
          "price": 29,
          "__typename": "Article"
      },
      {
          "id": "19",
          "name": "Iron Shovel",
          "status": "available",
          "imageLink": "www.image.com",
          "altImage": "it is clearly an image",
          "articleType": "dresses",
          "ageGroup": "little_kid",
          "color": "turquoise",
          "gender": "male",
          "condition": "great",
          "description": "If they ever come up with a swashbuckling school, I think one of the courses should be laughing, then jumping off something.",
          "price": 26,
          "__typename": "Article"
      },
      {
          "id": "25",
          "name": "Bucket",
          "status": "available",
          "imageLink": "www.image.com",
          "altImage": "it is clearly an image",
          "articleType": "bottoms",
          "ageGroup": "baby",
          "color": "blue",
          "gender": "female",
          "condition": "great",
          "description": "Whether they find life there or not, I think Jupiter should be called an enemy planet.",
          "price": 23,
          "__typename": "Article"
      },
      {
          "id": "26",
          "name": "Minecart with Furnace",
          "status": "available",
          "imageLink": "www.image.com",
          "altImage": "it is clearly an image",
          "articleType": "other",
          "ageGroup": "big_kid",
          "color": "violet",
          "gender": "male",
          "condition": "fair",
          "description": "Ambition is like a frog sitting on a Venus Flytrap. The flytrap can bite and bite, but it won't bother the frog because it only has little tiny plant teeth. But some other stuff could happen and it could be like ambition.",
          "price": 28,
          "__typename": "Article"
      }
    ]
  }
]

export const constructJSON = (articleType, ageGroup, gender) => {
  if(!articleType) {articleType = ''} 
  if (!ageGroup) {ageGroup = ''} 
  if (!gender) {gender = ''}
  
  return {
    "data": {
      "findArticles": findArticles.filter(art => (art.gender.includes(gender) && art.ageGroup.includes(ageGroup) && art.articleType.includes(articleType)))
    }
  }
}


export const detailJSON = (passedID) => {
  return {
    "data": {
      "findArticle": findArticles.find(art => art.id === passedID)
    }
  }
}

export const userJSON = (idParam) => {
  // const articles = findUsers.articles
  return {
    "data": {
      "findUser": findUsers.find(art => art.user.id === idParam)
    }
  }
}