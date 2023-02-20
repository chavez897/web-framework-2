import { maleNames, skills, languages } from "../services/utils/randomLists.js";
import { LoremIpsum } from "lorem-ipsum";
import { unsplashImages } from "../services/utils/unsplashImages.js";
import Tutor from "../database/models/tutorModel.js"

export const postManyTutorsService = async () => {
  const tutors = await tutorList();
  await Tutor.deleteMany({}).then((error) => {
    console.log("Deleted all previous tutors");
  });
  await Tutor.insertMany(tutors).then(() => {
    console.log("New random tutors added");
  });
  return `Previous tutors where deleted and ${process.env.RANDOM_TUTORS_NUMBER} random tutors where added`;
};

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const tutorList = async () => {
  const tutors = [];
  const picturesList = await randomPictures();
  for (let i = 0; i < process.env.RANDOM_TUTORS_NUMBER; i++) {
    const randomSkills = generateRandomList(skills);
    tutors.push({
      image: picturesList[i],
      description: lorem.generateSentences(5),
      spokenLanguages: randomLanguages(randomSkills),
      skills: randomSkills,
      hourlyRate: getRandomInt(16, 100),
    });
  }
  return tutors;
};

const randomPictures = async () => {
  let unsplashApiCallResult;
  const imagesUrls = [];
  for (let i = 0; i < 1; i++) {
    unsplashApiCallResult = await unsplashImages(i);
    switch (unsplashApiCallResult.type) {
      case "error":
        // console.log("error occurred: ", result.errors[0]);
        console.error(
          `An error occurred while calling the Unsplash API: ${unsplashApiCallResult.errors[0]}`
        );
        throw new Error(unsplashApiCallResult.errors[0]);
      case "success":
        imagesUrls.push(
          unsplashApiCallResult.response.results.map((image) => image.urls.full)
        );
    }
  }
  const imagesUrlList = [];
  imagesUrls.map((page) => page.map((url) => imagesUrlList.push(url)));
  return imagesUrlList;
};

const randomLanguages = (randomSkills) => {
  const languagesList = generateRandomList(languages);
  const languagesIncludedInSkills = [];
  languagesList.some((language) => {
    if (randomSkills.includes(language))
      languagesIncludedInSkills.push(language);
    return true;
  });
  if (languagesIncludedInSkills)
    return languagesList.concat(languagesIncludedInSkills);
  return languagesList;
};

const generateRandomList = (referenceList) => {
  var newList = [];
  for (let i = 0; i < getRandomInt(1, 5); i++) {
    newList.push(referenceList[getRandomInt(1, referenceList.length)]);
  }
  //Delete duplicates
  return [...new Set(newList)];
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
