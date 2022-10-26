import moment from 'moment';

export interface Issue {
  title: string;
  number: number;
  updated_at: string;
  labels: Label[];
  pull_request: any;
  state: string;
  locked: boolean;
}

export interface Milestone {
  id: number;
  title: string;
  number: number;
  updated_at: string;
  description: string;
  open_issues: number;
  closed_issues: number;
  state: string;
  due_on?: string;
}

export interface Label {
  name: string;
}

export interface GlobalMilestone {
  id: string;
  emoji: string;
  name: string;
  firstDueDate: moment.Moment;
}

// Milestones:
//
// `🍎  Apple` - May 13 2020
// `🚲  Bike` - May 20 2020
// `🌵  Cactus` - May 27 2020
// `🦆  Duck` - June 3 2020 (@marissamarym's bday 🧁)
// `🥚  Egg` - June 10 2020
// `🥏  Frisbee` - June 17 2020
// `🍇  Grape` - June 24 2020
// `🐴  Horse` - July 1 2020
// `🦞  Lobster` - July 8 2020
// `🗺  Map` - July 15 2020
// `🍊  Orange` - July 22 2020
// `🦔  Porcupine` - July 29 2020
// `☀️  Sun` - August 5 2020
// `🎾  Tennis` - August 12 2020
// `☂️  Umbrella` - August 19 2020
// `🍉  Watermelon` - August 26 2020

function _getFirstDueDate(date: string) {
  return moment.utc(date, 'YYYY-MM-DD', true).add(12, 'hours');
}

// TODO: Have a way of validating/changing this if people really want to change the names.
// If you do change the names or formatting, make sure it's backwards compatible.
const APPLE = Object.freeze({
  id: 'APPLE',
  emoji: `🍎`,
  name: `Apple`,
  firstDueDate: _getFirstDueDate('2020-05-13')
});

const BIKE = Object.freeze({
  id: 'BIKE',
  emoji: `🚲`,
  name: `Bike`,
  firstDueDate: _getFirstDueDate('2020-05-20')
});
const CACTUS = Object.freeze({
  id: 'CACTUS',
  emoji: `🌵`,
  name: `Cactus`,
  firstDueDate: _getFirstDueDate('2020-05-27')
});
const DUCK = Object.freeze({
  id: 'DUCK',
  emoji: `🦆`,
  name: `Duck`,
  firstDueDate: _getFirstDueDate('2020-06-03')
});
const EGG = Object.freeze({
  id: 'EGG',
  emoji: `🥚`,
  name: `Egg`,
  firstDueDate: _getFirstDueDate('2020-06-10')
});
const FRISBEE = Object.freeze({
  id: 'FRISBEE',
  emoji: `🥏`,
  name: `Frisbee`,
  firstDueDate: _getFirstDueDate('2020-06-17')
});
const GRAPE = Object.freeze({
  id: 'GRAPE',
  emoji: `🍇`,
  name: `Grape`,
  firstDueDate: _getFirstDueDate('2020-06-24')
});
const HORSE = Object.freeze({
  id: 'HORSE',
  emoji: `🐴`,
  name: `Horse`,
  firstDueDate: _getFirstDueDate('2020-07-01')
});
const LOBSTER = Object.freeze({
  id: 'LOBSTER',
  emoji: `🦞`,
  name: `Lobster`,
  firstDueDate: _getFirstDueDate('2020-07-08')
});
const MAP = Object.freeze({
  id: 'MAP',
  emoji: `🗺`,
  name: `Map`,
  firstDueDate: _getFirstDueDate('2020-07-15')
});
const ORANGE = Object.freeze({
  id: 'ORANGE',
  emoji: `🍊`,
  name: `Orange`,
  firstDueDate: _getFirstDueDate('2020-07-22')
});
const PORCUPINE = Object.freeze({
  id: 'PORCUPINE',
  emoji: `🦔`,
  name: `Porcupine`,
  firstDueDate: _getFirstDueDate('2020-07-29')
});
const SUN = Object.freeze({
  id: 'SUN',
  emoji: `☀️`,
  name: `Sun`,
  firstDueDate: _getFirstDueDate('2020-08-05')
});
const TENNIS = Object.freeze({
  id: 'TENNIS',
  emoji: `🎾`,
  name: `Tennis`,
  firstDueDate: _getFirstDueDate('2020-08-12')
});
const UMBRELLA = Object.freeze({
  id: 'UMBRELLA',
  emoji: `☂️`,
  name: `Umbrella`,
  firstDueDate: _getFirstDueDate('2020-08-19')
});
const WATERMELON = Object.freeze({
  id: 'WATERMELON',
  emoji: `🍉`,
  name: `Watermelon`,
  firstDueDate: _getFirstDueDate('2020-08-26')
});

const map = new Map<string, GlobalMilestone>();
map.set('APPLE', APPLE);
map.set('BIKE', BIKE);
map.set('CACTUS', CACTUS);
map.set('DUCK', DUCK);
map.set('EGG', EGG);
map.set('FRISBEE', FRISBEE);
map.set('GRAPE', GRAPE);
map.set('HORSE', HORSE);
map.set('LOBSTER', LOBSTER);
map.set('MAP', MAP);
map.set('ORANGE', ORANGE);
map.set('PORCUPINE', PORCUPINE);
map.set('SUN', SUN);
map.set('TENNIS', TENNIS);
map.set('UMBRELLA', UMBRELLA);
map.set('WATERMELON', WATERMELON);
export const GLOBAL_MILESTONES_MAP = Object.freeze(map);
