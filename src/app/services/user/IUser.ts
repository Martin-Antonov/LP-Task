export interface IUser {
  id: string;
  isDeveloper: boolean;
  devices: number;
  sessions: Array<unknown>;
  location: string;
  created: number;
  channels: IChannel;
  events: number;
  bucket: number;
  attributes: Record<string, unknown>;
}

export interface IChannel {
  push: boolean;
  email: boolean;
  webhook: boolean;
  appInbox: boolean;
}
