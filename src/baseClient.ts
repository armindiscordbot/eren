import { Client, Collection, Intents } from 'discord.js';

class BaseClient extends Client {
  public commands: Collection<any, any>;

  constructor() {
    super({ intents: [Intents.FLAGS.GUILDS] });
    this.commands = new Collection();
  }
};

export default BaseClient;