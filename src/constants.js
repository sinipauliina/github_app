export const URLS = {
  AUTHOR_SITE: 'https://www.sinipauliina.com',
  PLACEHOLDER_IMG: 'https://dummyimage.com/80x80/2c3531/2c3531',
}

export const CONTENT = {
  HEADER: {
    APP_TITLE: 'GitHub App',
    SEARCH_BOX_PLACEHOLDER: 'Type a username',
    BUTTON_TEXT: 'Search',
  },
  NOT_FOUND: {
    TITLE: 'Oh noes! :(',
    MESSAGE: 'It seems to be a bit empty here. Maybe another search?',
  },
  HOME: {
    TITLE: 'Hello World!',
    MESSAGE:
      "Wanna check the commit history of your favourite GitHub user's repos? " +
      'Just type the username into the field above and hit the Search button!',
  },
  USER: {
    ERROR_TITLE: 'Oh noes! :(',
    FETCHING_ERROR: 'Something went wrong during the fetching.',
    NOTHING_FOUND:
      "I didn't find any repos belonging to the user you were looking for. " +
      "Either the user doesn't exist or they don't have any repos. " +
      'Maybe another search?',
  },
  SINGLE_REPO: {
    ERROR_TITLE: 'Oh noes! :(',
    FETCHING_ERROR: 'Something went wrong during the fetching.',
    NOTHING_FOUND: "I didn't find any commits. Maybe check another repo?",
  },
}
