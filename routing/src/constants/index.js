import uuidv4 from 'uuid/v4';

export const ARTICLE_ONE_TITLE = 'Hello DIGITAL World!';
export const ARTICLE_ONE_TEXT = `The phrase digital world is most commonly used in digital pedagogy when 
    defining the need for digital citizenship, digital fluency, and digital literacy. The digital world is the
    availability and use of digital tools to communicate on the Internet, digital devices, smart
    devices and other technologies.`;
export const ARTICLE_ONE_IMAGE_URL = 'http://hdqwalls.com/wallpapers/8-bit-pixel-art-city-2o.jpg';
export const ARTICLE_TWO_TITLE = 'Earth day';
export const ARTICLE_TWO_TEXT = `Earth Day is an annual event celebrated on April 22. Worldwide, various
    events are held to demonstrate support for environmental protection. First celebrated in 1970, Earth Day
    events in more than 193 countries are now coordinated globally by the Earth Day Network.`;
export const ARTICLE_TWO_IMAGE_URL = 'https://thumbs.dreamstime.com/b/la-terre-de-plan%C3%A8te-de-l-espace-extra-atmosph%C3%A9rique-illustration-de-pixel-art-70067652.jpg';
export const TYPE_NAME = 'name';
export const TYPE_PASSWORD = 'password';
export const USER_NAME = 'admin';
export const USER_PASSWORD = '12345';
export const ARTICLE_TITLE = 'title';
export const ARTICLE_BODY = 'body';
export const DEFAULT_IMAGE_URL = 'http://cs.pes.edu/wp-content/uploads/2016/06/default.jpg';
export const EMPTY_STRING = '';
export const ALT_IMAGE = 'Not found, sorry';

export const TYPE_TEXT = 'text';
export const TYPE_FILE = 'file';
export const ACCEPT_FOR_FILE_INPUT = 'image/*';
export const TYPE_SUBMIT = 'submit';

export const LOGIN = 'Login';
export const UPDATE = 'Update';
export const CREATE = 'Create';
export const ARTICLE = 'article';
export const TITLE = 'Title';
export const TEXT = 'Text';

export const INITIAL_STATE = {
    isUserAuthorized: false,
    articles: [{
        title: ARTICLE_ONE_TITLE,
        body: ARTICLE_ONE_TEXT,
        src: ARTICLE_ONE_IMAGE_URL,
        id: uuidv4()
    }, {
        title: ARTICLE_TWO_TITLE,
        body: ARTICLE_TWO_TEXT,
        src: ARTICLE_TWO_IMAGE_URL,
        id: uuidv4()
    }]
};

export const INITIAL_STATE_FOR_LOGIN = {
    [TYPE_NAME]: EMPTY_STRING,
    [TYPE_PASSWORD]: EMPTY_STRING
};

export const INPUT_FIELDS_FOR_LOGIN = [
    {
        name: 'Name',
        type: 'text',
        typeInput: 'name',
        id: 1
    },
    {
        name: 'Password',
        type: 'password',
        typeInput: 'password',
        id: 2
    }
];

export const EMPTY_URL = '/';
export const MAIN_URL = '/main';
export const ARTICLES_URL = '/articles';
export const CREATE_URL = '/create';
export const EDIT_URL = '/edit';
export const ID_URL = '/:id';
export const LOGIN_URL = '/logIn';
export const ERROR_URL = '/404';