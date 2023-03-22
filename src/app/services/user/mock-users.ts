import { IUser } from "./IUser";

const LOCATIONS = ['Sofia', 'San Francisco', 'Amsterdam', 'Singapore'];
const YEAR_MS = 365 * 24 * 60 * 60 * 1000;

export function getMockUsers(): Array<IUser> {
  const NOW = Date.now()
  return new Array(100).fill(0).map((_, i) => ({
    id: 'usr_' + i,
    isDeveloper: i % 5 === 0,
    devices: i % 3 + 1,
    sessions: new Array((i % 5) * 3 + 2).fill({}),
    location: LOCATIONS[i % LOCATIONS.length],
    created: NOW - (i % 5) * YEAR_MS,
    events: i * 3 % 7,
    bucket: i % 100,
    channels: {
      push: false,
      email: true,
      webhook: true,
      appInbox: true
    },
    attributes: {
      email: `usr_${i}@example.com`
    }
  }));
}


